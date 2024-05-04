IMAGE := restaurants
SHA := $(shell git rev-parse --short HEAD)
APP_PORT=3000
APP_NAME=ms-restaurants
DB_USER=postgres
DB_PASS=mysecretpassword
DB_NAME=restaurants

run: clean build create-network db-run ms-run

build:
	@docker build --no-cache -t $(IMAGE):$(SHA) .

clean:
	@rm -rf build dist node_modules

create-network:
	@if [ "$(shell docker network ls | grep net )" = "" ]; then \
		docker network create net; \
	fi

db-run:
	@docker run --name postgresql \
		-e POSTGRES_USER=$(DB_USER) \
		-e POSTGRES_PASSWORD=$(DB_PASS) \
		-p 5432:5432 \
		--network net \
		-d postgis/postgis

ms-run:
	@docker run --name $(APP_NAME) \
		-e APP_NAME=$(APP_NAME) \
		-e APP_PORT=$(APP_PORT) \
		-e DB_USER=$(DB_USER) \
		-e DB_PASS=$(DB_PASS) \
		-e DB_NAME=$(DB_NAME) \
		-e DB_HOST=postgresql \
		-e DB_PORT=5432 \
		-p $(APP_PORT):$(APP_PORT) \
		--network net \
		--restart=unless-stopped \
		-d $(IMAGE):$(SHA)


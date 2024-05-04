FROM node:20.12.1-alpine3.19 AS build

COPY . /app/
WORKDIR /app/
RUN npm install && npm run build && mkdir -p /build/dist
RUN mv ./dist/* /build/dist
COPY ./package*.json /build/

FROM node:20.12.1-alpine3.19
COPY --from=build /build /app/
WORKDIR /app/
RUN npm install --production
CMD ["node", "/app/dist/app/main"]


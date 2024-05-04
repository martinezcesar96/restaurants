<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>

## Description

This project has been created in order to complete a technical test.

## Installation

```bash
$ npm install
```

## Running the app

Before you start app you need configure an env file.

Please check ```.env.example``` and then you can continue.

```bash
$ npm run start
```

## Test

```bash
$ npm run test
```

## Open API Docs (Swagger)
Open in your browser ```/docs``` to check swagger definition.

Example: ``` http://localhost:3000/docs ```

## Running in docker
Please check [Running in docker with Make](d) if you run in only one step.

Pre-requisites:
  - [docker](https://docs.docker.com/get-docker/) installed.
  - build docker image previously (if you have not docker image, execute optional steps)
  - postgresql server (if you have not a postgresql server you need execute the follow optional steps)

Optional - Build Image
```bash
$ docker build --no-cache -t restaurants:v1 .
```


Optional - Postgresql:
```bash
$ docker network create net;
$ docker run --name postgresql \
		-e POSTGRES_USER=postgres \
		-e POSTGRES_PASSWORD=mysecretpassword \
		-p 5432:5432 \
		--network net \
		-d postgis/postgis
```

For the next command "network" argument and "restart" argument are optional.
```bash
$ docker run --name ms-restaurants \
		-e APP_NAME=ms-restaurants \
		-e APP_PORT=3000 \
		-e DB_USER=postgres \
		-e DB_PASS=mysecretpassword \
		-e DB_NAME=restaurants \
		-e DB_HOST=postgresql \
		-e DB_PORT=5432 \
		-p 3000:3000 \
		--network net \
		--restart=unless-stopped \
		-d restaurants:v1
```
## Running in docker with Make
Pre-requisites:
  - [docker](https://docs.docker.com/get-docker/) installed.
  - make installed (```sudo apt-get install make``` or ```sudo yum install make```)

Only you need type on your shell the follow command.
```bash
$ make run
```


## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

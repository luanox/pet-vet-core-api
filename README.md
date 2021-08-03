<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
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
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

# PetVet Core API

The technology used in this project is:

- Nest
- Typescript
- Postgres
- Docker

## Contributing

Take a look on [CONTRIBUTING](./CONTRIBUTING) section on how we write our commits and manage pull-requests/branch.

## Installation

We use Docker with docker-compose to build and run the project. To build up the app use:

```bash
cp .env.example .env
```

```bash
docker-compose up --build
```

## Database

We use a tool called PGWeb, you can access this tool on browser on `http://localhost:8081` after docker is up.

## Tests

We create unit tests using Jest, for any questions related for tests, please take a closer look on NestJS Unit Testing section.

https://docs.nestjs.com/fundamentals/testing

To run e2e tests:

```bash
docker-compose -f docker-compose.e2e.yml up --abort-on-container-exit --exit-code-from pet-vet-core-api
```

The flags `---abort-on-container-exit` and `--exit-code-from` are a powerfull combination, the first one shuts things down when our test run is complete, and the second flag will use the exit code from the specified service (in our case the one named `pet-vet-core-api`) as the exit code from the overall `docker-compose` command.

## How create things on this project

See all available options:

```bash
nest generate --help
```

### Module

```bash
nest generate module app/{{ module_name }}
```

### Controller

```bash
nest generate controller app/{{ module_name }}
```

### Service

```bash
nest generate service app/{{ module_name }}
```

### Classes

```bash
nest generate class {{ class_name }} app/{{ module_name }}
```

### Migrations

Always run migrations first

```bash
docker-compose exec pet-vet-core-api npm run typeorm -- migration:run
```

Check if the `ormconfig.ts` is configured correctly in the root folder

Then create the migration file

```bash
docker-compose exec pet-vet-core-api npm run typeorm -- migration:generate -n {{ migration_name }}
```

The command above will search for all entities not yet created in the database and put all sql commands in a migration file.

Which entities will be used in this process and where the migration file will be written is configured in the `ormconfig.ts` in the root folder.

To update the database with the new database changes

```bash
docker-compose exec pet-vet-core-api npm run typeorm -- migration:run
```

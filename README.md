# Pagô API

Esse projeto tem como intuito a criação de um CRUD de empresas e contatos para a empresa Pagô.

## Stack utilizada

**Back-end:** Node, Express, Typescript, Jest, ESLint, Prettier, Docker, Husky, TypeORM e Pino.

**Banco de Dados:** Postgres

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`API_PORT=3000`

`DB_NAME=postgres`

`DB_USERNAME=postgres`

`DB_PASSWORD=postgres`

`DB_HOST=localhost`

`DB_PORT=5433`

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/GabrielButarelo/pago-api.git
```

Entre no diretório do projeto

```bash
  cd pago-api
```

Inicie o banco de dados pelo docker compose

```bash
  docker-compose up
```

Instale as dependências

```bash
  npm install
```

Execute as migrations

```bash
  npm run migration:run
```

Inicie o servidor

```bash
  npm run start:dev
```

## Aprendizados

Durante o projeto pude aprender mais sobre o husky, e como ele funciona executando comandos antes do commit ou push ser realizado, além disso foi interessante realizar toda a configuração do eslint e prettier para que funcionassem corretamente em paralelo.

## Melhorias

- Adicionar injeção de dependencias para deixar o código mais desacoplado.

## Rodando os testes

Para rodar os testes, rode o seguinte comando

```bash
  npm run test
```

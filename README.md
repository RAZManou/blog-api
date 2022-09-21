# blog-api

Welcome to Blog API !

## Global installation

-   Install Yarn if needed

```shell script
npm install -g yarn
```

-   Install Docker if needed

```shell script
sudo snap install docker
docker -v
```

-   Install Docker Compose if needed

```shell script
sudo apt-get install python3-pip
sudo pip install docker-compose
docker-compose --version
```

## Env files

-   Duplicate .env.example file and rename it as .env
-   Duplicate prisma/.env.example file and rename it as .env

## Package installation

-   Install packages

```shell script
yarn
```

## Docker Compose : Postgresql

-   Pull and launch the Postgresql database via docker-compose

```shell script
sudo docker-compose up
```

## Server

-   Apply Database migrations and Launch Apollo-GraphQL local Server

```shell script
yarn start:server:local
```

## Enjoy !

And It's done !

-   🚀 Graphql server ready at http://localhost:4000/

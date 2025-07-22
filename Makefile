# Variables
COMPOSE = docker compose
BACKEND = backend
FRONTEND = frontend
MONGO = mongo

# Commands
.PHONY: up down restart logs backend frontend mongo builddb

## Start all containers
up:
	$(COMPOSE) up -d

## Stop and remove containers
down:
	$(COMPOSE) down

## Restart all containers
restart: down up

## Show logs
logs:
	$(COMPOSE) logs -f

## Open a shell in backend container
backend:
	$(COMPOSE) exec $(BACKEND) sh

## Open a shell in frontend container
frontend:
	$(COMPOSE) exec $(FRONTEND) sh

## Open a shell in mongo container
mongo:
	$(COMPOSE) exec $(MONGO) sh

## Run buildDatabase.js
builddb:
	$(COMPOSE) exec $(BACKEND) node buildDatabase.js

all: up builddb

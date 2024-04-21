.PHONY: build up down sh

build:
	docker compose build
up:
	docker compose up -d
down:
	docker compose down
sh:
	docker compose exec app sh

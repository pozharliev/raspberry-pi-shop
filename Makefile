SERVER_CONTAINER := raspberry-pi-shop-web-1

dev-install:
	cd client && npm install

dev:
	cd client && npm run dev

frontend-format:
	cd client && npm run format

frontend-lint:
	cd client && npm run lint

migrate:
	docker exec ${SERVER_CONTAINER} bash -c "poetry run python manage.py migrate"

cron:
	docker exec ${SERVER_CONTAINER} bash -c "poetry run python manage.py runcrons"

scrapers:
	docker exec ${SERVER_CONTAINER} bash -c "cd crawl && poetry run scrapy crawl erelement"

featured:
	docker exec ${SERVER_CONTAINER} bash -c "poetry run python server/scripts/choose_featured.py"
#!/bin/bash

echo 'Waiting for Postgres to load';

while !</dev/tcp/db/5432;
 do sleep 1;
done;

# Apply database migrations
echo "Applying database migrations"
poetry run python server/manage.py migrate

echo "Starting cron jobs"
poetry run python server/manage.py runcrons

# Start server
echo "Starting server"
poetry run python server/manage.py runserver 0.0.0.0:8000
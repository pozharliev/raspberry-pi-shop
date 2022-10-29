#!/bin/bash

echo 'Waiting for Postgres to load';

while !</dev/tcp/db/5432;
 do sleep 1;
done;

# Apply database migrations
echo "Applying database migrations"
poetry run python manage.py migrate

# Start server
echo "Starting server"
poetry run python manage.py runserver 0.0.0.0:8000
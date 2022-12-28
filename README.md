# Local development

## Development on Pycharm

### https://www.jetbrains.com/help/pycharm/using-docker-as-a-remote-interpreter.html

# Installation

## With docker

- Install docker locally
- Run the backend and db containers `docker-compose up -d`
- Install dependencies for frontend `make dev-install`
- Start the frontend server `make dev`

### If you need to run something, check Makefile first, most of the things are already there

### Backend is on `http://localhost:8000/`

### Frontend is on `http://localhost:4000/`

# Running commands in the container
### Most commands related to python should be run with the prefix `poetry run`
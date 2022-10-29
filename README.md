# Local development
## Development on Pycharm
### https://www.jetbrains.com/help/pycharm/using-docker-as-a-remote-interpreter.html

#Installation
## With docker
* Install docker locally
* Run the backend and db containers ```docker-compose up -d```
* Install dependencies for frontend ```make dev-install``` 
* Start the frontend server ```make dev```

### Backend is on ```http://localhost:8000/```
### Frontend is on ```http://localhost:4000/```
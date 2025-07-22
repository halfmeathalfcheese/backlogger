# BackLogger

BackLogger is a game tracking application that allows you to search through a library of games and track all your games across multiple platforms in a centralized platform.  
It uses the IGDB API to create and populate a database of games.

## Features

- Game Library — Browse and search through a library of games built from the IGDB API.
- Platform Tracking — Keep track of your games across multiple platforms.
- Centralized Platform — All your game data is stored in a single, centralized place for easy access.
- Dockerized — Backend, frontend, and MongoDB run in Docker containers for easy setup.

## Requirements

- [Node.js](https://nodejs.org/) (v18 or later)
- [MongoDB](https://www.mongodb.com/) (local or Docker container)
- [Docker & Docker Compose](https://docs.docker.com/get-docker/) (recommended for easy setup)

## Installation

### Simple Installation (Recommended)

1. Clone the repository:

    ```bash
    git clone git@github.com:halfmeathalfcheese/backlogger.git
    cd backlogger
    ```

2. Build and start all services with Docker Compose:

    ```bash
    docker compose up --build
    ```

 ### Alternative Installation Using Make

 If you have `make` installed, you can use the provided Makefile for streamlined setup:

 1. Clone the repository:

     ```bash
     git clone git@github.com:halfmeathalfcheese/backlogger.git
     cd backlogger
     ```

 2. Build and start all services:

     ```bash
     make up
     make builddb
     ```

 3. To stop all services:

     ```bash
     make down
     ```

 Refer to the Makefile for additional commands and options.

This starts:
- Backend on [http://localhost:3001](http://localhost:3001)
- Frontend on [http://localhost:3000](http://localhost:3000)
- MongoDB on [mongodb://mongo:27017/igdb](mongodb://mongo:27017/igdb)

### Manual Installation

1. Start MongoDB locally or in a container.

2. Install and run backend:

    ```bash
    cd backend
    npm install
    node server.js
    ```

3. Install and run frontend:

    ```bash
    cd ../frontend
    npm install
    npm start
    ```

## Usage

1. Open your browser and navigate to:

    ```
    http://localhost:3000
    ```

2. Start tracking your games!

## Contributing

Contributions are welcome!  
If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

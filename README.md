# BackLogger

BackLogger is a game tracking application that allows you to search through a library of games and track all your games across multiple platforms in a centralized platform. Uses IGDB api in order to create database of games.

## Features

- Game Library: Browse and search through a library of games made through IGDB api.
- Platform Tracking: Keep track of your games across multiple platforms.
- Centralized Platform: All your game data is stored in a centralized platform for easy access.

## Installation

1. Clone the repository:

### Frontend
1. Enter frontend directory `cd frontend`
2. Install the dependencies: `npm install`
3. Start Frontend `npm start`

### Backend
**Work in Progress - currently needs docker with MongoDB container**

**Requirements: Docker with MongoDB container**
1. Enter backend directory `cd backend`
2. Install the dependencies `npm install`
3. Build database `node buildDatabase.js` - this will take a while
4. Start server `node server.js`

## Usage

1. Start the application: `npm start`
2. Open your browser and navigate to `http://localhost:3000`

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

const mongoose = require('mongoose');
const igdb = require('./igdb');
const Game = require('./models/Game');

mongoose.connect('mongodb://localhost:27017/igdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let token = '';
const getToken = async () => {
    token = await igdb.getToken();
    console.log('token set as: ', token);
}
getToken();

async function scrapeIGDBAndSaveToDB() {
    try {
        // Fetch data from IGDB API
        const response = await igdb.createDatabase(token);
        // Loop through each game in the response
        console.log(response)
        for (let gameData of response) {
            // Create a new Game document with the game data
            gameData._id = gameData.id;
            delete gameData.id;
            const game = new Game(gameData);
            await game.save();
        }
        console.log(`Saved ${response.length} games to the database.`);
    } catch (error) {
        console.error(`Failed to scrape IGDB and save to DB: ${error}`);
    } finally {
        mongoose.connection.close();
    }
}

async function showGames() {
    try {
        const games = await Game.find().limit(10);
        console.log(games);
    } catch (error) {
        console.error(`Failed to show games: ${error}`);
    } finally {
        mongoose.connection.close();
    }
}

setTimeout(() => {
    scrapeIGDBAndSaveToDB();
} , 5000);
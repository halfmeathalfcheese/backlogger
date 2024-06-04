const mongoose = require('mongoose');
const igdb = require('./igdb');
const Game = require('./models/Game');
const Artwork = require('./models/Artwork');
const Cover = require('./models/Cover');

mongoose.connect('mongodb://localhost:27017/igdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let token = '';
const getToken = async () => {
    token = await igdb.getToken();
    console.log('token set as: ', token);
}

async function scrapeGamesAndSaveToDB() {
    try {
        const response = await igdb.getAllGames(token);
        for (let gameData of response) {
            gameData._id = gameData.id;
            delete gameData.id;
            const game = new Game(gameData);
            try {
                await game.save();
            } catch (error) {
                if (error.code === 11000) {
                    console.log(`Game ${game.name} already exists in the database.`);
                    continue;
                } else {
                    console.error(`Failed to save game to the database: ${error}`);
                }
            }
        }
        console.log(`Saved ${response.length} games to the database.`);
    } catch (error) {
        console.error(`Failed to scrape IGDB and save to DB: ${error}`);
    }
}

async function scrapeArtworksAndSaveToDB() {
    try {
        const response = await igdb.getAllArtworks(token);
        for (let artworkData of response) {
            artworkData._id = artworkData.id;
            delete artworkData.id;
            const artwork = new Artwork(artworkData);
            try {
                await artwork.save();
            } catch (error) {
                if (error.code === 11000) {
                    console.log(`Artwork ${artwork.image_id} already exists in the database.`);
                    continue;
                } else {
                    console.error(`Failed to save artwork to the database: ${error}`);
                }
            }
        }
        console.log(`Saved ${response.length} artworks to the database.`)
    } catch (error) {
        console.error(`Failed to scrape IGDB and save to DB: ${error}`);
    }
}

async function scrapeCoversAndSaveToDB() {
    try {
        const response = await igdb.getAllCovers(token);
        for (let coverData of response) {
            coverData._id = coverData.id;
            delete coverData.id;
            const cover = new Cover(coverData);
            try {
                await cover.save();
            } catch (error) {
                if (error.code === 11000) {
                    console.log(`Cover ${cover.image_id} already exists in the database.`);
                    continue;
                } else {
                    console.error(`Failed to save cover to the database: ${error}`);
                }
            }
        }
        console.log(`Saved ${response.length} covers to the database.`)
    } catch (error) {
        console.error(`Failed to scrape IGDB and save to DB: ${error}`);
    }
}

async function main() {
    await getToken();
    await scrapeGamesAndSaveToDB();
    await scrapeArtworksAndSaveToDB();
    await scrapeCoversAndSaveToDB();
    mongoose.connection.close();
}

main()
const mongoose = require('mongoose');
const igdb = require('./igdb');
const Game = require('./models/Game');
const Artwork = require('./models/Artwork');
const Cover = require('./models/Cover');


const mongoUrl = process.env.MONGO_URL || 'mongodb://mongo:27017/igdb';

mongoose.connect(mongoUrl)
    .then(async () => {
        console.log('✅ Connected to MongoDB');
        await main();  // your main function that populates the DB
        mongoose.connection.close();
    })
    .catch(err => {
        console.error('❌ MongoDB connection error:', err);
        process.exit(1);
    });

    let token = '';
const getToken = async () => {
    token = await igdb.getToken();
    console.log('token set as: ', token);
}

async function scrapeGamesAndSaveToDB() {
    try {
        const response = await igdb.getAllGames(token);
        const docs = response.map(gameData => {
            gameData._id = gameData.id;
            delete gameData.id;
            return gameData;
        })
        await Game.insertMany(docs, { ordered: false });
        console.log(`Saved ${docs.length} games to the database.`);
    } catch (error) {
        console.error(`Failed to scrape IGDB and save to DB: ${error}`);
    }
}

async function scrapeArtworksAndSaveToDB() {
    try {
        const response = await igdb.getAllArtworks(token);
        const docs = response.map(artworkData => {
            artworkData._id = artworkData.id;
            delete artworkData.id;
            return artworkData;
        })
        await Artwork.insertMany(docs, { ordered: false });
        console.log(`Saved ${docs.length} artworks to the database.`);
    } catch (error) {
        console.error(`Failed to scrape IGDB and save to DB: ${error}`);
    }
}

async function scrapeCoversAndSaveToDB() {
    try {
        const response = await igdb.getAllCovers(token);
        const docs = response.map(coverData => {
            coverData._id = coverData.id;
            delete coverData.id;
            return coverData;
        })
        await Cover.insertMany(docs, { ordered: false });
        console.log(`Saved ${docs.length} covers to the database.`);
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
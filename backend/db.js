const Game = require('./models/Game');
const Cover = require('./models/Cover');
const mongoose = require('mongoose');

const searchGame = async (searchTerm, offset = 0) => {
    if (!searchTerm || !searchTerm.trim()) {
        return [];
    }

    // Build a regex that matches if the searchTerm appears anywhere in the name (substring match)
    const regex = new RegExp(searchTerm.trim(), 'i');

    const query = {
        name: { $regex: regex, $not: /edition/i },
        category: { $nin: [11, 14, 13, 5, 3, 6, 7] },
    };

    const projection = {
        _id: 1,
        name: 1,
        category: 1,
        first_release_date: 1,
    };

    try {
        const games = await Game.find(query, projection)
            .skip(offset)
            .limit(12)
            .exec();
        return games;
    } catch (error) {
        console.error('Error in searchGame:', error);
        throw error;
    }
};

const findCover = async (gameId) => {
    const query = {
        game: gameId
    };

    const projection = {
        _id: 0,
        url: 1
    };

    try {
        const cover = await Cover.findOne(query, projection).exec();
        return cover;
    } catch (error) {
        throw error;
    }
}

const findGameById = async (gameId, preview=false) => {
    const query = {
        _id: gameId
    };

    try {
        if (preview) {
            const game = await Game
                .findOne(query)
                .select('name category first_release_date')
                .exec();
            return game;
        } else {
            const game = await Game
                .findOne(query)
                .exec();
            return game;
        }
    } catch (error) {
        throw error;
    }
}

module.exports = { searchGame, findCover, findGameById};
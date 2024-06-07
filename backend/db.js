const mongoose = require('mongoose');
const Game = require('./models/Game');
const Cover = require('./models/Cover');

const searchGame = async (searchTerm, offset=0) => {
    const query = { 
        $text: { $search: searchTerm },
        category: { $nin: [ 11, 14, 13, 5, 3, 6, 7 ] },
        name: { $not: /edition/i }
    };

    const projection = { 
        _id: 1,
        name: 1,
        category: 1,
        first_release_date: 1,
        score: { $meta: "textScore" }
    };

    try {
        const games = await Game.find(query, projection)
            .sort({ score: { $meta: 'textScore' } })
            .skip(offset)
            .limit(12)
            .exec();
        return games;
    } catch (error) {
        throw error;
    }
}

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

module.exports = { searchGame, findCover };
const mongoose = require('mongoose');
const Game = require('./models/Game');

const searchGame = async (searchTerm) => {
    const query = { 
        $text: { $search: searchTerm },
        category: { $nin: [ 11, 14, 13, 5, 3, 6, 7 ] } 
    };

    const projection = { 
        _id: 1,
        name: 1,
        category: 1,
        score: { $meta: "textScore" }
    };

    try {
        const games = await Game.find(query, projection)
            .sort({ score: { $meta: 'textScore' } })
            .limit(10)
            .exec();
        return games;
    } catch (error) {
        throw error;
    }
}

module.exports = { searchGame };
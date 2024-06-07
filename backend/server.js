const igdb = require('./igdb');
const db = require('./db');
const Game = require('./models/Game');

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/igdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error(`MongoDB connection error: ${err}`));


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

let token = '';
const getToken = async () => {
    token = await igdb.getToken();
    console.log('token set as: ', token);
}
getToken();

// Search IGDB for search query
app.get('/api/search/:query', async (req, res) => {
    try {
        const query = req.params.query;
        const response = await db.searchGame(query);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/api/cover/:gameId', async (req, res) => {
    try {
        const gameId = req.params.gameId;
        const response = await db.findCover(gameId);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
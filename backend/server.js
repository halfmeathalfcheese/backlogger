const igdb = require('./igdb');
const db = require('./db');
const user = require('./user');

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());


const mongoUrl = process.env.MONGO_URL || 'mongodb://mongo:27017/igdb';
mongoose.connect(mongoUrl)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
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
        console.log('Search query:', query);
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

app.post('/api/register', async (req, res) => {
    try {
        console.log('running register')
        const { username, email, password } = req.body;
        const response = await user.createUser(username, email, password);
        res.json(response);
    } catch (error) {
        console.log('error in register: ', error.message);
        res.json(error);
    }
});

app.get('/api/game/:gameId', async (req, res) => {
    try {
        const gameId = req.params.gameId;
        const response = await db.findGameById(gameId);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
const igdb = require('./igdb');

const express = require('express');
// const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

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
app.get('/api/search', async (req, res) => {
    try {
        const query = req.query.query;
        const response = await igdb.search(token, query);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
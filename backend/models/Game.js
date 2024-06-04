const mongoose = require('mongoose');
const { Schema } = mongoose;

const gameSchema = new Schema({
    _id: { type: Number, required: true },
    name: { type: String, required: true },
    alternative_names: { type: Array, required: false },
    artworks: { type: Array, required: false },
    category: { type: Number, required: false },
    cover: { type: Number, required: false },
    dlc: { type: Array, required: false },
    expanded_games: { type: Array, required: false },
    first_release_date: { type: Date, required: false, set: v => new Date(v * 1000) },
    franchise: { type: Number, required: false },
    genres: { type: Array, required: false },
    involved_companies: { type: Array, required: false },
    parent_game: { type: Number, required: false },
    platforms: { type: Array, required: false },
    rating: { type: Number, required: false },
    rating_count: { type: Number, required: false },
    similar_games: { type: Array, required: false },
    slug: { type: String, required: false },
    standalone_expansions: { type: Array, required: false },
    status: { type: Number, required: false },
    storyline: { type: String, required: false },
    summary: { type: String, required: false },
    tags: { type: Array, required: false },
    total_rating: { type: Number, required: false },
    total_rating_count: { type: Number, required: false },
    updated_at: { type: Date, required: false, set: v => new Date(v * 1000) },
    url: { type: String, required: false },
    websites: { type: Array, required: false }
});

gameSchema.index({ name: 'text' });

module.exports = mongoose.model('Game', gameSchema);
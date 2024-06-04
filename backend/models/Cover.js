const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coverSchema = new Schema({
    _id: { type: Number, required: true },
    game: { type: Number, required: false },
    game_localization: { type: Number, required: false },
    image_id: { type: String, required: false },
    url: { type: String, required: false }
});

coverSchema.index({ game: 1 });

module.exports = mongoose.model('Cover', coverSchema);
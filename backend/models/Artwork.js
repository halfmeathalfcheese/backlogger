const mongoose = require('mongoose');
const { Schema } = mongoose;

const artworkSchema = new Schema({
    _id: { type: Number, required: true },
    animated: { type: Boolean, required: false },
    game: { type: Number, required: false },
    image_id: { type: String, required: false },
    url: { type: String, required: false },
});

artworkSchema.index({ game: 1 });

module.exports = mongoose.model('Artwork', artworkSchema);
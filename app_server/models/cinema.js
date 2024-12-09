const mongoose = require('mongoose');

const CinemaSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: Object, required: true },
    movies: { type: [String], required: true }
});

module.exports = mongoose.model('Cinema', CinemaSchema);


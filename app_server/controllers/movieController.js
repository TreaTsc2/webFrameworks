const Movie = require('../models/movie');

// GET all movies
const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.status(200).json(movies);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// POST a new movie
const addMovie = async (req, res) => {
    try {
        const { movieName } = req.body;
        const newMovie = new Movie({ movieName });
        await newMovie.save();
        res.status(201).json(newMovie);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = { getAllMovies, addMovie };

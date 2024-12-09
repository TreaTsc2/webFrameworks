const express = require('express');
const router = express.Router();
const { getAllMovies, addMovie } = require('../controllers/movieController');

// GET all movies
router.get('/', getAllMovies);

// POST a new movie
router.post('/', addMovie);

module.exports = router;

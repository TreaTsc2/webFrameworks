const express = require('express');
const router = express.Router();
const cinemaController = require('../controllers/cinemaController');

// Import route files
const movieRoutes = require('./movies');
const cinemaRoutes = require('./cinema');

// Home route - Get all cinemas
router.get('/', cinemaController.getAllCinemas);

// Login page
router.get('/login', (req, res) => {
    res.render('login'); 
});

// Registration page
router.get('/register', (req, res) => {
    res.render('register');
});

// Mount movie and cinema routes
router.use('/movies', movieRoutes);
router.use('/cinemas', cinemaRoutes);

module.exports = router;

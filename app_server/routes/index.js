const express = require('express');
const router = express.Router();
const cinemaController = require('../controllers/cinemaController');
const movieController = require('../controllers/movieController');



router.get('/', cinemaController.cinemaList);
/* Locations pages */

const movieRoutes = require('./movie');
const cinemaRoutes = require('./cinema');

/* Logins pages */
router.get('/login', (req, res) => {
    res.render('login'); 
});

/* Registration pages */
router.get('/register', (req, res) => {
    res.render('register');
});

router.use('/movies', movieRoutes);

router.get('/cinemas', cinemaController.cinemaList);
router.get('/movies', movieController.movieList);


module.exports = router;

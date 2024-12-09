const express = require('express');
const router = express.Router();
const cinemaController = require('../controllers/cinemaController');


console.log('CinemaController functions:', cinemaController);


router.get('/test', (req, res) => {
    res.status(200).send('Cinema test route works');
});

router.get('/', cinemaController.getAllCinemas);


router.post('/', cinemaController.addCinema);

module.exports = router;

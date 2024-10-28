
const express = require('express');
const router = express.Router();
const cinemaController = require('../controllers/cinemaController');

router.get('/', cinemaController.cinemaList);

module.exports = router;

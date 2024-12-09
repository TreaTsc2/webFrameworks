const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');

console.log({ registerUser, loginUser }); // Debug logging

// POST register a new user
router.post('/register', registerUser);

// POST login a user
router.post('/login', loginUser);

module.exports = router;

const User = require('../models/user');
const bcrypt = require('bcrypt');

// Register a new user
const registerUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully!' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Login a user
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (user && (await bcrypt.compare(password, user.password))) {
            res.status(200).json({ message: 'Login successful!' });
        } else {
            res.status(400).json({ message: 'Invalid credentials' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { registerUser, loginUser };

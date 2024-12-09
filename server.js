const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// MongoDB Atlas connection URI
const dbURI = "mongodb+srv://treatsc2:Password12345@cluster0.mc4ew.mongodb.net/cinemaDB?retryWrites=true&w=majority"; // Updated to specify the cinemaDB database

// Connect to MongoDB Atlas
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB Atlas connected successfully'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Middleware
app.use(bodyParser.json());

// Cinema Schema and Model
const Cinema = mongoose.model('Cinema', new mongoose.Schema({
    name: { type: String, required: true },
    location: { city: String, street: String },
    movies: [String],
}));

// Routes
// Test route
app.get('/api/cinemas/test', (req, res) => {
    res.status(200).send('Cinema test route works');
});

// Get all cinemas
app.get('/api/cinemas', async (req, res) => {
    try {
        const cinemas = await Cinema.find();
        res.status(200).json(cinemas);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add a new cinema
app.post('/api/cinemas', async (req, res) => {
    try {
        const { name, location, movies } = req.body;
        const newCinema = new Cinema({ name, location, movies });
        await newCinema.save();
        res.status(201).json(newCinema);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

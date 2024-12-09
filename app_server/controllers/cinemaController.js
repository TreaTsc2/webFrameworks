const Cinema = require('../models/cinema');

// GET all cinemas
const getAllCinemas = async (req, res) => {
    try {
        const cinemas = await Cinema.find();
        res.status(200).json(cinemas); // Return the list of cinemas
    } catch (err) {
        res.status(500).json({ error: err.message }); // Return error if MongoDB query fails
    }
};

// POST a new cinema
const addCinema = async (req, res) => {
    try {
        const { name, location, movies } = req.body;
        const newCinema = new Cinema({ name, location, movies });
        await newCinema.save();
        res.status(201).json(newCinema); // Return the newly created cinema
    } catch (err) {
        res.status(400).json({ error: err.message }); // Return error if saving fails
    }
};

// Export the functions
module.exports = { getAllCinemas, addCinema };

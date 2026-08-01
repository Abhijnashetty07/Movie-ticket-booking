const Movie = require("../models/Movie");

// GET Movies
const getMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// POST Movie
const addMovie = async (req, res) => {
    try {
        const movie = new Movie(req.body);

        await movie.save();

        res.status(201).json({
            message: "Movie Added Successfully",
            movie
        });

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

module.exports = {
    getMovies,
    addMovie
};
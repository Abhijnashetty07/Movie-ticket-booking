const Booking = require("../models/Bookings");
const Show = require("../models/Show");
const Movie = require("../models/Movie");

const recommendMovies = async (req, res) => {
    try {

        const { userId } = req.params;

        // Get all bookings of the user
        const bookings = await Booking.find({
            userId,
            status: "Booked"
        });

        if (bookings.length === 0) {
            return res.json({
                message: "No bookings found",
                recommendations: []
            });
        }

        // Get show IDs
        const showIds = bookings.map(b => b.showId);

        // Get shows
        const shows = await Show.find({
            _id: { $in: showIds }
        });

        // Get movie IDs
        const movieIds = shows.map(s => s.movieId);

        // Get movies
        const movies = await Movie.find({
            _id: { $in: movieIds }
        });

        res.json({
            recommendations: movies
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }
};

module.exports = {
    recommendMovies
};
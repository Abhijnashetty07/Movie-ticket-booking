const Show = require("../models/Show");

// GET all shows
const getShows = async (req, res) => {
    try {
        const shows = await Show.find().populate("movieId");
        res.json(shows);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
const getAvailableSeats = async (req, res) => {
    try {

        const show = await Show.findById(req.params.showId);

        if (!show) {
            return res.status(404).json({
                message: "Show not found"
            });
        }

        res.json({
            availableSeats: show.availableSeats
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }
};
// ADD a new show
const addShow = async (req, res) => {
    try {
        const show = new Show(req.body);

        await show.save();

        res.status(201).json({
            message: "Show Added Successfully",
            show
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

module.exports = {
    addShow,
    getShows,
    getAvailableSeats
};
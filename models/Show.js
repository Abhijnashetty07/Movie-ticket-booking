const mongoose = require("mongoose");

const showSchema = new mongoose.Schema({
    movieId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie",
        required: true
    },
    theatre: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    availableSeats: [
        {
            type: String
        }
    ]
});

module.exports = mongoose.model("Show", showSchema);
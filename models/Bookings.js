const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    showId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Show",
        required: true
    },
    seatIds: {
        type: [String],
        required: true
    },
    status: {
        type: String,
        default: "Booked"
    },
    bookedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Booking", bookingSchema);
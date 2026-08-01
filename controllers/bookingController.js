const Booking = require("../models/Bookings");
const Show = require("../models/Show");

const bookTickets = async (req, res) => {
    try {

        const { userId, showId, seatIds } = req.body;

        // Check if all required fields are present
        if (!userId || !showId || !seatIds || seatIds.length === 0) {
            return res.status(400).json({
                message: "Please provide userId, showId and seatIds"
            });
        }

        // Find the show
        const show = await Show.findById(showId);

        if (!show) {
            return res.status(404).json({
                message: "Show not found"
            });
        }

        // Check seat availability
        for (const seat of seatIds) {
            if (!show.availableSeats.includes(seat)) {
                return res.status(400).json({
                    message: `Seat ${seat} is not available`
                });
            }
        }

        // Create booking
        const booking = new Booking({
            userId,
            showId,
            seatIds,
            status: "Booked"
        });

        await booking.save();
        console.log("Before io");

const io = req.app.get("io");

console.log("IO Object:", io);

if (io) {
    io.emit("bookingConfirmed", {
        bookingId: booking._id,
        userId,
        showId,
        seatIds
    });

    console.log("Booking Confirmation Event Sent");
} else {
    console.log("IO NOT FOUND");
}
        // Remove booked seats
        show.availableSeats = show.availableSeats.filter(
            seat => !seatIds.includes(seat)
        );

        await show.save();

        res.status(201).json({
            message: "Ticket Booked Successfully",
            booking
        });

    } catch (err) {
        console.log(err);

        res.status(500).json({
            message: err.message
        });
    }
};
const getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};
const cancelBooking = async (req, res) => {
    try {

        console.log("Request Body:", req.body);

        const { bookingId } = req.body;

        const booking = await Booking.findById(bookingId);

        console.log("Booking Found:", booking);

        if (!booking) {
            return res.status(404).json({
                message: "Booking not found"
            });
        }

        booking.status = "Cancelled";
        await booking.save();

        const show = await Show.findById(booking.showId);

        show.availableSeats.push(...booking.seatIds);
        await show.save();

        res.json({
            message: "Booking Cancelled Successfully",
            booking
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: err.message
        });
    }
};
module.exports = {
    bookTickets,
    cancelBooking,
    getBookings
};
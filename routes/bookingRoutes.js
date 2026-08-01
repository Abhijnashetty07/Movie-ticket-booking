const express = require("express");
const router = express.Router();

const { bookTickets,cancelBooking,getBookings} = require("../controllers/bookingController");

router.post("/", bookTickets);

router.post("/cancel", cancelBooking);

router.get("/", getBookings);

module.exports = router;
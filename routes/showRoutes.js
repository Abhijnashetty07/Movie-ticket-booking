const express = require("express");
const router = express.Router();

const { addShow, getShows ,getAvailableSeats} = require("../controllers/showController");

// GET all shows
router.get("/", getShows);

// ADD a new show
router.post("/", addShow);

router.get("/:showId/seats", getAvailableSeats);

module.exports = router;
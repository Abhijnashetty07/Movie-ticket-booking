const express = require("express");
const router = express.Router();

const { lockSeats } = require("../controllers/lockController");

router.post("/", lockSeats);

module.exports = router;
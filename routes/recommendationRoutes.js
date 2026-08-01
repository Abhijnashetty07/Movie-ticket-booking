const express = require("express");
const router = express.Router();

const {
    recommendMovies
} = require("../controllers/recommendationController");

router.get("/:userId", recommendMovies);

module.exports = router;
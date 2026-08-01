const redisClient = require("../config/redis");

const lockSeats = (req, res) => {

    const { showId, seatIds } = req.body;

    let checked = 0;

    for (const seat of seatIds) {

        const key = `lock:${showId}:${seat}`;

        redisClient.get(key, (err, reply) => {

            if (err) {
                return res.status(500).json({ message: err.message });
            }

            if (reply) {
                return res.status(400).json({
                    message: `Seat ${seat} is already locked`
                });
            }

            checked++;

            if (checked === seatIds.length) {

                seatIds.forEach((seat) => {

                    const key = `lock:${showId}:${seat}`;

                    redisClient.setex(key, 300, "locked");
                });

                return res.json({
                    message: "Seats Locked Successfully"
                });
            }
        });
    }
};

module.exports = {
    lockSeats
};
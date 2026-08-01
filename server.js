const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

require("./config/redis");

const movieRoutes = require("./routes/movieRoutes");
const showRoutes = require("./routes/showRoutes");
const lockRoutes = require("./routes/lockRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const recommendationRoutes = require("./routes/recommendationRoutes");

dotenv.config();

connectDB();

const app = express();
const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io");

const io = new Server(server, {
    cors: {
        origin: "*"
    }
});
io.on("connection", (socket) => {
    console.log("Client Connected:", socket.id);

    socket.on("disconnect", () => {
        console.log("Client Disconnected");
    });
});
app.set("io", io);
app.use(express.json());

// Register routes
app.use("/movies", movieRoutes);
app.use("/shows", showRoutes);
app.use("/lock", lockRoutes);
app.use("/book", bookingRoutes);
app.use("/recommend", recommendationRoutes);

app.get("/", (req, res) => {
    res.send("Movie Ticket Booking API");
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
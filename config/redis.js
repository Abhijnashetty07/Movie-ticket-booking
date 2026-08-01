const redis = require("redis");

const client = redis.createClient(6379, "127.0.0.1");

client.on("connect", () => {
    console.log("Redis Connected");
});

client.on("error", (err) => {
    console.log("Redis Error:", err);
});

module.exports = client;
# API Documentation

## Base URL

```
http://localhost:3000
```

---

# 1. Movie APIs

## Get All Movies

**Endpoint**

```http
GET /movies
```

**Description**

Returns all available movies.

---

## Add Movie

**Endpoint**

```http
POST /movies
```

**Description**

Adds a new movie to the database.

**Sample Request**

```json
{
  "title": "Avengers",
  "genre": "Action",
  "duration": 180
}
```

---

# 2. Show APIs

## Get All Shows

```http
GET /shows
```

Returns all movie shows.

---

## Add Show

```http
POST /shows
```

Creates a new movie show.

**Sample Request**

```json
{
  "movieId": "movie_id",
  "showTime": "2026-08-02T18:30:00",
  "availableSeats": 120
}
```

---

## Get Available Seats

```http
GET /shows/:showId/seats
```

Returns available seats for a particular show.

---

# 3. Booking APIs

## Book Tickets

```http
POST /booking
```

Books movie tickets.

**Sample Request**

```json
{
  "userId": "user_id",
  "showId": "show_id",
  "seats": 2
}
```

---

## Cancel Booking

```http
POST /booking/cancel
```

Cancels an existing booking.

---

## Get All Bookings

```http
GET /booking
```

Returns all bookings.

---

# 4. Seat Lock API

## Lock Seats

```http
POST /lock
```

Temporarily locks selected seats to prevent double booking.

**Sample Request**

```json
{
  "showId": "show_id",
  "seatNumbers": [10,11]
}
```

---

# 5. Recommendation API

## Recommend Movies

```http
GET /recommendation/:userId
```

Returns personalized movie recommendations for a user.

---

# Status Codes

| Status Code | Description |
|-------------|-------------|
| 200 | Request Successful |
| 201 | Resource Created |
| 400 | Bad Request |
| 404 | Resource Not Found |
| 500 | Internal Server Error |

---

# Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- REST API

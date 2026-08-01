# 🎬 Movie Ticket Booking Backend

A backend REST API for a Movie Ticket Booking System built using **Node.js**, **Express.js**, and **MongoDB**. This application allows users to browse movies, book tickets, and manage bookings.

---

## 🚀 Features

- User Registration & Login
- JWT Authentication
- Browse Movies
- View Show Timings
- Book Movie Tickets
- Cancel Bookings
- View Booking History
- RESTful API Architecture
- Error Handling
- Input Validation

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcrypt
- dotenv

---

## 📂 Project Structure

```
movie-ticket-booking/
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
├── utils/
├── app.js
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/Abhijnashetty07/Movie-ticket-booking.git
```

### Navigate to the project

```bash
cd Movie-ticket-booking
```

### Install dependencies

```bash
npm install
```

### Start the server

```bash
npm start
```

or

```bash
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file in the project root.

Example:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 📌 API Endpoints

### Authentication

- POST /register
- POST /login

### Movies

- GET /movies
- GET /movies/:id

### Bookings

- POST /book
- GET /bookings
- DELETE /booking/:id

---

## 📦 Future Enhancements

- Seat Selection
- Payment Gateway Integration
- Email Notifications
- Admin Dashboard
- Movie Reviews
- QR Code Ticket Generation

---

## 👨‍💻 Author

**Abhijna Shetty**

GitHub: https://github.com/Abhijnashetty07

---

## 📜 License

This project is created for educational purposes.

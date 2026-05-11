const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
connectDB(); // ← Connect MongoDB here

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/bookings', require('./routes/BookingRoutes'));

app.listen(process.env.PORT || 5000, () => {
    console.log('Server running on port 5000');
});
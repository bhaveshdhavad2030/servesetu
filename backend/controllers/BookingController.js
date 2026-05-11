const Booking = require('../models/Booking');

// Get all bookings
exports.getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create a booking
exports.createBooking = async (req, res) => {
    try {
        const booking = await Booking.create(req.body);
        res.status(201).json(booking);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
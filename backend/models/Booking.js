const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    service: { type: String, required: true },
    date: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
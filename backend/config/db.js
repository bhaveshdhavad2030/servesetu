const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000,
            family: 4  // ← forces IPv4, fixes many Windows DNS issues
        });
        console.log('✅ MongoDB Connected');
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
};

module.exports = connectDB;
const mongoose = require("mongoose");

// Define the User schema
// This schema defines the structure of the User documents in the MongoDB collection
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    scores: [
        {
            score: Number,
            date: { type: Date, default: Date.now },
        },
    ],
});

// Middleware to hash password before saving

module.exports = mongoose.model("User", userSchema);
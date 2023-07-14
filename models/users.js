const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'user'], // Define the allowed roles
        default: 'user', // Set a default role if not provided
    }
}, { timestamps: true })

module.exports = mongoose.model("users", userSchema)
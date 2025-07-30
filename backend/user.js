const mongoose = require('mongoose');
const User = require('./models/User');
const jwt = require('jsonwebtoken');

const createUser = async (username, email, password) => {
    try {
        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            throw new Error('Email already exists');
        }

        const existingUsername = await User.findOne({ username });
        if (existingUsername) {
            throw new Error('Username already exists');
        }

        const user = new User({ username, email, password });
        await user.save();
        console.log('User created successfully with: ', user._id);
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        console.log('Generated JWT token:', token);
        return { user, token };
    } catch (error) {
        console.error(`Failed to create user: ${error.message}`);
        throw new Error(`Failed to create user: ${error}`);
    }
}

module.exports = { createUser };
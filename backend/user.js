const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect('mongodb://localhost:27017/igdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

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
        // TODO: Create token for user and return it
        return user;
    } catch (error) {
        console.error(`Failed to create user: ${error.message}`);
        throw new Error(`Failed to create user: ${error}`);
    }
}

module.exports = { createUser };
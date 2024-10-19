const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Register new user or login existing user
router.post('/register', async (req, res) => {
    const { name, email, level, learningGoal, timeCommitment, preferredStyle } = req.body;

    try {
        const user = new User({ name, email, level, learningGoal, timeCommitment, preferredStyle });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: "Error registering user" });
    }
});

module.exports = router;

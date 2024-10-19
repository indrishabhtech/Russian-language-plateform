const express = require('express');
const router = express.Router();
const Lesson = require('../models/Lesson');

// Fetch lessons based on user level and preferred style
router.get('/fetch-lessons', async (req, res) => {
    const { level, preferredStyle } = req.query;

    try {
        const lessons = await Lesson.find({ level, type: preferredStyle });
        res.status(200).json(lessons);
    } catch (error) {
        res.status(500).json({ error: "Error fetching lessons" });
    }
});

module.exports = router;
    
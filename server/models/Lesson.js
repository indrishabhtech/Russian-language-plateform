const mongoose = require('mongoose');

const LessonSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true }, // Could be text or link to audio file
    type: { type: String, required: true }, // Reading/Listening/Interactive
    level: { type: String, required: true }, // Beginner/Intermediate/Advanced
    chapter: { type: Number, required: true } // To categorize lessons into chapters
});

module.exports = mongoose.model('Lesson', LessonSchema);

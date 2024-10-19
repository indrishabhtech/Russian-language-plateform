const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    level: { type: String, default: 'Beginner' }, // Beginner/Intermediate/Advanced
    learningGoal: { type: String, required: true },
    timeCommitment: { type: String, required: true },
    preferredStyle: { type: String, required: true },
    progress: { type: Array, default: [] }  // Store completed modules
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);

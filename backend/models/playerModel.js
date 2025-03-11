const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    hunt: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hunt',
        required: true
    },
    progress: {
        puzzleIndex: {
            type: Number,
            required: true
        },
        completedPuzzles: {
            type: Number,
            default: 0
        }
    },
    score: {
        type: Number,
        default: 10
    },
    status: {
        type: String,
        enum: ['playing', 'completed', 'mark for later'],
        default: 'playing'
    },
    guesses: [
        {
            guessedLocation: {
                coordinates: { type: [Number], required: false } 
            },
            imageUrl: {
                type: String,
                default: ""
            } 
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model('Player', playerSchema);

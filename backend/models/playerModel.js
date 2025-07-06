import mongoose from 'mongoose';

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
        completedPuzzles: {
            type: Number,
            default: 0
        },
        score: {
            type: Number,
            default: 0
        }
    },
    guesses: [
        {
            puzzleIndex: { 
                type: Number, 
                required: true 
            }, 
            imageUrl: {
                type: String,
                default: ""
            }, 
            hintUsed: {
                type: Number,
                default: 0
            },
            status: {
                type: String,
                enum: ['NotAnswered','Correct', 'Wrong', 'Pending'],
                default: 'NotAnswered'
            }
        }
    ]
}, { timestamps: true });

const Player = mongoose.model('Player', playerSchema);

export default Player;

// const mongoose = require('mongoose');

// const playerSchema = new mongoose.Schema({
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//         required: true
//     },
//     hunt: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Hunt',
//         required: true
//     },
//     progress: {
//         completedPuzzles: {
//             type: Number,
//             default: 0
//         },
//         score: {
//             type: Number,
//             default: 0
//         }
//     },
//     guesses: [
//         {
//             puzzleIndex: { 
//                 type: Number, 
//                 required: true 
//             }, 
//             guessedLocation: {
//                 coordinates: { type: [Number], required: false } 
//             },
//             imageUrl: {
//                 type: String,
//                 default: ""
//             }, 
//             hintUsed: {
//                 type: Number,
//                 default: 0
//             }
//         }
//     ]
// }, { timestamps: true });

// module.exports = mongoose.model('Player', playerSchema);



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
            guessedLocation: {
                coordinates: { type: [Number], required: false } 
            },
            imageUrl: {
                type: String,
                default: ""
            }, 
            hintUsed: {
                type: Number,
                default: 0
            }
        }
    ]
}, { timestamps: true });

const Player = mongoose.model('Player', playerSchema);

export default Player;

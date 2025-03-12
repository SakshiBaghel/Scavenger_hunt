
const Player = require('../models/playerModel');
const Hunt = require('../models/huntModel');
const mongoose = require('mongoose');

// Create a new player and add them to the hunt's players array
const createPlayer = async (req, res) => {
    try {
        let { user, hunt } = req.body;

    /************************************************************************************** */
        // If no user ID is provided, use a dummy user ID
        if (!user) {
            user = new mongoose.Types.ObjectId(); // Generates a dummy user ID
        }
    /************************************************************************************** */

        // Validate request
        if (!hunt) {
            return res.status(400).json({ message: "Hunt ID is required" });
        }

        // Create a new player entry
        const newPlayer = new Player({
            user,
            hunt,
            progress: {
                completedPuzzles: 0,
                score: 0
            },
            status: 'playing',
            guesses: []
        });

        // Save the player entry
        await newPlayer.save();

        // Update the Hunt model to include the new player
        await Hunt.findByIdAndUpdate(
            hunt,
            { $push: { players: newPlayer._id } },
            { new: true, useFindAndModify: false }
        );

        res.status(201).json({
            message: "Player joined successfully",
            player: newPlayer
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

module.exports = { createPlayer };

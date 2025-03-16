
const Player = require('../models/playerModel');
const Hunt = require('../models/huntModel');
const mongoose = require('mongoose');

// Create a new player and add them to the hunt's players array
const createPlayer = async (req, res) => {
    try {
        let { user, hunt } = req.body;

        // Validate Hunt ID
        if (!hunt || !mongoose.Types.ObjectId.isValid(hunt)) {
            return res.status(400).json({ message: "Invalid or missing Hunt ID" });
        }

        // Validate User ID or Generate One
        if (!user) {
            user = new mongoose.Types.ObjectId(); // Generate a new user ID if not provided
        } else if (!mongoose.Types.ObjectId.isValid(user)) {
            return res.status(400).json({ message: "Invalid User ID format" });
        }

        // Convert to ObjectId
        user = new mongoose.Types.ObjectId(user);
        hunt = new mongoose.Types.ObjectId(hunt);

        // Check if the player already exists in the hunt
        const existingPlayer = await Player.findOne({ user, hunt });
        if (existingPlayer) {
            return res.status(409).json({ message: "Player already joined this hunt", player: existingPlayer });
        }

        // Create a new Player
        const newPlayer = new Player({
            user,
            hunt,
            progress: { completedPuzzles: 0, score: 0 },
            status: 'playing',
            guesses: []
        });

        await newPlayer.save();

        // Add player to Hunt only if Hunt exists
        const updatedHunt = await Hunt.findByIdAndUpdate(
            hunt,
            { $push: { players: newPlayer._id } },
            { new: true }
        );

        if (!updatedHunt) {
            return res.status(404).json({ message: "Hunt not found" });
        }

        res.status(201).json({ message: "Player joined successfully", player: newPlayer });
    } catch (error) {
        console.error("Error creating player:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Submit a guess for a particular puzzle
const submitGuess = async (req, res) => {
    try {
        let { userId, huntId, puzzleIndex, imageUrl, hintUsed } = req.body;

        console.log("Received Data:", req.body); // Debugging log

        if (!userId || !huntId || puzzleIndex === undefined || typeof imageUrl !== "string") {
            return res.status(400).json({ message: "Missing or invalid required fields" });
        }

        if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(huntId)) {
            return res.status(400).json({ message: "Invalid User ID or Hunt ID" });
        }

        userId = new mongoose.Types.ObjectId(userId);
        huntId = new mongoose.Types.ObjectId(huntId);

        let player = await Player.findOne({ user: userId, hunt: huntId });

        if (!player) {
            return res.status(404).json({ message: "Player not found in this hunt" });
        }

        player.guesses.push({ puzzleIndex, imageUrl, hintUsed });

        await player.save();

        res.status(200).json({ message: "Guess submitted successfully", player });
    } catch (error) {
        console.error("Error submitting guess:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

const updateAction = async (req, res) => {
    const { userId, huntId, status } = req.body;

    try {
        // Find the player using userId and huntId
        const player = await Player.findOne({ user: userId, hunt: huntId });

        if (!player) {
            return res.status(404).json({ error: "Player not found" });
        }

        // Find the latest guess (last puzzle attempted)
        const lastGuess = player.guesses[player.guesses.length - 1];

        if (!lastGuess) {
            return res.status(400).json({ error: "No guesses found" });
        }

        if (status === "correct") {
            // Calculate score (10 - 2 * hintsUsed)
            const earnedScore = Math.max(10 - (2 * lastGuess.hintUsed), 0);

            // Update progress
            player.progress.completedPuzzles += 1;
            player.progress.score += earnedScore;

            // Save the updated player data
            await player.save();

            return res.json({
                message: "Answer marked correct, progress updated",
                completedPuzzles: player.progress.completedPuzzles,
                totalScore: player.progress.score
            });
        } else {
            // If wrong, do nothing
            return res.json({ message: "Answer marked wrong, no changes made" });
        }
    } catch (error) {
        console.error("Error updating player progress:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = { createPlayer, submitGuess, updateAction};

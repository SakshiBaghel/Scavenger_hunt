// const Player = require("../models/playerModel");
// const Hunt = require("../models/huntModel");
// const mongoose = require("mongoose");
// const cloudinary = require("cloudinary").v2; 

// // Create a new player and add them to the hunt's players array
// const createPlayer = async (req, res) => {
//     try {
//         let { user, hunt } = req.body;

//         if (!hunt || !mongoose.Types.ObjectId.isValid(hunt)) {
//             return res.status(400).json({ message: "Invalid or missing Hunt ID" });
//         }

//         if (!user) {
//             user = new mongoose.Types.ObjectId();
//         } else if (!mongoose.Types.ObjectId.isValid(user)) {
//             return res.status(400).json({ message: "Invalid User ID format" });
//         }

//         user = new mongoose.Types.ObjectId(user);
//         hunt = new mongoose.Types.ObjectId(hunt);

//         const existingPlayer = await Player.findOne({ user, hunt });
//         if (existingPlayer) {
//             return res.status(409).json({ message: "Player already joined this hunt", player: existingPlayer });
//         }

//         const newPlayer = new Player({
//             user,
//             hunt,
//             progress: { completedPuzzles: 0, score: 0 },
//             status: "playing",
//             guesses: [],
//         });

//         await newPlayer.save();

//         const updatedHunt = await Hunt.findByIdAndUpdate(
//             hunt,
//             { $push: { players: newPlayer._id } },
//             { new: true }
//         );

//         if (!updatedHunt) {
//             return res.status(404).json({ message: "Hunt not found" });
//         }

//         res.status(201).json({ message: "Player joined successfully", player: newPlayer });
//     } catch (error) {
//         console.error("Error creating player:", error);
//         res.status(500).json({ message: "Server error", error: error.message });
//     }
// };

// // Submit a guess for a particular puzzle
// const submitGuess = async (req, res) => {
//     try {
//         let { userId, huntId, puzzleIndex, imageUrl, hintUsed } = req.body;

//         if (!userId || !huntId || puzzleIndex === undefined || typeof imageUrl !== "string") {
//             return res.status(400).json({ message: "Missing or invalid required fields" });
//         }

//         if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(huntId)) {
//             return res.status(400).json({ message: "Invalid User ID or Hunt ID" });
//         }

//         userId = new mongoose.Types.ObjectId(userId);
//         huntId = new mongoose.Types.ObjectId(huntId);

//         let player = await Player.findOne({ user: userId, hunt: huntId });

//         if (!player) {
//             return res.status(404).json({ message: "Player not found in this hunt" });
//         }

//         player.guesses.push({ puzzleIndex, imageUrl, hintUsed });

//         await player.save();

//         res.status(200).json({ message: "Guess submitted successfully", player });
//     } catch (error) {
//         console.error("Error submitting guess:", error);
//         res.status(500).json({ message: "Internal server error", error: error.message });
//     }
// };

// // ✅ NEW FUNCTION: Upload Photo using Cloudinary
// const uploadPhoto = async (req, res) => {
//     try {
//         const { userId, huntId, puzzleIndex, hintUsed } = req.body;

//         if (!req.file) return res.status(400).json({ message: "No file uploaded" });

//         const imageUrl = req.file.path; // Cloudinary URL

//         // Save the image submission in the Player model
//         const player = await Player.findOne({ user: userId, hunt: huntId });

//         if (!player) {
//             return res.status(404).json({ message: "Player not found in this hunt" });
//         }

//         player.guesses.push({ puzzleIndex, imageUrl, hintUsed });

//         await player.save();

//         res.json({ message: "Photo submitted successfully!", imageUrl });
//     } catch (error) {
//         console.error("Upload error:", error);
//         res.status(500).json({ message: "Error uploading photo" });
//     }
// };

// const updateAction = async (req, res) => {
//     const { userId, huntId, status } = req.body;

//     try {
//         const player = await Player.findOne({ user: userId, hunt: huntId });

//         if (!player) {
//             return res.status(404).json({ error: "Player not found" });
//         }

//         const lastGuess = player.guesses[player.guesses.length - 1];

//         if (!lastGuess) {
//             return res.status(400).json({ error: "No guesses found" });
//         }

//         if (status === "correct") {
//             const earnedScore = Math.max(10 - 2 * lastGuess.hintUsed, 0);

//             player.progress.completedPuzzles += 1;
//             player.progress.score += earnedScore;

//             await player.save();

//             return res.json({
//                 message: "Answer marked correct, progress updated",
//                 completedPuzzles: player.progress.completedPuzzles,
//                 totalScore: player.progress.score,
//             });
//         } else {
//             return res.json({ message: "Answer marked wrong, no changes made" });
//         }
//     } catch (error) {
//         console.error("Error updating player progress:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// };

// module.exports = { createPlayer, submitGuess, updateAction, uploadPhoto };


import mongoose from "mongoose";
import cloudinary from "cloudinary";
import Player from "../models/playerModel.js";
import Hunt from "../models/huntModel.js";

// Create a new player and add them to the hunt's players array
export const createPlayer = async (req, res) => {
    try {
        let { user, hunt } = req.body;

        if (!hunt || !mongoose.Types.ObjectId.isValid(hunt)) {
            return res.status(400).json({ message: "Invalid or missing Hunt ID" });
        }

        if (!user) {
            user = new mongoose.Types.ObjectId();
        } else if (!mongoose.Types.ObjectId.isValid(user)) {
            return res.status(400).json({ message: "Invalid User ID format" });
        }

        user = new mongoose.Types.ObjectId(user);
        hunt = new mongoose.Types.ObjectId(hunt);

        const existingPlayer = await Player.findOne({ user, hunt });
        if (existingPlayer) {
            return res.status(409).json({ message: "Player already joined this hunt", player: existingPlayer });
        }

        const newPlayer = new Player({
            user,
            hunt,
            progress: { completedPuzzles: 0, score: 0 },
            status: "playing",
            guesses: [],
        });

        await newPlayer.save();

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
export const submitGuess = async (req, res) => {
    try {
        let { userId, huntId, puzzleIndex, imageUrl, hintUsed } = req.body;

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

// ✅ NEW FUNCTION: Upload Photo using Cloudinary
export const uploadPhoto = async (req, res) => {
    try {
        const { userId, huntId, puzzleIndex, hintUsed } = req.body;

        if (!req.file) return res.status(400).json({ message: "No file uploaded" });

        const imageUrl = req.file.path; // Cloudinary URL

        const player = await Player.findOne({ user: userId, hunt: huntId });

        if (!player) {
            return res.status(404).json({ message: "Player not found in this hunt" });
        }

        player.guesses.push({ puzzleIndex, imageUrl, hintUsed });

        await player.save();

        res.json({ message: "Photo submitted successfully!", imageUrl });
    } catch (error) {
        console.error("Upload error:", error);
        res.status(500).json({ message: "Error uploading photo" });
    }
};

export const updateAction = async (req, res) => {
    const { userId, huntId, status } = req.body;

    try {
        const player = await Player.findOne({ user: userId, hunt: huntId });

        if (!player) {
            return res.status(404).json({ error: "Player not found" });
        }

        const lastGuess = player.guesses[player.guesses.length - 1];

        if (!lastGuess) {
            return res.status(400).json({ error: "No guesses found" });
        }

        if (status === "correct") {
            const earnedScore = Math.max(10 - 2 * lastGuess.hintUsed, 0);

            player.progress.completedPuzzles += 1;
            player.progress.score += earnedScore;

            await player.save();

            return res.json({
                message: "Answer marked correct, progress updated",
                completedPuzzles: player.progress.completedPuzzles,
                totalScore: player.progress.score,
            });
        } else {
            return res.json({ message: "Answer marked wrong, no changes made" });
        }
    } catch (error) {
        console.error("Error updating player progress:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

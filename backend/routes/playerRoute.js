// const express = require("express");
// const { upload } = require("../config/cloudinary"); 
// const { createPlayer, submitGuess, updateAction, uploadPhoto } = require("../controllers/playerController");
// const Player = require("../models/playerModel"); // ✅ Player model import Kiya

// const router = express.Router();

// router.post("/createPlayer", createPlayer);
// router.post("/submitGuess", submitGuess);
// router.put("/updateAction", updateAction);
// router.post("/uploadPhoto", upload.single("photo"), uploadPhoto);

// // ✅ ✅ ✅ Fetch Submissions (SAHI VERSION) ✅ ✅ ✅
// router.get("/submissions/:huntId", async (req, res) => {
//     try {
//         const { huntId } = req.params;
        
//         // ✅ Hunt ID ke basis pe Players dhoondo
//         const players = await Player.find({ hunt: huntId });

//         if (players.length === 0) {
//             return res.status(404).json({ message: "No players found for this hunt." });
//         }

//         // ✅ Extract guesses from all players
//         const submissions = players.flatMap(player =>
//             player.guesses.map(guess => ({
//                 userId: player.user,
//                 puzzleIndex: guess.puzzleIndex,
//                 imageUrl: guess.imageUrl,
//                 hintUsed: guess.hintUsed,
//                 _id: guess._id
//             }))
//         );

//         res.json({ submissions });
//     } catch (error) {
//         console.error("Error fetching submissions:", error);
//         res.status(500).json({ message: "Server error" });
//     }
// });

// module.exports = router;




import express from "express";
import { upload } from "../config/cloudinary.js";
import { createPlayer, submitGuess, updateAction, uploadPhoto } from "../controllers/playerController.js";
import Player from "../models/playerModel.js";

const router = express.Router();

router.post("/createPlayer", createPlayer);
router.post("/submitGuess", submitGuess);
router.put("/updateAction", updateAction);
router.post("/uploadPhoto", upload.single("photo"), uploadPhoto);

// ✅ ✅ ✅ Fetch Submissions (SAHI VERSION) ✅ ✅ ✅
router.get("/submissions/:huntId", async (req, res) => {
    try {
        const { huntId } = req.params;

        const players = await Player.find({ hunt: huntId });

        if (players.length === 0) {
            return res.status(404).json({ message: "No players found for this hunt." });
        }

        const submissions = players.flatMap(player =>
            player.guesses.map(guess => ({
                userId: player.user,
                puzzleIndex: guess.puzzleIndex,
                imageUrl: guess.imageUrl,
                hintUsed: guess.hintUsed,
                _id: guess._id
            }))
        );

        res.json({ submissions });
    } catch (error) {
        console.error("Error fetching submissions:", error);
        res.status(500).json({ message: "Server error" });
    }
});

export default router;

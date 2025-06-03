
import mongoose from "mongoose";
// import cloudinary from "cloudinary";
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


// export const updateAction = async (req, res) => {
//     try {
//         const { userId, huntId, status } = req.body;
    
//         // Validate input
//         if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(huntId)) {
//           return res.status(400).json({ error: "Invalid userId or huntId" });
//         }
    
//         const player = await Player.findOne({
//           userId: new mongoose.Types.ObjectId(userId),
//           huntId: new mongoose.Types.ObjectId(huntId),
//         });
    
//         if (!player) {
//           return res.status(404).json({ error: "Player not found" });
//         }
    
//         player.status = status;
//         await player.save();
    
//         res.status(200).json({ message: "Player status updated successfully", player });
//       } catch (error) {
//         console.error("Error updating player:", error);
//         res.status(500).json({ error: "Something went wrong" });
//       }
// };


// export const updateAction = async (req, res) => {
//     try {
//       const { userId, huntId, status, hintUsed } = req.body;
  
//       if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(huntId)) {
//         return res.status(400).json({ error: "Invalid userId or huntId" });
//       }
  
//       const player = await Player.findOne({
//         user: userId,
//         hunt: huntId,
//       });
  
//       if (!player) {
//         return res.status(404).json({ error: "Player not found" });
//       }
  
//       player.status = status;
//       await player.save();
  
//       res.status(200).json({ message: "Player status updated successfully", player });
//     } catch (error) {
//       console.error("Error updating player:", error);
//       res.status(500).json({ error: "Something went wrong" });
//     }
//   };
  

export const updateAction = async (req, res) => {
    try {
      const { userId, huntId, status, isCorrect, hintUsed } = req.body;
  
      if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(huntId)) {
        return res.status(400).json({ error: "Invalid userId or huntId" });
      }
  
      const player = await Player.findOne({
        user: userId,
        hunt: huntId,
      });
  
      if (!player) {
        return res.status(404).json({ error: "Player not found" });
      }
  
      // Update score based on correctness and hintUsed
      if (isCorrect) {
        const earnedScore = Math.max(0, 10 - 2 * hintUsed);
        player.progress.score += earnedScore;
      }
  
      // Optionally update player status if needed
      if (status) {
        player.status = status;
      }
  
      await player.save();
  
      res.status(200).json({
        message: "Player updated successfully",
        player
      });
    } catch (error) {
      console.error("Error updating player:", error);
      res.status(500).json({ error: "Something went wrong" });
    }
  };
  
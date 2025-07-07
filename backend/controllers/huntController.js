
import mongoose from 'mongoose';
import Hunt from '../models/huntModel.js';
import Player from '../models/playerModel.js';
import User from "../models/userModel.js";


const createHunt = async (req, res) => {
    try {
      const { name, description, startTime, endTime, puzzle, userId } = req.body;
  
      if (!name || !description || !startTime || !endTime || !Array.isArray(puzzle)) {
        return res.status(400).json({ message: "All required fields must be provided, and puzzle must be an array." });
      }
  
      const existingHunt = await Hunt.findOne({ name });
      if (existingHunt) {
        return res.status(400).json({ message: "A hunt with this name already exists." });
      }
  
      const newHunt = new Hunt({
        name,
        description,
        startTime,
        endTime,
        puzzle,
        createdBy: userId, // ← Now using userId from middleware
        players: [],
        leaderboard: [],
      });
  
      await newHunt.save();
  
      res.status(201).json({ message: "Hunt created successfully!", hunt: newHunt });
    } catch (error) {
      console.error("Error in createHunt:", error);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };
  

  

const getLiveHunts = async (req, res) => {
    try {
        const currentTime = new Date();
        const liveHunts = await Hunt.find({
            startTime: { $lte: currentTime },
            endTime: { $gte: currentTime }
        }).select("name description startTime endTime puzzle");

        const formattedHunts = liveHunts.map(hunt => ({
            _id: hunt._id,
            name: hunt.name,
            description: hunt.description,
            startTime: hunt.startTime,
            endTime: hunt.endTime,
            puzzleCount: Array.isArray(hunt.puzzle) ? hunt.puzzle.length : 0
        }));

        res.json(formattedHunts);
    } catch (error) {
        console.error("Error fetching live hunts:", error);
        res.status(500).json({ message: "Error fetching live hunts", error: error.message });
    }
};

const getUpcomingHunts = async (req, res) => {
    try {
        const currentTime = new Date();
        const upcomingHunts = await Hunt.find({
            startTime: { $gte: currentTime }
        }).select("name description startTime endTime puzzle");

        const formattedHunts = upcomingHunts.map(hunt => ({
            _id: hunt._id,
            name: hunt.name,
            description: hunt.description,
            startTime: hunt.startTime,
            endTime: hunt.endTime,
            puzzleCount: Array.isArray(hunt.puzzle) ? hunt.puzzle.length : 0
        }));

        res.json(formattedHunts);
    } catch (error) {
        console.error("Error fetching upcoming hunts:", error);
        res.status(500).json({ message: "Error fetching upcoming hunts", error: error.message });
    }
};

const getPreviousHunts = async (req, res) => {
  try {
    const currentTime = new Date();
    const previousHunts = await Hunt.find({
      endTime: { $lt: currentTime }
    }).select("name description startTime endTime puzzle");

    const formattedHunts = previousHunts.map(hunt => ({
      _id: hunt._id,
      name: hunt.name,
      description: hunt.description,
      startTime: hunt.startTime,
      endTime: hunt.endTime,
      puzzleCount: Array.isArray(hunt.puzzle) ? hunt.puzzle.length : 0
    }));

    res.json(formattedHunts);
  } catch (error) {
    console.error("Error fetching previous hunts:", error);
    res.status(500).json({ message: "Error fetching previous hunts", error: error.message });
  }
};

const displayPuzzle = async (req, res) => {
    try {
        const hunt = await Hunt.findById(req.params.huntId);
        if (!hunt) return res.status(404).json({ error: "Hunt not found" });

        res.json({
            name: hunt.name,
            description: hunt.description,
            startTime: hunt.startTime,
            endTime: hunt.endTime,
            puzzles: hunt.puzzle,
            leaderboard: hunt.leaderboard
        });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const yourHunt = async (req, res) => {
    try {
        const hunts = await Hunt.find({ createdBy: req.params.userId });

        if (!hunts || hunts.length === 0) {
            return res.status(404).json({ error: "No hunts found for this user" });
        }

        res.json(hunts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const submissions = async (req, res) => {
    try {
        const { huntId } = req.params;

        if (!huntId || !mongoose.Types.ObjectId.isValid(huntId)) {
            return res.status(400).json({ error: "Invalid Hunt ID format" });
        }

        const hunt = await Hunt.findById(huntId);
        if (!hunt) return res.status(404).json({ error: "Hunt not found" });

        const players = await Player.find({ hunt: huntId }).select('user guesses');
        if (!players.length) return res.json({ table: [] });

        const table = players.flatMap(player =>
            player.guesses.map(guess => ({
                userId: player.user,
                puzzleIndex: guess.puzzleIndex,
                puzzle: hunt.puzzle[guess.puzzleIndex]?.clue || "Unknown Clue",
                guessedImageUrl: guess.imageUrl || "N/A",
                status: guess.status || "Pending",
                action: "Review"
            }))
        );

        res.json({ table });
    } catch (error) {
        console.error("Error fetching submissions:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


// const getLeaderboard = async (req, res) => {
//   try {
//     const { huntId } = req.params;
//     const hunt = await Hunt.findById(huntId).populate("leaderboard.user", "name");

//     if (!hunt) {
//       return res.status(404).json({ message: "Hunt not found" });
//     }

//     res.json(hunt.leaderboard);
//   } catch (error) {
//     console.error("Error fetching leaderboard:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

const getLeaderboard = async (req, res) => {
  try {
    const { huntId } = req.params;

    const hunt = await Hunt.findById(huntId).populate({
      path: "leaderboard.user",
      model: "user", // <== Fix: match the registered model name
      select: "name"
    });

    if (!hunt) {
      return res.status(404).json({ message: "Hunt not found" });
    }

    res.json(hunt.leaderboard);
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    res.status(500).json({ message: "Server error" });
  }
};



const updateLeaderboards = async (req, res) => {
  try {
    const { huntId } = req.params;

    const hunt = await Hunt.findById(huntId);
    if (!hunt) return res.status(404).json({ message: "Hunt not found" });

    // Check if hunt has ended
    if (new Date(hunt.endTime) > new Date()) {
      return res.status(400).json({ message: "Hunt has not ended yet" });
    }

    // Fetch all players of the hunt
    // const players = await Player.find({ hunt: huntId }).populate("user", "name");
    const players = await Player.find({ hunt: huntId }).populate({
  path: "user",
  model: "user", // match the lowercase
  select: "name"
});


    const leaderboard = players.map(player => ({
      user: player.user._id,
      score: player.progress.score,
      timeCompleted: player.updatedAt // Or a specific "completedTime" if tracked
    }));

    // Sort by score descending, then by earliest timeCompleted
    leaderboard.sort((a, b) =>
      b.score !== a.score
        ? b.score - a.score
        : new Date(a.timeCompleted) - new Date(b.timeCompleted)
    );

    hunt.leaderboard = leaderboard;
    await hunt.save();

    res.json({ message: "Leaderboard updated", leaderboard });
  } catch (error) {
    console.error("❌ Error in updateLeaderboards:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
export {
  createHunt,
  getLiveHunts,
  getUpcomingHunts,
  displayPuzzle,
  yourHunt,
  submissions,
  getLeaderboard,
  updateLeaderboards,
  getPreviousHunts
};

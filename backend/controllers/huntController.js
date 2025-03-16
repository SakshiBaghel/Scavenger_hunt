const mongoose = require('mongoose');

const Hunt = require("../models/huntModel");
const Player = require("../models/playerModel")


// Create a new Hunt
const createHunt = async (req, res) => {
    try {
        const { name, description, startTime, endTime, puzzle, createdBy } = req.body;

        // Basic validation
        if (!name || !description || !startTime || !endTime || !Array.isArray(puzzle)) {
            return res.status(400).json({ message: "All required fields must be provided, and puzzle must be an array." });
        }

        // Check if a hunt with the same name already exists
        const existingHunt = await Hunt.findOne({ name });
        if (existingHunt) {
            return res.status(400).json({ message: "A hunt with this name already exists." });
        }

        // Creating a new Hunt
        const newHunt = new Hunt({
            name,
            description,
            startTime,
            endTime,
            puzzle,
            createdBy: createdBy || null,
            players: [],
            leaderboard: []
        });

        // Save to database
        await newHunt.save();

        res.status(201).json({ message: "Hunt created successfully!", hunt: newHunt });
    } catch (error) {
        console.error("Error in createHunt:", error); // Log the actual error
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Fetching live hunts
const getLiveHunts = async (req, res) => {
    try {
        const currentTime = new Date();
        
        // Corrected model reference from `huntModel` to `Hunt`
        const liveHunts = await Hunt.find({
            startTime: { $lte: currentTime },
            endTime: { $gte: currentTime }
        }).select("name description startTime endTime puzzle");

        // Ensure `puzzle` is an array before using `.length`
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
        console.error("Error fetching live hunts:", error); // Debugging error
        res.status(500).json({ message: "Error fetching live hunts", error: error.message });
    }
};


// Fetching upcoming hunts
const getUpcomingHunts = async (req, res) => {
    try {
        const currentTime = new Date();
        
        // Corrected model reference from `huntModel` to `Hunt`
        const liveHunts = await Hunt.find({
            startTime: { $gte: currentTime }
        }).select("name description startTime endTime puzzle");

        // Ensure `puzzle` is an array before using `.length`
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
        console.error("Error fetching live hunts:", error); // Debugging error
        res.status(500).json({ message: "Error fetching live hunts", error: error.message });
    }
};

//display puzzle
const displayPuzzle = async (req, res) => {
    try {
        const hunt = await Hunt.findById(req.params.huntId);
        if (!hunt) return res.status(404).json({ error: "Hunt not found" });
        
        res.json({
            name: hunt.name,
            description: hunt.description,
            startTime: hunt.startTime,
            endTime: hunt.endTime,
            puzzles: hunt.puzzle, // Sending only puzzles
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


// const submissions = async (req, res) => {
//     try {
//         const { huntId } = req.params;
//         // const huntId = "67cd5a7c615a9fc7c706577a";
//         console.log("huntId: ", huntId)
//         // Check if huntId is a valid ObjectId
//         if (!mongoose.Types.ObjectId.isValid(huntId)) {
//             return res.status(400).json({ error: "Invalid hunt ID" });
//         }

//         console.log("Request received for Hunt ID:", huntId); // ✅ Debugging

//         // Fetch players participating in this hunt
//         const players = await Player.find({ hunt: huntId }).select('user guesses');

//         console.log("Fetched Players:", players); // ✅ Debugging

//         if (players.length === 0) {
//             return res.json({ table: [] }); // No players found
//         }

//         // ✅ Filter out players with guesses
//         const updatedPlayers = players.filter(player => player.guesses.length > 0);

//         console.log("Players with guesses:", updatedPlayers); // ✅ Debugging

//         // ✅ Format data for the table
//         const tableData = updatedPlayers.map(player => ({
//             userId: player.user,  // Player's user ID
//             guesses: player.guesses.map(guess => ({
//                 puzzleIndex: guess.puzzleIndex,
//                 guessedLocation: guess.guessedLocation?.coordinates || "N/A",
//                 imageUrl: guess.imageUrl || "N/A",
//                 status: guess.hintUsed > 0 ? "Hint Used" : "Pending"
//             }))
//         }));

//         res.json({ table: tableData });
//     } catch (error) {
//         console.error("Error fetching submissions:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }

// }

// const submissions = async (req, res) => {
//     try {
//         const { huntId } = req.params;

//         if (!huntId) {
//             return res.status(400).json({ error: "Hunt ID is required" });
//         }

//         if (!mongoose.Types.ObjectId.isValid(huntId)) {
//             return res.status(400).json({ error: "Invalid Hunt ID format" });
//         }

//         console.log("Request received for Hunt ID:", huntId);

//         const players = await Player.find({ hunt: huntId }).select('user guesses');

//         if (!players.length) {
//             return res.json({ table: [] });
//         }

//         let table = [];

//         players.forEach(player => {
//             player.guesses.forEach(guess => {
//                 table.push({
//                     userId: player.user,
//                     puzzleIndex: guess.puzzleIndex,
//                     puzzle: `Puzzle ${guess.puzzleIndex}`, // Placeholder; modify as per actual data
//                     guessedImageUrl: guess.imageUrl || "N/A",
//                     status: guess.status || "Pending",
//                     action: "Review" // Assuming a default action, modify as needed
//                 });
//             });
//         });

//         res.json({ table });
//     } catch (error) {
//         console.error("Error fetching submissions:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// }


const submissions = async (req, res) => {
    try {
        const { huntId } = req.params;

        if (!huntId) {
            return res.status(400).json({ error: "Hunt ID is required" });
        }

        if (!mongoose.Types.ObjectId.isValid(huntId)) {
            return res.status(400).json({ error: "Invalid Hunt ID format" });
        }

        console.log("Request received for Hunt ID:", huntId);

        // Fetch hunt details
        const hunt = await Hunt.findById(huntId);

        if (!hunt) {
            return res.status(404).json({ error: "Hunt not found" });
        }

        // Fetch players participating in the hunt
        const players = await Player.find({ hunt: huntId }).select('user guesses');

        if (!players.length) {
            return res.json({ table: [] });
        }

        let table = [];

        players.forEach(player => {
            player.guesses.forEach(guess => {
                const puzzleIndex = guess.puzzleIndex;
                
                // Fetch the corresponding puzzle clue
                const puzzle = hunt.puzzle[puzzleIndex];
                const clue = puzzle ? puzzle.clue : "Unknown Clue";

                table.push({
                    userId: player.user,
                    puzzleIndex: puzzleIndex,
                    puzzle: clue, // Clue from the hunt
                    guessedImageUrl: guess.imageUrl || "N/A",
                    status: guess.status || "Pending",
                    action: "Review" // Default action, modify as needed
                });
            });
        });

        res.json({ table });
    } catch (error) {
        console.error("Error fetching submissions:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = { createHunt, getLiveHunts, getUpcomingHunts, displayPuzzle, yourHunt, submissions};

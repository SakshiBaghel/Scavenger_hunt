
const Hunt = require("../models/huntModel");

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

module.exports = { createHunt, getLiveHunts, getUpcomingHunts, displayPuzzle};

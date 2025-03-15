
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

// const submissions = async(req, res) => {
//     try {
//         const { huntId } = req.params;
//         console.log("huntID: ",huntID)
//         // Find the hunt and ensure the logged-in user is the creator
//         const hunt = await Hunt.findById(huntId).populate('createdBy');
//         if (!hunt) return res.status(404).json({ message: "Hunt not found" });

//         // Get players' guesses for this hunt
//         const players = await Player.find({ hunt: huntId })
//             .populate('user', 'name email') // Populate user details
//             .select('user guesses');

//         res.json(players);
//     } catch (error) {
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// }

const submissions = async (req, res) => {
    try {
        const { huntId } = req.params;

        // Hunt ke saare players fetch karo
        const players = await Player.find({ hunt: huntId }).select('user guesses');

        // Sirf wahi players jinke guesses update hue hai
        const updatedPlayers = players.filter(player => player.guesses.length > 0);

        // Table format ke liye JSON data tayar karna
        const tableData = updatedPlayers.map(player => ({
            userId: player.user,  // Player ka userId
            guesses: player.guesses.map(guess => ({
                puzzleIndex: guess.puzzleIndex,
                guessedLocation: guess.guessedLocation?.coordinates || "N/A",
                imageUrl: guess.imageUrl || "N/A",
                status: guess.hintUsed > 0 ? "Hint Used" : "Pending"
            }))
        }));

        res.json({ table: tableData });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }

}





module.exports = { createHunt, getLiveHunts, getUpcomingHunts, displayPuzzle, yourHunt, submissions};

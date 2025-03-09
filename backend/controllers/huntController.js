
const Hunt = require("../models/huntModel");

// Create a new Hunt
// const createHunt = async (req, res) => {
//     try {
//         const { name, description, startTime, endTime, puzzle, createdBy } = req.body;

//         // Basic validation
//         if (!name || !description || !startTime || !endTime || !puzzle) {
//             return res.status(400).json({ message: "All required fields must be provided." });
//         }

//         // Check if a hunt with the same name already exists
//         const existingHunt = await Hunt.findOne({ name });
//         if (existingHunt) {
//             return res.status(400).json({ message: "A hunt with this name already exists." });
//         }

//         // Creating a new Hunt
//         const newHunt = new Hunt({
//             name,
//             description,
//             startTime,
//             endTime,
//             puzzle,
//             createdBy: createdBy || null,  // Optional field
//             players: [],
//             leaderboard: []
//         });

//         // Save to database
//         await newHunt.save();

//         res.status(201).json({ message: "Hunt created successfully!", hunt: newHunt });
//     } catch (error) {
//         res.status(500).json({ message: "Server error", error: error.message });
//     }
// };

const createHunt = async (req, res) => {
    try {
        const { name, description, startTime, endTime, puzzle, createdBy } = req.body;

        // Basic validation
        if (!name || !description || !startTime || !endTime || !puzzle) {
            return res.status(400).json({ message: "All required fields must be provided." });
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
        console.error(" Error in createHunt:", error);  // Log the actual error
        res.status(500).json({ message: "Server error", error: error.message });
    }
};


module.exports = { createHunt };

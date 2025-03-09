// const express = require("express");
// // const { getLiveHunts, getUpcomingEvents, createHunt } = require("../controllers/huntController");
// const { createHunt } = require("../controllers/huntController");

// const router = express.Router();

// // router.get("/liveHunts", getLiveHunts);
// // router.get("/upcomingHunts", getUpcomingEvents);
// router.post("/createHunt", createHunt);

// module.exports = router;


const express = require("express");
const { createHunt } = require("../controllers/huntController");

const router = express.Router();

// Debugging middleware (Log request data)
router.post("/createHunt", async (req, res, next) => {
    try {
        console.log("Request received:", req.body);
        await createHunt(req, res);  // Call the actual controller function
    } catch (error) {
        next(error);  // Pass the error to Express error handling
    }
});
// router.post("/createHunt", createHunt);
module.exports = router;


// const express = require("express");
// const { createHunt, getLiveHunts, getUpcomingHunts, displayPuzzle, yourHunt, submissions } = require("../controllers/huntController");

// const router = express.Router();



// // Debugging middleware (Log request data)
// router.post("/createHunt", async (req, res, next) => {
//     try {
//         console.log("Request received:", req.body);
//         await createHunt(req, res);  // Call the actual controller function
//     } catch (error) {
//         next(error);  // Pass the error to Express error handling
//     }
// });

// router.get("/liveHunts", async(req, res, next) => {
//     try {
//         console.log("Request received");
//         await getLiveHunts(req, res);
//     } catch (error) {
//         next(error);  // Pass the error to Express error handling
//     }
// });

// // fetching upcoming hunts
// router.get("/upcomingHunts", async(req, res, next) => {
//     try {
//         console.log("Request received");
//         await getUpcomingHunts(req, res);
//     } catch (error) {
//         next(error);  // Pass the error to Express error handling
//     }
// });

// router.get("/:huntId", async (req, res) =>{
//     try {
//         console.log("Request received join hunt");
//         await displayPuzzle(req, res);
//     } catch (error) {
//         next(error);  // Pass the error to Express error handling
//     }

// })

// router.get("/yourHunt/:userId", async (req, res) =>{
//     try {
//         console.log("Request received Your hunt");
//         await yourHunt(req, res);
//     } catch (error) {
//         next(error);  // Pass the error to Express error handling
//     }

// })

// router.get("/submissions/:huntId", async (req, res) =>{
//     try {
//         console.log("Request received Your hunt");
//         await submissions(req, res);
//     } catch (error) {
//         next(error);  // Pass the error to Express error handling
//     }

// })


// module.exports = router;    

import express from "express";
import {
  createHunt,
  getLiveHunts,
  getUpcomingHunts,
  displayPuzzle,
  yourHunt,
  submissions,
} from "../controllers/huntController.js";

const router = express.Router();

// Debugging middleware (Log request data)
router.post("/createHunt", async (req, res, next) => {
  try {
    console.log("Request received:", req.body);
    await createHunt(req, res);
  } catch (error) {
    next(error);
  }
});

router.get("/liveHunts", async (req, res, next) => {
  try {
    console.log("Request received");
    await getLiveHunts(req, res);
  } catch (error) {
    next(error);
  }
});

router.get("/upcomingHunts", async (req, res, next) => {
  try {
    console.log("Request received");
    await getUpcomingHunts(req, res);
  } catch (error) {
    next(error);
  }
});

router.get("/:huntId", async (req, res, next) => {
  try {
    console.log("Request received join hunt");
    await displayPuzzle(req, res);
  } catch (error) {
    next(error);
  }
});

router.get("/yourHunt/:userId", async (req, res, next) => {
  try {
    console.log("Request received Your hunt");
    await yourHunt(req, res);
  } catch (error) {
    next(error);
  }
});

router.get("/submissions/:huntId", async (req, res, next) => {
  try {
    console.log("Request received Your hunt");
    await submissions(req, res);
  } catch (error) {
    next(error);
  }
});

export default router;

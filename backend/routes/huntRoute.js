import express from "express";
import {
  createHunt,
  getLiveHunts,
  getUpcomingHunts,
  getPreviousHunts,
  displayPuzzle,
  yourHunt,
  submissions,
  getLeaderboard,
  updateLeaderboards
} from "../controllers/huntController.js";

import userAuth from "../middleware/userAuth.js"; // Import the middleware


const router = express.Router();

router.post("/createHunt", userAuth, async (req, res, next) => {
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

router.get("/previousHunts", async (req, res, next) => {
  try {
    console.log("Previous hunt Request received");
    await getPreviousHunts(req, res);
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
    console.log("Request received submission");
    await submissions(req, res);
  } catch (error) {
    next(error);
  }
});

router.get("/leaderboard/:huntId", async (req, res, next) => {
  try {
    console.log("📊 Request received for leaderboard");
    await getLeaderboard(req, res);
  } catch (error) {
    next(error);
  }
});

router.post("/updateLeaderboards/:huntId", async (req, res, next) => {
  try {
    console.log("📊 Request received for update leaderboard");
    await updateLeaderboards(req, res);
  } catch (error) {
    next(error);
  }
});

export default router;

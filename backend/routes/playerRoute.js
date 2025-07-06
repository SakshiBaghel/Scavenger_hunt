

import express from "express";
import { } from "../controllers/playerController.js";
import { upload } from "../config/cloudinary.js";
import { createPlayer, submitGuess, updateAction, uploadPhoto, getSubmissions, getProgress } from "../controllers/playerController.js";

const router = express.Router();

router.post("/createPlayer", createPlayer);
router.post("/submitGuess", submitGuess);
router.put("/updateAction", updateAction);
router.post("/uploadPhoto", upload.single("photo"), uploadPhoto);

// New route pointing to controller function
router.get("/submissions/:huntId", getSubmissions);
router.get("/progress/:userId/:huntId", getProgress);

export default router;

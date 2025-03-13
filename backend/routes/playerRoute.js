 
const express = require('express');
const { createPlayer, submitGuess } = require('../controllers/playerController'); 

const router = express.Router();

// Route to create a new player
router.post('/createPlayer', createPlayer);

// Route the submit guesses
router.post('/submitGuess', submitGuess);

module.exports = router;

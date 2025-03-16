 
const express = require('express');
const { createPlayer, submitGuess, updateAction } = require('../controllers/playerController'); 

const router = express.Router();

// Route to create a new player
router.post('/createPlayer', createPlayer);

// Route the submit guesses
router.post('/submitGuess', submitGuess);

router.put('/updateAction', updateAction);

module.exports = router;

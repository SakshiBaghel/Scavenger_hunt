// const express = require("express");


// const router = express.Router();

// module.exports = router;  


const express = require('express');
const { createPlayer } = require('../controllers/playerController'); // Import controller

const router = express.Router();

// Route to create a new player
router.post('/createPlayer', createPlayer);

module.exports = router;

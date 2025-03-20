const express = require('express');
const { upload } = require('../config/cloudinary');
const router = express.Router();

// POST route to upload photo
router.post('/upload', upload.single('photo'), (req, res) => {
    try {
        res.json({ imageUrl: req.file.path }); // Cloudinary image URL
    } catch (error) {
        res.status(500).json({ error: 'Photo upload failed' });
    }
});

module.exports = router;

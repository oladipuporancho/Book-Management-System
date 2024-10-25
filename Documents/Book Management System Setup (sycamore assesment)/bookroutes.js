const express = require('express');
const { viewProfile, updateProfile, deleteProfile } = require('../controllers/profileController');
const { verifyToken } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/profile', verifyToken, viewProfile);
router.put('/profile', verifyToken, updateProfile);
router.delete('/profile', verifyToken, deleteProfile);

module.exports = router
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const authMiddleware = require('../middleware/authMiddleware');   


router.post('/books', authMiddleware, bookController.createBook);

module.exports = router
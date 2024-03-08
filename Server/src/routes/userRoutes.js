// userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticate } = require('../middleware/authMiddleware');

router.post('/register',authenticate, userController.registerUser);

module.exports = router;

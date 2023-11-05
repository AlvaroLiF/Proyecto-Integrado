const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/auth');
const UserController = require('../controllers/userController');

router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);

module.exports = router;

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/checkusercontroller');

// Route to check if a user exists with the given userId
router.get('/api/v1/user/:userId', UserController.checkUserExists);

module.exports = router;

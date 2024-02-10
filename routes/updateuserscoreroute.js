
const express = require('express');
const router = express.Router();
const userScoreController = require('../controllers/updateuserscorecontroller'); // Corrected import path
//const UserController = require('../controllers/checkusercontroller');

// Route to check if a user exists with the given userId
//router.get('/api/v1/user/:userId', UserController.checkUserExists);


// Route for updating user score
router.put('/updateuserscore', userScoreController.updateUserScore);

module.exports = router;


const express = require('express');
const router = express.Router();
const userController = require('../controllers/gettodaycontroller');

router.get('/data/today', userController.getUsersByScore);

module.exports = router;
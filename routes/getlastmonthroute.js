const express = require('express');
const router = express.Router();
const userController = require('../controllers/getlastmonthcontroller');

router.get('/data/lastmonth', userController.getUsersByScore);

module.exports = router;
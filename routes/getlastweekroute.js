

const express = require('express');
const router = express.Router();
const userController = require('../controllers/getlastweekcontroller');

router.get('/data/lastweek', userController.getUsersByScore);

module.exports = router;

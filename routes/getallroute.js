const express = require('express');
const router = express.Router();
const userController = require('../controllers/getallcontroller');

router.get('/data/all', userController.getUsersByScore);

module.exports = router;
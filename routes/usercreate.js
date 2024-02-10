const express=require("express");
const router=express.Router();

const {createuserscore}=require("../controllers/createuserscorecontroller");
const UserController = require('../controllers/checkusercontroller');

// Route to check if a user exists with the given userId
router.get('/api/v1/user/:userId', UserController.checkUserExists);


router.post("/createuserscore",createuserscore);

module.exports=router;
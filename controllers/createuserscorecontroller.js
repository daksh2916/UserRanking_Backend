const database = require("../config/database");
const User=require("../models/User");
const Score=require("../models/Score");

exports.createuserscore= async(req,res)=>{
    try{
const {name,userid,score,createdAt,updatedAt}=req.body;
const response1 =await User.create({name,userid,createdAt,updatedAt});
const response2 =await Score.create({score,userid,createdAt,updatedAt});


res.status(200).json(
    {
        success:true,
        userData:response1,
        scoreData:response2,
        message:'object created succesfully'
    }
);
    }
    catch(err)
    {
console.log("error in object creation");
res.status(500).json(
    {
        success:false,
        data:"internal server error",
        message:'object creation failure'
    }
)
    }
}
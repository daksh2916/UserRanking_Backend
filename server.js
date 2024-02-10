const express= require('express');
const app =express();
const cors = require('cors');
const todoroutes=require("./routes/usercreate");
const checkroutes=require("./routes/checkuserroute");
const updateroutes=require('./routes/updateuserscoreroute');
const weekRoutes = require('./routes/getlastweekroute');
const todayRoutes = require('./routes/gettodayroute');
const monthRoutes = require('./routes/getlastmonthroute');
const allRoutes = require('./routes/getallroute');

app.use(cors());
require("dotenv").config();

const PORT=process.env.Port|| 4000;

app.use(express.json());



app.use("/api/v1",todoroutes);
app.use("/api/v1",updateroutes);
app.use("/api/v1",checkroutes);
app.use('/api/v1', weekRoutes);
app.use('/api/v1', todayRoutes);
app.use('/api/v1', monthRoutes);
app.use('/api/v1', allRoutes);

app.listen(PORT,()=>{
    console.log("Server Ache se Chala");
});

const dccon=require("./config/database");
dccon;

app.get("/",(req,res)=>
{
    res.send(`<h1>This is Home Page</h1>`);
}
);
require("dotenv").config();
import express from "express";
import connectDb from "./config/connectDB";
import configViewEngine from "./config/viewEngine";

const app = express();

//connect mongo
connectDb();
// config view engine
configViewEngine(app);

app.get('/', (req,res)=>{
    res.render("main/master");
});
app.get('/login-register', (req,res)=>{
    res.render("auth/loginRegister");
});

const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log(`server running on ${port}`);
})
require("dotenv").config();
import express from "express";
import connectDb from "./config/connectDB";
import configViewEngine from "./config/viewEngine";
import initRouter from "./routes";

const app = express();

//connect mongo
connectDb();
// config view engine
configViewEngine(app);
// init routes
initRouter(app);


const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log(`server running on ${port}`);
})
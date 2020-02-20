require("dotenv").config();
import express from "express";
import connectDb from "./config/connectDB";
import configViewEngine from "./config/viewEngine";
import initRouter from "./routes";
import bodyParser from "body-parser";

const app = express();

//connect mongo
connectDb();
// config view engine
configViewEngine(app);
// body-parsers
app.use(bodyParser.urlencoded({ extend: true}));
// init routes
initRouter(app);


const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log(`server running on ${port}`);
})
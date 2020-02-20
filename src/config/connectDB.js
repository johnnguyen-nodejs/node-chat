import mongoose from "mongoose";
import bluebird from "bluebird";

/**
 * connect to mongodb
 */
let connectDb = ()=>{
    mongoose.Promise = bluebird;
    let DB_CONNECTION = "mongodb";
    let DB_HOST = "localhost";
    let DB_PORT = "27017";
    let DB_NAME = "node-chat";
    let DB_USER = "";
    let DB_PASSWORD = "";
    let URI = `${DB_CONNECTION}://${DB_HOST}:${DB_PORT}/${DB_NAME}`
}

module.exports = connectDb;
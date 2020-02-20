
import mongoose from "mongoose";
import bluebird from "bluebird";

/**
 * connect to mongodb
 */
let connectDb = ()=>{
    mongoose.Promise = bluebird;

    let URI = `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

    return mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, ()=>{
        console.log("connecting mongo ..");
    })
}

module.exports = connectDb;
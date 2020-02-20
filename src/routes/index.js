import express from "express";
import auth from "./../controller/authController";
import home from "./../controller/homeController";
let router = express.Router();
let initRouter = (app)=>{
    router.get('/', home.getHome);
    router.get('/auth', auth.getAuth);
    router.get('/*', (req,res)=>{
        res.redirect("/")
    });

    app.use('/', router);
}

module.exports = initRouter;
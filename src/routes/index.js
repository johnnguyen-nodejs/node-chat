import express from "express";
import auth from "./../controller/authController";
import home from "./../controller/homeController";
import authValid from "./../validation/authValidation";

let router = express.Router();

let initRouter = (app)=>{
    router.get('/', home.getHome);
    router.get('/auth', auth.getAuth);
    router.post('/register',authValid.register, auth.postRegister);
    router.get('/*', (req,res)=>{
        res.redirect("/")
    });

    app.use('/', router);
}

module.exports = initRouter;
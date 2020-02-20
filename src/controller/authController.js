import { validationResult} from "express-validator/check";

let getAuth = (req,res)=>{
    return res.render("auth/master");
};
let postRegister = (req,res)=>{
    console.log(validationResult(req).isEmpty());
    console.log("--------------------------")
    console.log(validationResult(req).mapped());
    let validationErrors = validationResult(req);
    if(!validationErrors.isEmpty()){
        let errors = Object.values(validationErrors.mapped());
        console.log(errors);
    }
};

module.exports = {
    getAuth: getAuth,
    postRegister: postRegister
}
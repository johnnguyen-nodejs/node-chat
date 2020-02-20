import {check} from "express-validator/check";
import {tranValidation} from "./../../lang/vi";

let register = [
    check("email", tranValidation.email_incorrect)
    .isEmail()
    .trim(),
    check("gender", tranValidation.gender_incorrect)
    .isIn(["male", "female"]),
    check("password", tranValidation.password_incorrect)
    .isLength({min:8}),
    check("password_confirmation", tranValidation.password_comfirmation_incorrect)
    .custom((value, req)=>{
        return value === req.body.password
    })
];

module.exports = {
    register: register
}
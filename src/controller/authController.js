let getAuth = (req,res)=>{
    return res.render("auth/master");
};
let getLogout = (req,res)=>{
    //
};

module.exports = {
    getAuth: getAuth,
    getLogout: getLogout
}
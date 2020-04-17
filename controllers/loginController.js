const userService = require("../services/userService");

const renderLogin = function(req, res){
    res.render('login', {
        loginActive: true,
        loginFailed: req.body.loginFailed,
        username: req.body.username
    })
}
const submitLogin = function(req, res){

    userService.verifyLogin(req.body.username, req.body.password)
        .then(function(loginSuccess){
            if(loginSuccess){
                req.session.isAdmin = true;
                console.log("success", req.body);
                res.redirect('/');
            }else{
                req.body.loginFailed = true;
                renderLogin(req, res);
            }
        });
}

const logout = function(req, res){
    if(req.session){
        delete req.session.isAdmin;
    }
    res.redirect('/');
}

module.exports = {
    renderLogin,
    submitLogin,
    logout
}
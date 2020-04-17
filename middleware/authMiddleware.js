
const auth = function(req, res, next){
    if(req.session && req.session.isAdmin === true){
        console.log("user is logged in")
        next();
    }else{
        console.log("user is not logged in - Access denied!")
        // res.status("401").send();
        res.writeHead(401);  
        res.end('Permission denied');
    }
}

module.exports = auth;
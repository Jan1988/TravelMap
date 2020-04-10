const bcrypt = require('bcrypt');
const ADMIN_HASH = '$2b$10$KwL4r9ax1kDWmSJ9TjIGS.tCMxJlEFNbEuOSi.GC9Rnt0lB5nmVmW';

const verifyLogin = function(username, password){
    if(username !== "admin"){
        return Promise.resolve(false);
    }
    return bcrypt.compare(password, ADMIN_HASH );
}

module.exports = {
    verifyLogin
}
const
    fs = require('fs'),
    path = require('path');

exports.getRndImg = function(folderName){
    let folderPath = path.join(process.cwd(), 'public', 'images', folderName);
    let rndImgPath = null;
    
    if(fs.existsSync(folderPath)){
        const dirs = fs.readdirSync(folderPath);
        const randomIndex = Math.floor( Math.random() * dirs.length );
        let rndImgfile = dirs[randomIndex];
        rndImgPath = path.join('/', 'images', folderName, rndImgfile);
        console.log(rndImgPath);
    }
    return rndImgPath;
}
const
    fs = require('fs'),
    path = require('path'),
    sizeOf = require('image-size');

exports.getRndImg = function(folderName){
    let folderPath = path.join(process.cwd(), 'public', 'images', folderName);
    let rndImgPath = null;
    let aspectRatio;
    let rndImgfile;
    let dimensions;

    if(fs.existsSync(folderPath)){
        const dirs = fs.readdirSync(folderPath);
        do{
            let randomIndex = Math.floor( Math.random() * dirs.length );
            rndImgfile = dirs[randomIndex];
            dimensions = sizeOf(path.join(process.cwd(), 'public', 'images', folderName, rndImgfile));
            aspectRatio = dimensions.height / dimensions.width;
            console.log(dimensions, aspectRatio)
        }while(0.5 > aspectRatio || aspectRatio > 0.67)

        rndImgPath = path.join('/', 'images', folderName, rndImgfile);
    }
    return rndImgPath;
}
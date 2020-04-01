const fs = require('fs');
const path = require('path');

exports.getWaypointRndImg = function(req, res){
    let wayPoint = req.query.wayPoint;
    let wayPointPath = path.join(process.cwd(), 'public/images/' + wayPoint);
    // console.log(wayPointPath)
    
    fs.exists(wayPointPath, function (exist) {
        if(!exist) {
            // if the file is not found, return 404
            res.statusCode = 404;
            res.end(`File ${indexPath} not found!`);
            return;
        }
        const dirs = fs.readdirSync(wayPointPath);
        const randomIndex = Math.floor( Math.random() * dirs.length );
        let rndImgPath = dirs[randomIndex];
        let fullImgPath = path.join('images/', wayPoint, rndImgPath);

        // console.log(fullImgPath);
        res.json({
            message: 'Retrieving random image path from server',
            data: fullImgPath
        });

    })
}

exports.getWaypointImgs = function(req, res){
    let wayPoint = req.query.wayPoint;
    let wayPointPath = path.join('public/images/' + wayPoint);
    
    fs.exists(wayPointPath, function (exist) {
        if(!exist) {
            // if the file is not found, return 404
            res.statusCode = 404;
            res.end(`File ${wayPointPath} not found!`);
            return;
        }
        const dirs = fs.readdirSync(wayPointPath);

        res.json({
            message: 'Retrieving all image paths of wayPoint from server',
            imgPathsArr: dirs,
            dirPath: 'images/' + wayPoint
        });

    })
}
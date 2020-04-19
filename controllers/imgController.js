const fs = require('fs');
const path = require('path');

exports.getWaypointRndImg = function(req, res){

    console.log(req.query)

    let waypoint = req.query.waypoint;
    let journeyName = req.query.journeyName;
    let markerId = req.query.markerId;
    let arrivalDate = req.query.arrivalDate;

    let folderPath = path.join(process.cwd(), 'public', 'images', journeyName, waypoint);
    
    fs.exists(folderPath, function (exist) {
        if(!exist) {
            // if the file is not found, return 404
            res.statusCode = 404;
            res.end(`File ${folderPath} not found!`);
        }else{
            const dirs = fs.readdirSync(folderPath);
            const randomIndex = Math.floor( Math.random() * dirs.length );
            let rndImgfile = dirs[randomIndex];
            let rndImgPath = path.join('/', 'images', journeyName, waypoint, rndImgfile);
    
            res.render('partials/infoWindow', {waypoint, journeyName, rndImgPath, markerId, arrivalDate });
        }

    })
}

exports.getWaypointImgs = function(req, res){
    console.log(req.query);

    let waypoint = req.query.waypoint;
    let journeyName = req.query.journeyName;
    let folderPath = path.join(process.cwd(), 'public', 'images', journeyName, waypoint);
    

    fs.exists(folderPath, function (exist) {
        if(!exist) {
            // if the file is not found, return 404
            res.statusCode = 404;
            res.end(`File ${folderPath} not found!`);
            return;
        }else{
            const dirs = fs.readdirSync(folderPath);
            const relFolderPath = path.join('images', journeyName, waypoint);

            res.json({
                message: 'Retrieving all image paths of waypoint from server',
                imgPathsArr: dirs,
                dirPath: relFolderPath
            });
        }

    })
}
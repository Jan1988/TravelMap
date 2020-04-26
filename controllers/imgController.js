const
    fs = require('fs'),
    path = require('path'),
    imgService = require('../services/imgService');


exports.getInfoWindow = function(req, res){

    let waypoint = req.query.waypoint;
    let journeyName = req.query.journeyName;
    let markerId = req.query.markerId;
    // let arrivalDate = waypoint.arrivalDate;
    // let arrivalDay = waypoint.arrivalDay;
    let folder = path.join(journeyName, waypoint.name);

    let rndImgPath = imgService.getRndImg(folder);
    console.log(rndImgPath);
    if(rndImgPath){
        res.render('partials/infoWindow', {waypoint, journeyName, rndImgPath, markerId});
    }else{
        res.statusCode = 404;
        res.end(`File ${folder} not found!`);
    }
}

exports.getWaypointImgs = function(req, res){
    console.log(req.query);

    let waypoint = req.query.waypoint;
    let journeyName = req.query.journeyName;
    let folderPath = path.join(process.cwd(), 'public', 'images', journeyName, waypoint.name);
    

    fs.exists(folderPath, function (exist) {
        if(!exist) {
            // if the file is not found, return 404
            res.statusCode = 404;
            res.end(`File ${folderPath} not found!`);
            return;
        }else{
            const dirs = fs.readdirSync(folderPath);
            const relFolderPath = path.join('images', journeyName, waypoint.name);

            res.json({
                message: 'Retrieving all image paths of waypoint from server',
                imgPathsArr: dirs,
                dirPath: relFolderPath
            });
        }

    })
}
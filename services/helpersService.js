Journey = require('../models/journeyModel');


exports.readWaypoints = function(req, res){
    // console.log(helpers.waypointData.length)
    let fullHtmlString = "";

    helpers.waypointData.forEach(function(subGroup, i){
        subGroup.forEach(function(waypointIn, j){
            let station = helpers.stations.find(function(station){
                return station.name === waypointIn.name;
            });

            let newDateString = ""
            if(station){
                let splitedDate = station.dateOfArrival.split("-")
                newDateString = "2017-" + splitedDate[1] + "-" + splitedDate[0];
            }
            
            let waypoint = {
                name: waypointIn.name,
                arrivalDate: newDateString,
                lat: waypointIn.lat,
                lng: waypointIn.lng,
                transport: waypointIn.id
            };

            // const rowPath = path.join(process.cwd(), 'views', 'partials', 'waypointRow.ejs' );
            // waypoint = {name: "", date: "", lat: "", lng: "", transport: ""};
            res.render('partials/waypointRow', {waypoint}, function(err, html){
                fullHtmlString += html;
            });

        })
    })
    
    res.send(fullHtmlString);
}

exports.formatDate = function(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

exports.formatDateGerman = function(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [day, month, year].join('.');
}


exports.millisToDays = function(millis){
    return millis/(1000*60*60*24);
}

exports.waypointData = [
        [
            {id:'', lat: 49.487459, lng: 8.466039, name: 'Mannheim'},
            {id:'TRAIN', lat: 50.110922, lng: 8.682127, name: 'Frankfurt'},
            ],
        [
            {id:'TRAIN', lat: 50.110922, lng: 8.682127, name: 'Frankfurt'},
            {id:'PLANE', lat: 59.9293951, lng: 30.36227199999996, name: 'Sankt Petersburg'}
            ],
        [

            {id:'PLANE', lat: 59.9293951, lng: 30.36227199999996, name: 'Sankt Petersburg'},
            {id:'TRAIN', lat: 55.755826, lng: 37.617300, name: 'Moskau'},
            {id:'TRAIN', lat: 56.838926, lng: 60.605703, name: 'Jekaterinburg'},
            {id:'TRAIN', lat: 52.286974, lng: 104.305018, name: 'Irkutsk'}
            ],
        [
            {id:'CAR', lat: 52.286974, lng: 104.305018, name: 'Irkutsk'},
            {id:'CAR', lat: 53.190595, lng: 107.330684, name: 'Olchon Island'},
            {id:'CAR', lat: 52.286974, lng: 104.305018, name: 'Irkutsk'}
            ],
        [
            {id:'CAR', lat: 52.286974, lng: 104.305018, name: 'Irkutsk'},
            {id:'TRAIN', lat: 47.886399, lng: 106.905744, name: 'Ulaanbataar'}
            ],
        [
            {id:'CAR', lat: 47.886399, lng: 106.905744, name: 'Ulaanbataar'},
            {id:'CAR', lat: 48.694456, lng: 112.000363, name: 'Dadal'},
            {id:'CAR', lat: 43.568521, lng: 104.414111, name: 'Dalandsadgad'},
            {id:'CAR', lat: 44.139831, lng: 103.715885, name: 'Bajandsag'},
            {id:'CAR', lat: 43.467781, lng: 103.514774, name: 'Bayandalai'},
            {id:'CAR', lat: 45.403397, lng: 103.949531, name: 'Ongiin Khiid'},
            {id:'CAR', lat: 47.190032, lng: 102.834045, name: 'Charkhorin'},
            {id:'CAR', lat: 47.491317, lng: 102.088619, name: 'Orkhon Waterfall'},
            // {id:'CAR', lat: 47.012855, lng: 102.255480, name: 'Tovkhon xiid'},
            {id:'CAR', lat: 47.319960, lng: 101.658994, name: 'Hot Springs Tsenkher'},
            {id:'CAR', lat: 48.186290, lng: 99.856925, name: 'Lake Terkhiin Tsagaan'},
            {id:'CAR', lat: 47.886399, lng: 106.905744, name: 'Ulaanbataar'},
            ],
        [
            {id:'CAR', lat: 47.886399, lng: 106.905744, name: 'Ulaanbataar'},
            {id:'TRAIN', lat: 43.715215, lng: 111.904105, name: 'Zamiin-Uud'}
            ],
        [
            {id:'TRAIN', lat: 43.653169, lng: 111.977943, name: 'Eren Hot'},
            {id:'TRAIN', lat: 39.904200, lng: 116.407396, name: 'Beijing'},
            {id:'TRAIN', lat: 37.205779, lng: 112.182798, name: 'Pingyao'},
            {id:'TRAIN', lat: 34.341574, lng: 108.939770, name: 'Xi\'an'},
            {id:'TRAIN', lat: 31.192209, lng: 121.334297, name: 'Shanghai'},
            {id:'TRAIN', lat: 31.329151, lng: 120.610641, name: 'Suzhou'},
            {id:'TRAIN', lat: 29.714699, lng: 118.337521, name: 'Huangshan'}
            ],
        [
            {id:'TRAIN', lat: 29.714699, lng: 118.337521, name: 'Huangshan'},
            {id:'CAR', lat: 30.081874, lng: 118.186276, name: 'Tangkou'},
            {id:'CAR', lat: 29.714699, lng: 118.337521, name: 'Huangshan'}
            ],
        [
            {id:'CAR', lat: 29.714699, lng: 118.337521, name: 'Huangshan'},
            {id:'TRAIN', lat: 25.234479, lng: 110.179953, name: 'Guilin'},
            {id:'TRAIN', lat: 24.778480, lng: 110.496593, name: 'Yangshuo'},
            {id:'TRAIN', lat: 22.543096, lng: 114.057865, name: 'Shenzhen'},
            {id:'TRAIN', lat: 22.279684, lng: 114.182431, name: 'Hong Kong'},
            {id:'TRAIN', lat: 22.308052, lng: 113.918384, name: 'Hong Kong Airport'}
            ],
        [
            {id:'TRAIN', lat: 22.308052, lng: 113.918384, name: 'Hong Kong Airport'},
            // {id:'PLANE', lat: 28.613939, lng: 77.209021, name: 'New Delhi'},
            {id:'PLANE', lat: 27.717245, lng: 85.323960, name: 'Katmandu'}
            ],
        [
            {id:'PLANE', lat: 27.717245, lng: 85.323960, name: 'Katmandu'},
            {id:'CAR', lat: 27.516357, lng: 86.584424, name: 'Phaplu'}
            ],
        [
            {id:'WALKING_NO_PATH', lat: 27.516357, lng: 86.584424, name: 'Phaplu'},
            {id:'WALKING_NO_PATH', lat: 27.644733, lng: 86.726779, name: 'Puiya'},
            {id:'WALKING_NO_PATH', lat: 27.740040, lng: 86.712555, name: 'Phakding'}

            ],
        [
            {id:'WALKING_NO_PATH', lat: 27.740040, lng: 86.712555, name: 'Phakding'},
            {id:'WALKING_NO_PATH', lat: 27.806874, lng: 86.713970, name: 'Namche Bazar'},
            {id:'WALKING', lat: 27.904549, lng: 86.871274, name: 'Chukhung'}
            ],
        [
            {id:'WALKING_NO_PATH', lat: 27.904549, lng: 86.871274, name: 'Chukhung'},
            {id:'WALKING_NO_PATH', lat: 27.929896, lng: 86.836261, name: 'Kongma La Pass'},
            {id:'WALKING_NO_PATH', lat: 27.948104, lng: 86.810285, name: 'Lobuche'}
            ],
        [
            {id:'WALKING_NO_PATH', lat: 27.948104, lng: 86.810285, name: 'Lobuche'},
            {id:'WALKING', lat: 27.980797, lng: 86.828921, name: 'Gorak Shep'},
            {id:'WALKING', lat: 27.995803, lng: 86.828427, name: 'Kala Patthar'},
            {id:'WALKING', lat: 28.002586, lng: 86.852760, name: 'Everest Base Camp'},
            {id:'WALKING', lat: 27.961791, lng: 86.751705, name: 'Cho La Pass'}
            ],
        [
            {id:'WALKING_NO_PATH', lat: 27.939794, lng: 86.773529, name: 'Zonglha'},
            {id:'WALKING_NO_PATH', lat: 27.961791, lng: 86.751705, name: 'Cho La Pass'},
            {id:'WALKING_NO_PATH', lat: 27.953468, lng: 86.694468, name: 'Gokyo'},
            {id:'WALKING_NO_PATH', lat: 27.945886, lng: 86.658826, name: 'Renjo La Pass'},
            {id:'WALKING_NO_PATH', lat: 27.831164, lng: 86.650307, name: 'Thame'},
            {id:'WALKING_NO_PATH', lat: 27.821332, lng: 86.590522, name: 'Thame Valley'}

            ],
        [
            {id:'WALKING_NO_PATH', lat: 27.831164, lng: 86.650307, name: 'Thame'},
            {id:'WALKING', lat: 27.806874, lng: 86.713970, name: 'Namche Bazar'},
            {id:'WALKING', lat: 27.687541, lng: 86.731711, name: 'Lukla'}
        ],
        [
            {id:'WALKING', lat: 27.687541, lng: 86.731711, name: 'Lukla'},
            {id:'PLANE', lat: 27.717245, lng: 85.323960, name: 'Katmandu'}
            ],
        [
            {id:'PLANE', lat: 27.717245, lng: 85.323960, name: 'Katmandu'},
            {id:'CAR', lat: 30.086928, lng: 78.267612, name: 'Rishikesh'},
            {id:'CAR', lat: 30.120858, lng: 78.317387, name: 'Geeta Ashram'}
            ],
        [
            {id:'CAR', lat: 30.086928, lng: 78.267612, name: 'Rishikesh'},
            {id:'TRAIN', lat: 27.176670, lng: 78.008075, name: 'Agra'},
            {id:'TRAIN', lat: 15.618060, lng: 73.843827, name: 'Tivim'}
            ],
        [
            {id:'TRAIN', lat: 15.618060, lng: 73.843827, name: 'Tivim'},
            {id:'CAR', lat: 15.600227, lng: 73.812498, name: 'Mapusa'},
            {id:'CAR', lat: 15.713758, lng: 73.697766, name: 'Querim Beach'},
            {id:'CAR', lat: 15.600227, lng: 73.812498, name: 'Mapusa'},
            {id:'CAR', lat: 19.097322, lng: 72.874460, name: 'Mumbai Airport'}
            ],
        [
            {id:'CAR', lat: 19.097322, lng: 72.874460, name: 'Mumbai Airport'},
            {id:'PLANE', lat: 50.110922, lng: 8.682127, name: 'Frankfurt'}
            ],
        [
            {id:'PLANE', lat: 50.110922, lng: 8.682127, name: 'Frankfurt'},
            {id:'CAR', lat: 49.667665, lng: 9.518123, name: 'Külsheim'}
        ]
    ];

    exports.stations = [
        {dateOfArrival: '05-07', lat: 49.487459, lng: 8.466039, name: 'Mannheim'},
        {dateOfArrival:'05-07', lat: 50.110922, lng: 8.682127, name: 'Frankfurt'},
        {dateOfArrival: '06-07', lat: 59.9293951, lng: 30.36227199999996, name: 'Sankt Petersburg'},
        {dateOfArrival: '11-07', lat: 55.755826, lng: 37.617300, name: 'Moskau'},
        {dateOfArrival: '15-07', lat: 56.838926, lng: 60.605703, name: 'Jekaterinburg'},
        {dateOfArrival: '19-07', lat: 52.286974, lng: 104.305018, name: 'Irkutsk'},
        {dateOfArrival: '23-07', lat: 53.190595, lng: 107.330684, name: 'Olchon Island'},
        {dateOfArrival:'30-07', lat: 47.886399, lng: 106.905744, name: 'Ulaanbataar'},
        {dateOfArrival:'04-08', lat: 48.694456, lng: 112.000363, name: 'Dadal'},
        {dateOfArrival:'07-08', lat: 43.568521, lng: 104.414111, name: 'Dalandsadgad'},
        {dateOfArrival:'09-08', lat: 44.139831, lng: 103.715885, name: 'Bajandsag'},
        {dateOfArrival:'10-08', lat: 43.467781, lng: 103.514774, name: 'Bayandalai'},
        {dateOfArrival:'12-08', lat: 45.403397, lng: 103.949531, name: 'Ongiin Khiid'},
        {dateOfArrival:'14-08', lat: 47.190032, lng: 102.834045, name: 'Charkhorin'},
        {dateOfArrival:'15-08', lat: 47.491317, lng: 102.088619, name: 'Orkhon Waterfall'},
        {dateOfArrival:'17-08', lat: 47.012855, lng: 102.255480, name: 'Tovkhon xiid'},
        {dateOfArrival:'17-08', lat: 47.319960, lng: 101.658994, name: 'Hot Springs Tsenkher'},
        {dateOfArrival:'18-08', lat: 48.186290, lng: 99.856925, name: 'Lake Terkhiin Tsagaan'},
        {dateOfArrival:'27-08', lat: 43.715215, lng: 111.904105, name: 'Zamiin-Uud'},
        {dateOfArrival:'999', lat: 43.653169, lng: 111.977943, name: 'Eren Hot'},
        {dateOfArrival:'28-08', lat: 39.904200, lng: 116.407396, name: 'Beijing'},
        {dateOfArrival:'06-09', lat: 37.205779, lng: 112.182798, name: 'Pingyao'},
        {dateOfArrival:'08-09', lat: 34.341574, lng: 108.939770, name: 'Xi an'},
        {dateOfArrival:'11-09', lat: 31.192209, lng: 121.334297, name: 'Shanghai'},
        {dateOfArrival:'16-09', lat: 31.329151, lng: 120.610641, name: 'Suzhou'},
        {dateOfArrival:'18-09', lat: 30.081874, lng: 118.186276, name: 'Yellow Mountains'},
        {dateOfArrival:'CAR', lat: 29.714699, lng: 118.337521, name: 'Huangshan'},
        {dateOfArrival:'20-09', lat: 25.234479, lng: 110.179953, name: 'Guilin'},
        {dateOfArrival:'21-09', lat: 24.778480, lng: 110.496593, name: 'Yangshuo'},
        {dateOfArrival:'99', lat: 22.543096, lng: 114.057865, name: 'Shenzhen'},
        {dateOfArrival:'26-09', lat: 22.279684, lng: 114.182431, name: 'Hongkong'},
        {dateOfArrival:'03-10', lat: 27.717245, lng: 85.323960, name: 'Katmandu'},
        {dateOfArrival:'09-10', lat: 27.516357, lng: 86.584424, name: 'Phaplu'},
        {dateOfArrival:'11-10', lat: 27.644733, lng: 86.726779, name: 'Puiya'},
        {dateOfArrival:'13-10', lat: 27.806874, lng: 86.713970, name: 'Namche Bazar'},
        {dateOfArrival:'15-10', lat: 27.854989, lng: 86.825890, name: 'Ama Dablam Base Camp'},
        {dateOfArrival:'17-10', lat: 27.904549, lng: 86.871274, name: 'Chukhung'},
        {dateOfArrival:'19-10', lat: 27.929896, lng: 86.836261, name: 'Kongma La Pass'},
        {dateOfArrival:'WALKING', lat: 27.948104, lng: 86.810285, name: 'Lobuche'},
        {dateOfArrival:'WALKING', lat: 27.980797, lng: 86.828921, name: 'Gorak Shep'},
        {dateOfArrival:'21-10', lat: 28.002586, lng: 86.852760, name: 'Everest Base Camp'},
        {dateOfArrival:'22-10', lat: 27.995803, lng: 86.828427, name: 'Kala Patthar'},
        {dateOfArrival:'23-10', lat: 27.961791, lng: 86.751705, name: 'Cho La Pass'},
        {dateOfArrival:'23-10', lat: 27.953468, lng: 86.694468, name: 'Gokyo'},
        {dateOfArrival:'25-10', lat: 27.945886, lng: 86.658826, name: 'Renjo La Pass'},
        {dateOfArrival:'999', lat: 27.831164, lng: 86.650307, name: 'Thame'},
        {dateOfArrival:'26-10', lat: 27.821332, lng: 86.590522, name: 'Thame Valley'},
        {dateOfArrival:'27-10', lat: 27.687541, lng: 86.731711, name: 'Lukla'},
        {dateOfArrival:'CAR', lat: 30.086928, lng: 78.267612, name: 'Rishikesh'},
        {dateOfArrival:'05-11', lat: 30.120858, lng: 78.317387, name: 'Geeta Ashram'},
        {dateOfArrival:'06-12', lat: 27.176670, lng: 78.008075, name: 'Agra'},
        {dateOfArrival:'999', lat: 15.618060, lng: 73.843827, name: 'Tivim'},
        {dateOfArrival:'10-12', lat: 15.600227, lng: 73.812498, name: 'Mapusa'},
        {dateOfArrival:'10-12', lat: 15.713758, lng: 73.697766, name: 'Querim Beach'},
        {dateOfArrival:'999', lat: 19.075984, lng: 72.877656, name: 'Mumbai'},
        {dateOfArrival:'18-12', lat: 19.097322, lng: 72.874460, name: 'Mumbai'},
        {dateOfArrival:'19-12', lat: 49.667665, lng: 9.518123, name: 'Külsheim'}
    ];

/**
 * Created by Külse on 29.01.2018.
 */

function mapFunctions(journey){

    const stations = journey.waypoints;


    var service = new google.maps.DirectionsService;
    var map = new google.maps.Map(document.getElementById('map'), {
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        fullscreenControl: false
    });

    var lineSymbolDotted = {
        path: google.maps.SymbolPath.CIRCLE,
        fillOpacity: 1,
        fillColor : "#ffffff",
        strokeWeight: 0,
        scale: 2
    };

    // Define a symbol using SVG path notation, with an opacity of 1.
    var lineSymbol = {
        path: 'M 50.20432,31.460178 H 99.807799 V 16.511377 1.5625486 H 111.97468 124.1416 V 479.9247 958.28687 H 111.97468 99.807799 v -16.4437 -16.44371 H 50.20432 0.60084187 V 891.0172 856.63491 H 50.20432 99.807799 v -34.38228 -34.3823 H 50.20432 0.60084187 V 753.48806 719.1058 H 50.20432 99.807799 V 684.72351 650.34123 H 50.20432 0.60084187 V 615.95894 581.57668 H 50.20432 99.807799 V 547.19439 512.81211 H 50.20432 0.60084187 v -34.3823 -34.38225 H 50.20432 99.807799 V 410.41271 376.77787 H 50.20432 0.60084187 V 341.64815 306.51844 H 50.20432 99.807799 v -34.3823 -34.38227 H 50.20432 0.60084187 V 203.37159 168.9893 H 50.20432 99.807799 V 135.35447 101.71963 H 50.20432 0.60084187 V 66.589904 31.460178 Z M 160.64226,1.5625486 h 12.16689 V 16.511377 31.460178 H 295.41397 418.01878 V 16.511377 1.5625486 h 13.10282 13.10279 V 479.9247 958.28687 H 431.1216 418.01878 v -16.45451 -16.45455 l -122.13687,0.38455 -122.13682,0.38456 -0.53132,16.06996 -0.53126,16.06999 H 160.57894 148.47537 V 479.9247 1.5625486 Z M 295.41397,168.9893 H 418.01878 V 135.35447 101.71963 H 295.41397 172.80915 v 33.63484 33.63483 z m 0,137.52914 h 122.60481 v -34.3823 -34.38227 H 296.66186 c -66.74632,0 -121.9185,0.44847 -122.6048,0.99658 -0.68636,0.54811 -1.24791,16.02015 -1.24791,34.38227 v 33.38572 z m 0,137.52912 h 122.60481 v -34.00859 -34.00854 l -122.13687,0.3628 c -67.17524,0.19956 -122.34742,0.36772 -122.60481,0.37371 -0.25737,0.006 -0.46795,15.14662 -0.46795,33.64577 v 33.63485 z m 0,137.52912 H 418.01878 V 547.19439 512.81211 H 296.66186 c -66.74632,0 -121.9185,0.44847 -122.6048,0.9966 -0.68636,0.54809 -1.24791,16.02014 -1.24791,34.38226 v 33.38571 z m 0,137.52912 H 418.01878 V 684.72351 650.34123 H 296.66186 c -66.74632,0 -121.9185,0.44848 -122.6048,0.99661 -0.68636,0.54809 -1.24791,16.02011 -1.24791,34.38225 v 33.38571 z m 0,137.52911 h 122.60481 v -34.38228 -34.3823 H 295.41397 172.80915 v 34.3823 34.38228 z M 478.8532,1.5625486 h 12.16688 V 16.511377 31.460178 h 44.95843 44.95839 l -0.50245,34.756011 -0.50245,34.755981 -44.45595,0.40079 -44.45597,0.40078 v 33.60777 33.60779 h 44.92393 44.9239 v 34.35522 34.35523 l -44.45595,0.40078 -44.45594,0.40076 -0.50308,34.00858 -0.50312,34.00857 h 44.99355 44.99353 l -0.50245,34.756 -0.50245,34.75599 -43.98799,0.29304 -43.98799,0.29305 -0.50308,33.71551 -0.50312,33.71553 h 44.95904 44.95905 v 34.35523 34.3552 l -44.45595,0.40076 -44.45594,0.4008 -0.50308,34.00855 -0.50312,34.00858 h 44.95904 44.95905 v 34.35523 34.35519 l -44.45595,0.40078 -44.45594,0.4008 -0.50308,34.00854 -0.50312,34.00858 h 44.95904 44.95905 v 34.35519 34.35523 l -44.45595,0.4008 -44.45594,0.40078 -0.50308,34.00854 -0.50312,34.00857 h 44.95904 44.95905 v 34.35522 34.35521 l -44.45595,0.4008 -44.45594,0.40078 -0.53129,16.06996 -0.53127,16.06999 H 478.78989 466.68632 V 479.9247 1.5625486 Z',
        fillOpacity: 1,
        scale: 0.008
    };

    //Icon and symbols created
    var markerIcon = {
        path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
        fillColor: '#ffffff',
        fillOpacity: 0.95,
        scale: 1.25,
        strokeColor: '#000000',
        strokeWeight: 1.5,
        anchor: new google.maps.Point(12, 24)
    };

    var airplaneSymbol = {
        path: 'M362.985,430.724l-10.248,51.234l62.332,57.969l-3.293,26.145 l-71.345-23.599l-2.001,13.069l-2.057-13.529l-71.278,22.928l-5.762-23.984l64.097-59.271l-8.913-51.359l0.858-114.43 l-21.945-11.338l-189.358,88.76l-1.18-32.262l213.344-180.08l0.875-107.436l7.973-32.005l7.642-12.054l7.377-3.958l9.238,3.65 l6.367,14.925l7.369,30.363v106.375l211.592,182.082l-1.496,32.247l-188.479-90.61l-21.616,10.087l-0.094,115.684',
        scale: 0.03,
        strokeOpacity: 1,
        strokeColor: 'black',
        strokeWeight: 1,
        // anchor: new google.maps.Point(650,300)
        anchor: new google.maps.Point(350,300)
    };


    // Zoom and center map automatically by stations (each station will be in visible map area)
    var lngs = stations.map(function(station) { return station.lng; });
    var lats = stations.map(function(station) { return station.lat; });
    map.fitBounds({
        west: Math.min.apply(null, lngs),
        east: Math.max.apply(null, lngs),
        north: Math.min.apply(null, lats),
        south: Math.max.apply(null, lats)
    });

    // Show stations on the map as markers
    for (var i = 0; i < stations.length; i++) {

        var marker = new google.maps.Marker({
            position: {lat: stations[i].lat, lng: stations[i].lng},
            map: map,
            icon: markerIcon,
            title: stations[i].name
        });
        marker.metadata = {id: i};
        attachSecretMessage(marker, stations[i].name, stations[i].arrivalDate);
    }

    let structStations = getStructStations();
    drawRoutes();


    
    ////////////////////////////
    //Functions//
    //////////////////////////
    function drawRoutes(){

        for (var i = 0; i < structStations.length; i++) {
            // Waypoints does not include first station (origin) and last station (destination)
            var origin = structStations[i][0];
            var destination = structStations[i][structStations[i].length - 1];
            var transport = destination.transport;

            var waypoints = [];

            for (var j = 1; j < structStations[i].length - 1; j++){
                waypoints.push({location: structStations[i][j]});
            }

            switch(transport){
                case 'CAR':
                    routeServiceDriving(origin, destination, waypoints);
                    break;
                case 'WALKING':
                    routeServiceWalking(origin, destination, waypoints);
                    break;
                case 'TRAIN':
                    routeServiceTrain(structStations[i]);
                    break;
                case 'PLANE':
                    routeServicePlane(structStations[i]);
                    break;
                case 'NO_PATH':
                    routeServiceWalkNoPath(structStations[i]);
                    break;
                default:
                    console.log('NOTHING');
            }
        }
    }

    function getStructStations(){
        // let origin = stations[0];
        // let destination;
        
        let structStations = [];
        let waypoints = [stations[0], stations[1]];
        let prevTransport = stations[1].transport;

        let prev = 1;
        for (var i = 2; i < stations.length; i++) {

            if(stations[i].transport === "-"){
                prev++;
                continue;
            }
            if(stations[i].transport !== prevTransport || waypoints.length >= 12){
                structStations.push(waypoints);
                waypoints = [];
                waypoints.push(stations[i-prev])
                prev = 1;
            }
            prevTransport = stations[i].transport;
            waypoints.push(stations[i]);
        }
        structStations.push(waypoints);

        console.log(structStations);
        return structStations;
    }

    // Service options
    function routeServiceDriving(origin, destination, waypoints){
        var service_options_CAR = {
            origin: origin,
            destination: destination,
            waypoints: waypoints,
            travelMode: 'DRIVING'
        };
        service.route(service_options_CAR, service_callback_CAR);
    }
    function routeServiceWalking(origin, destination, waypoints){
        var service_options_WALKING = {
            origin: origin,
            destination: destination,
            waypoints: waypoints,
            travelMode: 'WALKING'
        };
        service.route(service_options_WALKING, service_callback_WALKING);
    }
    function routeServiceTrain(path){
        var trainPath = new google.maps.Polyline({
            path: path,
            // Give the line an opacity of 0.
            // Repeat the symbol at intervals of 20 pixels to create the dashed effect.
            icons: [{
                icon: lineSymbolDotted,
                repeat: '12px',
            }],
            strokeOpacity: 1,
            strokeColor: "#000000",
            strokeWeight: 5,
            geodesic: true
        });
        trainPath.setMap(map);
    }
    function routeServicePlane(path){
        var flightPath = new google.maps.Polyline({
            path: path,
            icons: [{
                icon: airplaneSymbol,
                offset: '100%',
                zIndex: 99999999
                // repeat: '20px'
            }],
            strokeColor: "#431c5d",
            strokeOpacity: 0.4,
            strokeWeight: 4,
            geodesic: true
        });
        flightPath.setMap(map);
        animatePlane(flightPath);
    }
    function routeServiceWalkNoPath(path){
        var walkingPath = new google.maps.Polyline({
            path: path,
            // Give the line an opacity of 0.
            // Repeat the symbol at intervals of 20 pixels to create the dashed effect.
            strokeOpacity: 1,
            strokeColor: "#97743a",
            strokeWeight: 3,
            geodesic: true
        });
        walkingPath.setMap(map);
    }

    // Callback function to process service results
    function service_callback_CAR(response, status) {
        if (status != 'OK') {
            console.log('CAR Directions request failed due to ' + status);
            return;
        }
        var renderer = new google.maps.DirectionsRenderer;
        renderer.setMap(map);
        renderer.setOptions({
            suppressMarkers: true,
            preserveViewport: true,
            polylineOptions: {
                strokeColor: "#49412c",
                strokeWeight: 3,
                strokeOpacity: 0.85
            }
        });
        renderer.setDirections(response);
    };
    
    // Callback function to process service results
    function service_callback_WALKING(response, status) {
        if (status != 'OK') {
            console.log('WALKING Directions request failed due to ' + status);
            return;
        }
        var renderer = new google.maps.DirectionsRenderer;
        renderer.setMap(map);
        renderer.setOptions({
            suppressMarkers: true,
            preserveViewport: true,
            polylineOptions: {
                strokeColor: "#97743a",
                strokeWeight: 3,
                strokeOpacity: 1
            }
        });
        renderer.setDirections(response);
    };

    // Use the DOM setInterval() function to change the offset of the symbol
    // at fixed intervals.
    function animatePlane(line) {
        var count = 0;
        window.setInterval(function() {
            count = (count + 1) % 200;

            var icons = line.get('icons');
            icons[0].offset = (count / 2) + '%';
            line.set('icons', icons);
        }, 20);
    }

    function dateToDayOfTravel(dateOfTravel) {
        var year = 2017;
        var startDate = new Date(year, 7, 6, 0, 0, 0, 0);

        var splittedDateOfTravel = dateOfTravel.split("-")
        var waypointArrivalDate = new Date(year, splittedDateOfTravel[1], splittedDateOfTravel[0], 0, 0, 0 ,0);
        var dayOfTravel = parseInt(Math.floor((waypointArrivalDate - startDate)/86400000));

        return dayOfTravel;

    }

    function attachSecretMessage(marker, waypoint, arrivalDate) {
        
        var infowindow = new google.maps.InfoWindow({
            title: 'Gallery ' + waypoint
            // content: infoWindowContent

        });

        // function iwFadeIn() {
        //     infowindow.open(map, marker);
        //     var iw_container = $(".gm-style-iw").parent();
        //     iw_container.stop().hide();
        //     iw_container.fadeIn(1000);
        // }

        var dayOfTravel = dateToDayOfTravel(arrivalDate);

        marker.addListener('click', function () {

            $.ajax({
                type: "GET",
                url: '/api/rndImg',
                data: {
                    waypoint: waypoint,
                    journeyName: journey.name,
                    markerId: marker.metadata.id,
                    arrivalDate: arrivalDate,
                },
                success: function (data) {
                    let infoWindowContent = data

                    infowindow.setContent(infoWindowContent);
                    infowindow.open(map, marker);
    
                    let iw_container = $('#'+ marker.metadata.id).parent().parent().parent().parent();
                    iw_container.stop().hide();
                    iw_container.fadeIn(500);
                }
            })
        });

        google.maps.event.addListener(infowindow, 'domready', function() {

            // Reference to the DIV that wraps the bottom of infowindow
            var iwOuter = $('.gm-style-iw');

            /* Since this div is in a position prior to .gm-div style-iw.
             * We use jQuery and create a iwBackground variable,
             * and took advantage of the existing reference .gm-style-iw for the previous div with .prev().
             */
            var iwBackground = iwOuter.prev();
            iwBackground.parent().css({
                'pointer-events' : 'none'
            });
            // Removes background shadow DIV
            iwBackground.children(':nth-child(2)').css({
                'display' : 'none'
            });

            // Removes white background DIV
            iwBackground.children(':nth-child(4)').css({'display' : 'none'});

//            // Moves the infowindow 115px to the right.
//            iwOuter.parent().parent().css({left: '115px'});

            // Moves the shadow of the arrow 76px to the left margin.
            // iwBackground.children(':nth-child(1)').attr('style', function(i,s){ return s + 'left: 76px !important;'});

            // Moves the arrow 76px to the left margin.
            // iwBackground.children(':nth-child(3)').attr('style', function(i,s){ return s + 'left: 76px !important;'});

            // Changes the desired tail position.
            // var tailHeight = iwBackground.children(':nth-child(3)').css('top');
            // iwBackground.children(':nth-child(3)').css({
            //    top:  tailHeight
            // });

            iwBackground.children(':nth-child(3)').find('div').children().css({
                'z-index' : '1'
            });
            iwBackground.children(':nth-child(3)').children(':first-child').children(0).css({
                borderLeft: '2px solid black',
                'box-shadow': 'none',
            });
            iwBackground.children(':nth-child(3)').children(':last-child').children(0).css({
                borderRight: '2px solid black',
                'box-shadow': 'none',
            });
            // Reference to the div that groups the close button elements.
            var $iwCloseBtn = iwOuter.find(">button");
            var $iwCloseBtnImg = $iwCloseBtn.find("img");
            let $iwCloseBtnParent = $iwCloseBtn.parent()

            $iwCloseBtnParent.css({overflow: "unset"});
            // Apply the desired effect to the close button
            $iwCloseBtn.css({
                background: "white",
                top: "-10px",
                right: "-10px",
                width: "18px",
                height: "18px",
                borderRadius: "25px",
                border: "1px solid black"
            });
            $iwCloseBtn.removeClass("gm-ui-hover-effect");
            $iwCloseBtn.addClass("customCloseBtn");
            $iwCloseBtnImg.css({margin: "auto"});
            // // Apply the desired effect to the close button
            // iwCloseBtn.addClass('infoWindowButtonClose');
            // iwCloseBtn.children().remove();

            // If the content of infowindow not exceed the set maximum height, then the gradient is removed.
            if($('.iw-content').height() < 140){
                $('.iw-bottom-gradient').css({display: 'none'});
            }

            // // The API automatically applies 0.7 opacity to the button after the mouseout event. This function reverses this event to the desired value.
            // iwCloseBtn.mouseout(function(){
            //     $(this).css({opacity: '1'});
            // });
            //
            // iwCloseBtn.remove();
        });
    }
}


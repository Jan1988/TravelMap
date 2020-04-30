/**
 * Created by Külse on 29.01.2018.
 */

function mapFunctions(journey){

    const stations = journey.waypoints;
    markerColor = {
        active: '#cccccc',
        inactive: '#cccccc',
        hovered: '#ffffff',
    }
    let markerWasClicked = false;

    var service = new google.maps.DirectionsService;
    var map = new google.maps.Map(document.getElementById('map'), {
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        fullscreenControl: false,
        mapTypeControl: false
    });

    var mapTypeControl = document.getElementById('mapTypeButtonsWrapper');
    var backButton = document.getElementById('backButton');
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(mapTypeControl);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(backButton);


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
        fillColor: markerColor.active,
        fillOpacity: 0.95,
        scale: 1.25,
        strokeColor: '#000000',
        strokeWeight: 1.0,
        anchor: new google.maps.Point(12, 24)
    };
    var markerIconHovered = {
        path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
        fillColor: markerColor.hovered,
        fillOpacity: 1.0,
        scale: 1.25,
        strokeColor: '#000000',
        strokeWeight: 1.0,
        anchor: new google.maps.Point(12, 24)
    };
    var markerIconInactive = {
        path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
        fillColor: markerColor.inactive,
        fillOpacity: .85,
        scale: .9,
        strokeColor: '#000000',
        strokeWeight: 0.5,
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
    
    
    var shipSymbolOne = {
        path: 'M509.548,455.464c-3.624-4.168-9.94-4.608-14.108-0.984c-10.663,9.271-20.531,18.883-34.522,22.75 c-15.553,4.298-30.334,0.906-44.41-6.132l52.079-175.224c1.296-4.359-0.514-9.044-4.403-11.401l-48.183-29.195v-85.253 c0-5.522-4.477-10-10-10h-20v-30c0-5.522-4.477-10-10-10h-31.5v-30c0-5.522-4.477-10-10-10h-48.5v-70c0-5.522-4.477-10-10-10h-40 c-5.523,0-10,4.478-10,10v70h-48.5c-5.523,0-10,4.478-10,10v30h-31.5c-5.523,0-10,4.478-10,10v30h-20c-5.523,0-10,4.478-10,10 v85.253l-48.182,29.194c-3.89,2.357-5.699,7.042-4.403,11.401c0,0,51.951,174.79,51.973,174.866 c-0.887-2.984-16.889-4.949-19.718-5.315c-29.117-3.768-51.258,10.818-72.232,29.055c-4.168,3.624-4.608,9.939-0.985,14.107 c3.459,3.978,9.896,4.646,14.107,0.985c21.608-18.784,45.969-33.103,74.559-18.806c25.864,12.931,52.636,18.476,79.575,4.3 c21.722-11.434,42.684-21.307,66.93-9.763l24.927,11.87c21.326,10.156,45.674,9.922,66.799-0.642 c13.018-6.509,26.249-15.171,41.119-16.193c14.576-1.001,28.66,4.426,41.467,10.835c16.919,8.46,36.726,10.15,54.894,4.971 c16.735-4.771,28.914-15.429,41.731-26.573C512.731,465.947,513.171,459.632,509.548,455.464z M396.001,180.025v63.135 l-104.198-63.135H396.001z M246.001,20.025h20v60h-20V20.025z M187.501,100.025h137v20h-137V100.025z M116.001,180.025h104.198 L116.001,243.16V180.025z M246.001,467.14c0.002-1.777-14.255-5.055-16.12-5.459c-17.404-3.767-36.088-1.375-51.866,6.93 c-11.448,6.025-22.493,13.054-35.586,14.74c-0.024,0.003-0.048,0.006-0.072,0.009c-7.65,0.93-15.48,0.367-22.884-1.792 L64.786,297.577l181.215-109.8C246.001,187.777,246.001,467.129,246.001,467.14z M146.001,160.025v-20h220v20H146.001z M398.023,463.084c0.111-3.094-28.039-3.066-29.925-2.867c-17.358,1.836-32.374,10.767-47.692,18.426 c-18.096,9.048-36.716,6.447-54.405-1.98V187.777l181.215,109.8L398.023,463.084z',
        scale: 0.03,
        strokeOpacity: 1,
        strokeColor: 'black',
        strokeWeight: 1.0,
        rotation: 180,
        anchor: new google.maps.Point(330,300)
    }

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
            title: stations[i].name,
        });
        if(stations[i].hasImages){
            marker.setIcon(markerIcon);
            marker.setClickable(true);
            marker.addListener('mouseover', function() {
                if(this.metadata.iwOpen) return;
                this.setIcon(markerIconHovered);
            });
            marker.addListener('mouseout', function() {
                if(this.metadata.iwOpen) return;
                this.setIcon(markerIcon);
            });
        }else{
            marker.setIcon(markerIconInactive);
            marker.setClickable(false);
        }

        marker.metadata = {
            id: i,
            iwOpen:false,
        };
        attachSecretMessage(marker, stations[i]);
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
                case 'SHIP':
                    routeServiceShip(structStations[i]);
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
    function routeServiceShip(path){
        var shipRoute = new google.maps.Polyline({
            path: path,
            icons: [
                {
                    icon: shipSymbolOne,
                    offset: '100%',
                    zIndex: 99999999
                },
            ],
            strokeColor: "#429ef5",
            strokeOpacity: 0.6,
            strokeWeight: 4,
            geodesic: true
        });
        shipRoute.setMap(map);
        animatePlane(shipRoute);
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
    function service_callback_SHIP(response, status) {
        if (status != 'OK') {
            console.log('SHIP Directions request failed due to ' + status);
            return;
        }
        var renderer = new google.maps.DirectionsRenderer;
        renderer.setMap(map);
        renderer.setOptions({
            suppressMarkers: true,
            preserveViewport: true,
            polylineOptions: {
                strokeColor: "#429ef5",
                strokeWeight: 3,
                strokeOpacity: 1,
                strokeOpacity: 0.4,
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

    // function dateToDayOfTravel(dateOfTravel) {
    //     var year = 2017;
    //     var startDate = new Date(year, 7, 6, 0, 0, 0, 0);

    //     var splittedDateOfTravel = dateOfTravel.split("-")
    //     var waypointArrivalDate = new Date(year, splittedDateOfTravel[1], splittedDateOfTravel[0], 0, 0, 0 ,0);
    //     var dayOfTravel = parseInt(Math.floor((waypointArrivalDate - startDate)/86400000));

    //     return dayOfTravel;

    // }

    function attachSecretMessage(marker, waypoint) {
        var infoWindow = new google.maps.InfoWindow({
            title: 'Gallery ' + waypoint.name
            // content: infoWindowContent

        });
        infoWindow.addListener('closeclick', function(){
            marker.setIcon(markerIcon);
            marker.metadata.iwOpen = false;
        })

        marker.addListener('click', function () {
            this.setIcon(markerIconHovered);
            this.metadata.iwOpen = true;
            
            $.ajax({
                type: "GET",
                url: '/api/rndImg',
                data: {
                    waypoint: waypoint,
                    journeyName: journey.name,
                    markerId: marker.metadata.id,
                    // arrivalDate: arrivalDate,
                    // arrivalDay: arrivalDay,
                },
                success: function (data) {
                    let infoWindowContent = data

                    infoWindow.setContent(infoWindowContent);
                    infoWindow.open(map, marker);
    
                    let iw_container = $('#'+ marker.metadata.id).parent().parent().parent().parent();
                    iw_container.stop().hide();
                    iw_container.fadeIn(500);
                }
            })
        });

        google.maps.event.addListener(infoWindow, 'domready', function() {

            // Reference to the DIV that wraps the bottom of infoWindow
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

//            // Moves the infoWindow 115px to the right.
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

            // If the content of infoWindow not exceed the set maximum height, then the gradient is removed.
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

    this.setMapType = function(Id){
        map.setMapTypeId(Id);
    }

    google.maps.event.addListener(map, 'tilesloaded', function(){

        
    });
}


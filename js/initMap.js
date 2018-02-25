/**
 * Created by Külse on 29.01.2018.
 */
function initMap() {

    var jsonMyWayPoints = {
        'Mannheim': [49.487459, 8.466039, 'Sankt Petersburg', 'P'],
        'Sankt Petersburg': [59.9293951, 30.36227199999996, 'Moskau', 'T'],
        'Moskau': [55.755826, 37.617300, 'Jekaterinburg', 'T'],
        'Jekaterinburg': [56.838926, 60.605703, 'Irkutsk_1', 'T'],
        'Irkutsk_1': [52.286974, 104.305018, 'Khuzhir', 'T'],
        'Khuzhir': [53.190595, 107.330684, 'Irkutsk_2', 'T'],
        'Irkutsk_2': [52.286974, 104.305018, 'Ulaanbataar_1', 'T'],
        'Ulaanbataar_1': [47.886399, 106.905744, 'Dadal', 'C'],
        'Dadal': [49.020271, 111.621465, 'Ulaanbataar_2', 'C'],
        'Ulaanbataar_2': [47.886399, 106.905744, 'Dalandsadgad', 'C']
    };

    var locations = [
        ['Mannheim', 49.487459, 8.466039, 1, 'Sankt Petersburg', 'P'],
        ['Sankt Petersburg', 59.9293951, 30.36227199999996, 1, 'Moskau', 'T'],
        ['Moskau', 55.755826, 37.617300, 6, 'Jekaterinburg', 'T'],
        ['Jekaterinburg', 56.838926, 60.605703, 10, 'Irkutsk_1', 'T'],
        ['Irkutsk', 52.286974, 104.305018, 14, 'Khuzhir', 'C'],
        ['Khuzhir', 53.190595, 107.330684, 16, 'Irkutsk', 'C'],
        ['Irkutsk', 52.286974, 104.305018, 20, 'Ulaanbataar', 'T'],
        ['Ulaanbataar', 47.886399, 106.905744, 23, 'Dadal', 'C'],
        ['Dadal', 49.020271, 111.621465, 29, 'Ulaanbataar', 'C'],
        ['Ulaanbataar', 47.886399, 106.905744, 31, 'Dalandsadgad', 'C'],
        ['HongKong', 22.396428, 114.109497, 'X', 'Katmandu', 'P'],
        ['Katmandu', 27.717245, 85.323960, 'X', 'Lukla', 'C']
    ];


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: new google.maps.LatLng(locations[0][1], locations[0][2])
        // styles: mapStyle,
        // mapTypeId: google.maps.MapTypeId.HYBRID
    });



    // Instantiate a directions service.
    var directionsService = new google.maps.DirectionsService();
    var renderArray = [];

    var markerIcon = {
        path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
        fillColor: '#e25a00',
        fillOpacity: 0.95,
        scale: 1.5,
        strokeColor: '#000000',
        strokeWeight: 1.5,
        anchor: new google.maps.Point(12, 24)
    };

    var marker;

    for (var j = 0; j < locations.length-1; j++) {

        var originName = locations[j][0];
        var originLatLong = new google.maps.LatLng(locations[j][1], locations[j][2]);
        var dayOfTravel = locations[j][3];
        var destinationName = locations[j][4];
        var destinationLatLong = new google.maps.LatLng(locations[j+1][1], locations[j+1][2]);
        var travelMode = locations[j][5];


        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[j][1], locations[j][2]),
            map: map,
            icon: markerIcon,
            title: originName
        });
        attachSecretMessage(marker, originName, dayOfTravel);

        var request = {};

        if (travelMode == 'C'){

            request = {
                origin:originLatLong,
                destination: destinationLatLong,
                travelMode: google.maps.TravelMode.DRIVING
            };

            directionsService.route(request, directionResults1);

            function directionResults1(result, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    renderArray[j] = new google.maps.DirectionsRenderer();
                    renderArray[j].setMap(map);

                    renderArray[j].setOptions({
                        suppressMarkers: true,
                        suppressInfoWindows: true,
                        preserveViewport: true,
                        polylineOptions: {
                            strokeColor: "#82ff2d",
                            strokeWeight: 4
                        }
                    });

                    // Use this new renderer with the result
                    renderArray[j].setDirections(result);
                }
            }
        }else if(travelMode == 'T'){

            request = {
                origin: originLatLong,
                destination: destinationLatLong,
                travelMode: google.maps.TravelMode.TRANSIT
            };

            directionsService.route(request, directionResults2);

            function directionResults2(result, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    renderArray[j] = new google.maps.DirectionsRenderer();
                    renderArray[j].setMap(map);

                    renderArray[j].setOptions({
                        suppressMarkers: true,
                        suppressInfoWindows: true,
                        preserveViewport: true,
                        polylineOptions: {
                            strokeColor: "black",
                            strokeWeight: 4
                        }
                    });

                    // Use this new renderer with the result
                    renderArray[j].setDirections(result);
                }
            }
        }else if(travelMode == 'P'){

            var lineSymbol = {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 8,
                strokeColor: '#393'
            };

            var airplaneSymbol = {
                path: 'M362.985,430.724l-10.248,51.234l62.332,57.969l-3.293,26.145 l-71.345-23.599l-2.001,13.069l-2.057-13.529l-71.278,22.928l-5.762-23.984l64.097-59.271l-8.913-51.359l0.858-114.43 l-21.945-11.338l-189.358,88.76l-1.18-32.262l213.344-180.08l0.875-107.436l7.973-32.005l7.642-12.054l7.377-3.958l9.238,3.65 l6.367,14.925l7.369,30.363v106.375l211.592,182.082l-1.496,32.247l-188.479-90.61l-21.616,10.087l-0.094,115.684',
                scale: 0.04,
                strokeOpacity: 1,
                strokeColor: 'black',
                strokeWeight: 1,
                // anchor: new google.maps.Point(650,300)
                anchor: new google.maps.Point(350,300)
            };


            var flightPath = new google.maps.Polyline({
                path:  [originLatLong, destinationLatLong],
                icons: [{
                    icon: airplaneSymbol,
                    offset: '100%',
                    zIndex:99999999
                    // repeat: '20px'
                }],

                strokeColor: "#8c79ff",
                strokeOpacity: 0.3,
                strokeWeight: 4,
                geodesic: true
            });
            flightPath.setMap(map);
        }

        animatePlane(flightPath);

    }




    function attachSecretMessage(marker, wayPoint, dayOfTravel) {
        console.log(wayPoint);

        // InfoWindow content
        var infoWindowContent = '<img class="iw-prev-img" src="./images/test_1.JPG">' +
            '<div class="iw-description-container">' +
            '<div class="iw-day-place-wrapper">' +
            '<div class="iw-day">Day '+ dayOfTravel + '</div>' +
            '<div class="iw-place">' + wayPoint + '</div>' +
            '</div>' +
            '<div class="iw-view-gallery-wrapper">' +
            '<div class="iw-view-gallery-txt">View Gallery </div>' +
            '<img class="iw-view-gallery-btn" src="./images/icons/Play_Button_2.png" onclick="openModal(1)">' +
            '</div>' +
            '</div>';


        var infowindow = new google.maps.InfoWindow({
            title: 'Gallery ' + wayPoint,
            content: infoWindowContent

        });



        marker.addListener('click', function () {

            infowindow.open(marker.get('map'), marker);
        });

        google.maps.event.addListener(infowindow, 'domready', function() {

            // Reference to the DIV that wraps the bottom of infowindow
            var iwOuter = $('.gm-style-iw');

            /* Since this div is in a position prior to .gm-div style-iw.
             * We use jQuery and create a iwBackground variable,
             * and took advantage of the existing reference .gm-style-iw for the previous div with .prev().
             */
            var iwBackground = iwOuter.prev();

            // Removes background shadow DIV
            iwBackground.children(':nth-child(2)').css({'display' : 'none'});

            // Removes white background DIV
            iwBackground.children(':nth-child(4)').css({'display' : 'none'});

//            // Moves the infowindow 115px to the right.
//            iwOuter.parent().parent().css({left: '115px'});

            // Moves the shadow of the arrow 76px to the left margin.
            iwBackground.children(':nth-child(1)').attr('style', function(i,s){ return s + 'left: 76px !important;'});

            // Moves the arrow 76px to the left margin.
            iwBackground.children(':nth-child(3)').attr('style', function(i,s){ return s + 'left: 76px !important;'});

            // Changes the desired tail shadow color.
            iwBackground.children(':nth-child(3)').find('div').children().css({'box-shadow': 'rgba(72, 181, 233, 0.6) 0px 1px 6px', 'z-index' : '1'});

            // Reference to the div that groups the close button elements.
            var iwCloseBtn = iwOuter.next();

            // Apply the desired effect to the close button
            iwCloseBtn.css({width:'17px', height:'17px', opacity: '1', right: '38px', top: '3px', border: '2px solid #44433e', 'border-radius': '0px', 'box-shadow': '0 0 5px #44433e'});

            // If the content of infowindow not exceed the set maximum height, then the gradient is removed.
            if($('.iw-content').height() < 140){
                $('.iw-bottom-gradient').css({display: 'none'});
            }

            // The API automatically applies 0.7 opacity to the button after the mouseout event. This function reverses this event to the desired value.
            iwCloseBtn.mouseout(function(){
                $(this).css({opacity: '1'});
            });
        });
    }

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
}
/**
 * Created by Külse on 29.01.2018.
 */
function initMap() {
    
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


    // var stationsNoPath = [
    //     [
    //         {id:'', lat: 49.487459, lng: 8.466039, name: 'Mannheim'},
    //         {id:'CAR', lat: 49.006889, lng: 8.403653, name: 'Karlsruhe'},
    //         {id:'CAR', lat: 47.749531, lng: 7.339750, name: 'Mulhouse'},
    //         {id: 'CAR', lat: 47.717269, lng: 7.138037, name: 'Rastätte Belfort'},
    //         {id:'CAR', lat: 47.510237, lng: 6.797756, name: 'Montbeliard'}
    //     ],
    //     [
    //
    //         {id:'CAR', lat: 47.510237, lng: 6.797756, name: 'Montbeliard'},
    //         {id:'TRAIN', lat: 45.757814, lng: 4.832011, name: 'Lyon'}
    //     ],
    //     [
    //
    //         {id:'TRAIN', lat: 45.757814, lng: 4.832011, name: 'Lyon'},
    //         {id: 'CAR', lat: 41.382894, lng: 2.177432, name: 'Barcelona'},
    //         {id: 'CAR', lat: 38.540626, lng: -0.129093, name: 'Benidorm'},
    //         {id: 'CAR', lat: 38.608351, lng: -0.272259, name: 'Sella'},
    //     ],
    //     [
    //         {id: 'CAR', lat: 41.382894, lng: 2.177432, name: 'Barcelona'},
    //         {id: 'CAR', lat: 43.604462, lng: 1.444247, name: 'Toulouse'},
    //     ],
    //     [
    //         {id: 'CAR', lat: 43.604462, lng: 1.444247, name: 'Toulouse'},
    //         {id: 'TRAIN', lat: 48.856697, lng: 2.351462, name: 'Paris'},
    //     ],
    //     [
    //         {id: 'TRAIN', lat: 48.856697, lng: 2.351462, name: 'Paris'},
    //         {id:'CAR', lat: 49.487459, lng: 8.466039, name: 'Mannheim'},
    //     ]
    // ];
    // var stations = [
    //     {dateOfArrival: '05-07', lat: 49.487459, lng: 8.466039, name: 'Mannheim'},
    //     {dateOfArrival:'', lat: 49.006889, lng: 8.403653, name: 'Karlsruhe'},
    //     {dateOfArrival: '05-07', lat: 48.563011, lng: 7.956619, name: 'Raststätte Renchtal'},
    //     {dateOfArrival: '05-07', lat: 48.308655, lng: 7.79189, name: 'Raststätte Mahlberg'},
    //     {dateOfArrival: '05-07', lat: 47.814276, lng: 7.553894, name: 'Rastätte Neuendorf'},
    //     {dateOfArrival:'', lat: 47.749531, lng: 7.339750, name: 'Mulhouse'},
    //     {dateOfArrival: '05-07', lat: 47.717269, lng: 7.138037, name: 'Rastätte Belfort'},
    //     {dateOfArrival: '05-07', lat: 47.510237, lng: 6.797756, name: 'Montbeliard'},
    //     {dateOfArrival: '05-07', lat: 45.757814, lng: 4.832011, name: 'Lyon'},
    //     {dateOfArrival: '05-07', lat: 41.382894, lng: 2.177432, name: 'Barcelona'},
    //     {dateOfArrival: '05-07', lat: 38.540626, lng: -0.129093, name: 'Benidorm'},
    //     {dateOfArrival: '', lat: 38.608351, lng: -0.272259, name: 'Sella'},
    //     {dateOfArrival: '', lat: 43.604462, lng: 1.444247, name: 'Toulouse'},
    //     {dateOfArrival: '', lat: 48.856697, lng: 2.351462, name: 'Paris'},
    //     {dateOfArrival: '05-07', lat: 49.242443, lng: 3.919637, name: 'Station Shell'},
    //     {dateOfArrival: '05-07', lat: 49.1322341, lng: 6.6606211, name: 'Station BP'},
    // ];


    var stationsNoPath = [
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

    var stations = [
        {dateOfArrival: '05-07', lat: 49.487459, lng: 8.466039, name: 'Mannheim'},
        // {dateOfArrival:'TRAIN', lat: 50.110922, lng: 8.682127, name: 'Frankfurt'},
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
        // {dateOfArrival:'999', lat: 43.653169, lng: 111.977943, name: 'Eren Hot'},
        {dateOfArrival:'28-08', lat: 39.904200, lng: 116.407396, name: 'Beijing'},
        {dateOfArrival:'06-09', lat: 37.205779, lng: 112.182798, name: 'Pingyao'},
        {dateOfArrival:'08-09', lat: 34.341574, lng: 108.939770, name: 'Xi an'},
        {dateOfArrival:'11-09', lat: 31.192209, lng: 121.334297, name: 'Shanghai'},
        {dateOfArrival:'16-09', lat: 31.329151, lng: 120.610641, name: 'Suzhou'},
        {dateOfArrival:'18-09', lat: 30.081874, lng: 118.186276, name: 'Yellow Mountains'},
        // {dateOfArrival:'CAR', lat: 29.714699, lng: 118.337521, name: 'Huangshan'},
        {dateOfArrival:'20-09', lat: 25.234479, lng: 110.179953, name: 'Guilin'},
        {dateOfArrival:'21-09', lat: 24.778480, lng: 110.496593, name: 'Yangshuo'},
        // {dateOfArrival:'99', lat: 22.543096, lng: 114.057865, name: 'Shenzhen'},
        {dateOfArrival:'26-09', lat: 22.279684, lng: 114.182431, name: 'Hongkong'},
        {dateOfArrival:'03-10', lat: 27.717245, lng: 85.323960, name: 'Katmandu'},
        {dateOfArrival:'09-10', lat: 27.516357, lng: 86.584424, name: 'Phaplu'},
        {dateOfArrival:'11-10', lat: 27.644733, lng: 86.726779, name: 'Puiya'},
        {dateOfArrival:'13-10', lat: 27.806874, lng: 86.713970, name: 'Namche Bazar'},
        {dateOfArrival:'15-10', lat: 27.854989, lng: 86.825890, name: 'Ama Dablam Base Camp'},
        {dateOfArrival:'17-10', lat: 27.904549, lng: 86.871274, name: 'Chukhung'},
        {dateOfArrival:'19-10', lat: 27.929896, lng: 86.836261, name: 'Kongma La Pass'},
        // {dateOfArrival:'WALKING', lat: 27.948104, lng: 86.810285, name: 'Lobuche'},
        // {dateOfArrival:'WALKING', lat: 27.980797, lng: 86.828921, name: 'Gorak Shep'},
        {dateOfArrival:'21-10', lat: 28.002586, lng: 86.852760, name: 'Everest Base Camp'},
        {dateOfArrival:'22-10', lat: 27.995803, lng: 86.828427, name: 'Kala Patthar'},
        {dateOfArrival:'23-10', lat: 27.961791, lng: 86.751705, name: 'Cho La Pass'},
        {dateOfArrival:'23-10', lat: 27.953468, lng: 86.694468, name: 'Gokyo'},
        {dateOfArrival:'25-10', lat: 27.945886, lng: 86.658826, name: 'Renjo La Pass'},
        // {dateOfArrival:'999', lat: 27.831164, lng: 86.650307, name: 'Thame'},
        {dateOfArrival:'26-10', lat: 27.821332, lng: 86.590522, name: 'Thame Valley'},
        {dateOfArrival:'27-10', lat: 27.687541, lng: 86.731711, name: 'Lukla'},
        // {dateOfArrival:'CAR', lat: 30.086928, lng: 78.267612, name: 'Rishikesh'},
        {dateOfArrival:'05-11', lat: 30.120858, lng: 78.317387, name: 'Geeta Ashram'},
        {dateOfArrival:'06-12', lat: 27.176670, lng: 78.008075, name: 'Agra'},
        // {dateOfArrival:'999', lat: 15.618060, lng: 73.843827, name: 'Tivim'},
        {dateOfArrival:'10-12', lat: 15.600227, lng: 73.812498, name: 'Mapusa'},
        {dateOfArrival:'10-12', lat: 15.713758, lng: 73.697766, name: 'Querim Beach'},
        // {dateOfArrival:'999', lat: 19.075984, lng: 72.877656, name: 'Mumbai'}
        {dateOfArrival:'18-12', lat: 19.097322, lng: 72.874460, name: 'Mumbai'},
        {dateOfArrival:'19-12', lat: 49.667665, lng: 9.518123, name: 'Külsheim'}
    ];


    // Zoom and center map automatically by stations (each station will be in visible map area)
    var lngs = stations.map(function(station) { return station.lng; });
    var lats = stations.map(function(station) { return station.lat; });
    map.fitBounds({
        west: Math.min.apply(null, lngs),
        east: Math.max.apply(null, lngs),
        north: Math.min.apply(null, lats),
        south: Math.max.apply(null, lats)
    });

    var stationName = "";
    var dateOfArrival = 01-01;

    // Show stations on the map as markers
    for (var i = 0; i < stations.length; i++) {
        dateOfArrival = stations[i].dateOfArrival;
        stationName = stations[i].name;
        if (!stationName)
            continue;
        var marker = new google.maps.Marker({
            position: stations[i],
            map: map,
            icon: markerIcon,
            title: stationName
        });
        marker.metadata = {id: i};
        attachSecretMessage(marker, stationName, dateOfArrival);
    }

    // Callback function to process service results
    var service_callback_CAR = function(response, status) {
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
    var service_callback_WALKING = function(response, status) {
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

    for (var i = 0; i < stationsNoPath.length; i++) {
        // Waypoints does not include first station (origin) and last station (destination)
        var origin = stationsNoPath[i][0];
        var destination = stationsNoPath[i][stationsNoPath[i].length - 1];
        var destinationTravelMode = destination.id;

        var waypoints = [];

        for (var j = 1; j < stationsNoPath[i].length - 1; j++)
            waypoints.push({location: stationsNoPath[i][j]});



        if (destinationTravelMode == 'CAR'){
            // Service options
            var service_options_CAR = {
                origin: origin,
                destination: destination,
                waypoints: waypoints,
                travelMode: 'DRIVING'
            };
            service.route(service_options_CAR, service_callback_CAR);


        }else if(destinationTravelMode == 'WALKING') {
            var service_options_WALKING = {
                origin: origin,
                destination: destination,
                waypoints: waypoints,
                travelMode: 'WALKING'
            };
            service.route(service_options_WALKING, service_callback_WALKING);

        }else if('TRAIN'==destinationTravelMode){
            var trainPath = new google.maps.Polyline({

                path:  stationsNoPath[i],
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

        }else if ('WALKING_NO_PATH'==destinationTravelMode){
            var walkingPath = new google.maps.Polyline({

                path:  stationsNoPath[i],
                // Give the line an opacity of 0.
                // Repeat the symbol at intervals of 20 pixels to create the dashed effect.
                strokeOpacity: 1,
                strokeColor: "#97743a",
                strokeWeight: 3,
                geodesic: true
            });
            walkingPath.setMap(map);

        }else if(destinationTravelMode == 'PLANE') {
            var flightPath = new google.maps.Polyline({
                path:stationsNoPath[i],
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

        }else {
            console.log('NOTHING');
        }

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

    function dateToDayOfTravel(dateOfTravel) {
        var year = 2017;
        var startDate = new Date(year, 7, 6, 0, 0, 0, 0);

        var splittedDateOfTravel = dateOfTravel.split("-")
        var waypointArrivalDate = new Date(year, splittedDateOfTravel[1], splittedDateOfTravel[0], 0, 0, 0 ,0);
        var dayOfTravel = parseInt(Math.floor((waypointArrivalDate - startDate)/86400000));

        return dayOfTravel;

    }

    function attachSecretMessage(marker, wayPoint, dateOfArrival) {

        var infowindow = new google.maps.InfoWindow({
            title: 'Gallery ' + wayPoint
            // content: infoWindowContent

        });

        function iwFadeIn() {
            infowindow.open(map, marker);
            var iw_container = $(".gm-style-iw").parent();
            iw_container.stop().hide();
            iw_container.fadeIn(1000);
        }

        var dayOfTravel = dateToDayOfTravel(dateOfArrival);

        marker.addListener('click', function () {
            // Make an AJAX request to get the data
            // The return is an array of paths of all images in wayPoint folder
            $.when(
                $.ajax({
                    type: "GET",
                    url: 'api/rndImg',
                    data: {
                        wayPoint: wayPoint
                    },
                    success: function (data) {
                        rndImgPath = data.data;
                    }
                })
            ).done(function(){

                //Rnd Image from requested array as preview Image
                // var rndImg = imgPathArray[Math.floor(Math.random()*imgPathArray.length)];

                // get marker ID to set content id to identify infoWindow
                var markerId = marker.metadata.id;

                var infoWindowContent =
                    '<div id="' + markerId+ '">' +
                        '<div id="iw-container">'+
                            // '<div class="infoWindowButtonClose"></div>'+
                            '<div id="iw-content">'+
                                '<img class="iw-prev-img" src="'+ rndImgPath + '">' +

                            '</div>'+
                            '<div class="iw-title">'+ wayPoint + '</div>'+
                            '<div class="iw-subTitle">Day ' + dayOfTravel + '</div>'+
                            '<div class="iw-button">' +
                                '<button class="iw-view-gallery-btn" onclick="openModal(\'' + wayPoint + '\')">View Album</button>'+
                            '</div>'+
                        '</div>'+
                    '</div>';

                    // '<img class="iw-view-gallery-btn" src="./images/icons/Play_Button_2.png" onclick="openModal(\'' + wayPoint + '\')">' +

                infowindow.setContent(infoWindowContent);
                infowindow.open(map, marker);

                var iw_container = $('#'+ markerId).parent().parent().parent().parent();
                iw_container.stop().hide();
                iw_container.fadeIn(500);

            });
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
            var iwCloseBtn = iwOuter.next();
            // iwCloseBtn.remove();



            // // // Apply the desired effect to the close button
            iwCloseBtn.css({
                right: '44px',
                top: '5px',
                fontSize: '32px',
                fontWeight: 'bold',
                textShadow:  '1px  1px 1px #ffffff, 1px -1px 1px #ffffff,-1px  1px 1px #ffffff,-1px -1px 1px #ffffff',
                color: 'white'
            });
            // // Apply the desired effect to the close button
            iwCloseBtn.addClass('infoWindowButtonClose');
            iwCloseBtn.children().remove();

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

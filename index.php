<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <title>Info windows</title>

    <link href="https://fonts.googleapis.com/css?family=Indie+Flower" rel="stylesheet">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/infowindow.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>

<body>
<div id="map"></div>

<div id="loadingDiv">

</div>



<script src="./js/initMap.js"></script>
<script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAIQZFQ4pr9frj4L6jmm1GoDs6_iw2BwZ4&callback=initMap">
</script>
<script src="./js/lightbox.js"></script>


<script type="text/javascript">
    console.log('ready');
    $(document).ready(function(){

        console.log('ready');

        //
        // var mapSettingsElements = document.getElementsByClassName("gm-style-mtc");
        // mapSettingsElements[0].firstChild().style.fontFamily = "'Indie Flower', regular";
        // mapSettingsElements[1].firstChild().style.fontFamily = "'Indie Flower', regular";

    });
</script>
</body>


</html>

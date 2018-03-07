<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <title>Info windows</title>

    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/infowindow.css">
    <link rel="stylesheet" type="text/css" href="slick/slick.css"/>
    <link rel="stylesheet" type="text/css" href="slick/slick-theme.css"/>
    <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
</head>

<body>
<div id="map"></div>





<script src="./js/initMap.js"></script>
<script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAIQZFQ4pr9frj4L6jmm1GoDs6_iw2BwZ4&callback=initMap">
</script>
<script src="./js/lightbox.js"></script>
<!--<script type="text/javascript" src="slick/slick.min.js"></script>-->
<script type="text/javascript" src="slick/slick.js"></script>

<script type="text/javascript">

    $(document).on('ready', function() {
        console.log('ready');
        $(".regular").slick({
            dots: true,
            infinite: false,
            slidesToShow: 6,
            slidesToScroll: 4
        });

    });
</script>
</body>


</html>

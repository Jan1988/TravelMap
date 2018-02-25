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

<!-- The Modal/Lightbox -->
<div id="myModal" class="modal">
    <span class="close cursor" onclick="closeModal()">&times;</span>
    <div class="modal-content">

        <?php
            include ("php/load_images.php");
            $dir_path = "images/Sankt Petersburg/";
//            $dir_path = "images/Mannheim/";

            echo_div_my_slides($dir_path);
            ?>

        <!-- Next/previous controls -->
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>

        <!-- Caption text -->
        <div class="caption-container"><p id="caption"></p></div>

        <section class="regular slider">
            <?php
                $dir_path = "images/Sankt Petersburg/";
            //            $dir_path = "images/Mannheim/";

                echo_div_column($dir_path);
            ?>
        </section>


    </div>
</div>



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

/**
 * Created by Külse on 01.02.2018.
 */
// Open the Modal


var slideIndex = 1;
var wayPointOld = "";

function openModal(wayPoint) {
    console.log(wayPoint);

    if (wayPoint != wayPointOld){
        slideIndex = 1;
        appendModal(wayPoint);
        wayPointOld = wayPoint;
    }

    // document.getElementById('myModal').style.display = "block";
    document.getElementById('myModal').style.visibility = "visible";

}

function appendModal(wayPoint) {

    var modalExists = document.getElementById('myModal');

    if (modalExists){
        console.log("Modal Exists");
        modalExists.remove();
    }


    var echoDivMySlides = "nix bekommen";

    var theLightbox1 = '<div id="myModal" class="modal">' +
        '<span class="close cursor" onclick="closeModal()">&times;</span>' +
        '<div class="modal-content">';

    $("#map").after(theLightbox1);

    $.ajax({
        type: "GET",
        url: './php/echo_div_my_slides.php',
        data: {
            folderName:wayPoint
        },
        success: function(data) {
            console.log("success echo_div_my_slides");
            // console.log(data);
            $(".modal-content").prepend(data);
            showSlides(3);
        }

    });


    var theLightbox2= '<a class="prev" onclick="plusSlides(-1)">&#10094;</a>' +
        '<a class="next" onclick="plusSlides(1)">&#10095;</a>' +
        '<div class="caption-container"><p id="caption"></p></div>' +
        '<section class="regular slider">' +
        '</section>' + '</div>' + '</div>';

    $(".modal-content").append(theLightbox2);

    // $.ajax({
    //     type: "GET",
    //     url: './php/echo_div_column.php',
    //     // data: {
    //     //     folderName:wayPoint,
    //     //     dayOfTravel: dayOfTravel
    //     // },
    //     success: function(data) {
    //         console.log("success echo_div_column");
    //         console.log(data);
    //         // $("section").prepend(data);
    //     }
    //
    // });

}

function closeModal() {
    // document.getElementById('myModal').style.display = "none";
    document.getElementById('myModal').style.visibility = "hidden";
}



function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    console.log("currentSlides");
    showSlides(slideIndex = n);
}

function showSlides(n) {
    console.log("showSlides");
    console.log(n);

    var i;
    var slides = document.getElementsByClassName('mySlides');

    console.log("slides.length: " + slides.length);
    // var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    // document.getElementsByClassName("mySlides")[0].style.display = "block";
    slides[slideIndex-1].style.display = "block";
    // dots[slideIndex-1].className += " active";
    // captionText.innerHTML = dots[slideIndex-1].alt;
}

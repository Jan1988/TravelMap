/**
 * Created by Külse on 01.02.2018.
 */
// Open the Modal

var $loading = $('#loadingDiv').hide();
// $(document)
//     .ajaxStart(function () {
//          $loading.show();
//     })
//     .ajaxStop(function () {
//
//     });


var slideIndex = 1;
var wayPointOld = "";

function openModal(wayPoint) {
    console.log(wayPoint);

    if (wayPoint != wayPointOld) {
        slideIndex = 1;
        appendModal(wayPoint);
        wayPointOld = wayPoint;
    }

    // document.getElementById('myModal').style.display = "block";
    document.getElementById('myModal').style.visibility = "visible";

}

function appendModal(wayPoint) {

    var modalExists = document.getElementById('myModal');

    if (modalExists) {
        console.log("Modal Exists");
        modalExists.remove();
    }


    var echoDivMySlides = "nix bekommen";

    var theLightbox1 = '<div id="myModal" class="modal">' +
        '<span class="close cursor" onclick="closeModal()">&times;</span>' +
        '<div class="modal-content">';

    var theLightbox2 = '<a class="prev" onclick="plusSlides(-1)">&#10094;</a>' +
        '<a class="next" onclick="plusSlides(1)">&#10095;</a>' +
        '<div class="caption-container"><p id="caption"></p></div>' +
        '<section class="regular slider">' +
        '</section>' + '</div>' + '</div>';

    $("#map").after(theLightbox1);


    $.when(
        $loading.show(),
        $.ajax({
            type: "GET",
            url: './php/lib-backend.php',
            data: {
                folderName: wayPoint
            },
            success: function (data) {

                imgPathArray = JSON.parse(data);
                console.log("concole log: " + imgPathArray);
            }
        })
    ).done(function () {

        var img = new Image();
        for (var i = 0; i < (imgPathArray.length); i++) {

            img.onload = function () {
                console.log(img.src + " is loaded");
                $loading.hide();
            };

            $("<img>")
                .on('load', function() { console.log("image loaded correctly"); })
                .on('error', function() { console.log("error loading image"); });


            img.src = imgPathArray[i];
            $(".modal-content").append("<div class=\"mySlides\"><div class=\"numbertext\">" + (i + 1) + " / " + imgPathArray.length + "</div><img src='" + img.src + "'/></div>");

        }
        $(".modal-content").append(theLightbox2);
        showSlides(1);
    });


}


function PreloadImage(imgSrc, callback){
    var objImagePreloader = new Image();

    objImagePreloader.src = imgSrc;
    if(objImagePreloader.complete){
        callback();
        objImagePreloader.onload=function(){};
    }
    else{
        objImagePreloader.onload = function() {
            callback();
            //    clear onLoad, IE behaves irratically with animated gifs otherwise
            objImagePreloader.onload=function(){};
        }
    }
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



    var i;
    var slides = document.getElementsByClassName('mySlides');

    console.log("slides.length: " + slides.length);
    // var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");

    // console.log(captionText);

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    // document.getElementsByClassName("mySlides")[0].style.display = "block";
    slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex-1].className += " active";
    captionText.innerHTML = "Bald steht hier text";
}


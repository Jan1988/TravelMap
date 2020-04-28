
var $loading = $('.loadingDiv');
var slides = document.getElementsByClassName('mySlides');
var slideIndex = 1;
var waypointNameOld = "";
var journeyName = ""

function openModal(waypointName, journeyName) {

    if (waypointName != waypointNameOld) {
        slideIndex = 1;
        appendModal(waypointName, journeyName);
        waypointNameOld = waypointName;
    }else{
        showSlides(slideIndex);
    }

    $("#myModal").show();
}

function appendModal(waypointName, journeyName) {

    var modalExists = document.getElementById('myModal');

    if (modalExists) {
        console.log("Modal Exists");
        modalExists.remove();
    }

    var theLightbox1 = '<div id="myModal" class="modal">' +
        '<span class="lightboxButtonClose" onclick="closeModal()"></span>';
        // '<div class="modal-content">';

    var theLightbox2 = '<a class="prev" onclick="plusSlides(-1)">&#10094;</a>' +
        '<a class="next" onclick="plusSlides(1)">&#10095;</a>';

    $("#map").after(theLightbox1);
    
    $loading.show();
    $.ajax({
        type: "GET",
        url: '/api/allImg',
        data: {
            waypointName: waypointName,
            journeyName: journeyName
        },
        success: function (data) {
            imgPathArray = data.imgPathsArr,
            dirPath = data.dirPath
            var img = new Image();
            for (var i = 0; i < (imgPathArray.length); i++) {
    
                img.onload = function () {
                    console.log(img.src + " is loaded");
                    $loading.hide();
                };
    
                img.src = "/" + dirPath + "/" + imgPathArray[i];
                $("#myModal").append(
                    '<div class=\"mySlides\">' +
                        '<div class=\"numbertext\">' + (i + 1) + " / " + imgPathArray.length + '</div>' +
                        '<img src="' + img.src + '"/>' +
                        // '<div class="caption-container">' +
                        //     '<p>Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor; hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor... Hodor hodor hodor; hodor hodor hodor hodor! Hodor hodor... Hodor hodor hodor hodor - hodor? Hodor hodor hodor hodor hodor hodor. </p>' +
                        // '</div>' +
                        // '<section class="regular slider"></section>' +
                    '</div>'
                );
    
            }
            $("#myModal").append(theLightbox2);
            showSlides(1);

        }
    })

}

$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
            plusSlides(-1);
            break;


        case 39: // right
            plusSlides(1);
            break;


        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});
function closeModal() {
    // document.getElementById('myModal').style.display = "none";
    // document.getElementById('myModal').style.visibility = "hidden";
    $("#myModal").hide();
    slides[slideIndex-1].style.visibility = "hidden";
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
    var captionText = document.getElementById("caption");


    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        // slides[i].style.display = "none";
        slides[i].style.visibility = "hidden";
        slides[i].lastChild.style.opacity = "0";

    }

    // document.getElementsByClassName("mySlides")[0].style.display = "block";
    // slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].style.visibility = "visible";
    slides[slideIndex - 1].lastChild.style.opacity = "1";
    // dots[slideIndex-1].className += " active";
    // captionText.innerHTML = "Bald steht hier text";
}


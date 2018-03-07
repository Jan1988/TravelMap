<?php
/**
 * Created by PhpStorm.
 * User: Külse
 * Date: 27.02.2018
 * Time: 01:13
 */

$folderName = $_GET['folderName'];
$dayOfTravel = $_GET['dayOfTravel'];



$dir_path = "../images/".$folderName."/";
//echo $dir_path;
if(is_dir($dir_path)) {

    $images = glob($dir_path . '*.{JPG,jpg,jpeg,png,gif}', GLOB_BRACE);
    $randomImage = $images[array_rand($images)];
    $substr_randomImage = substr($randomImage, 3);

    echo "<img class='iw-prev-img' src='$substr_randomImage'>";
    echo "<div class='iw-description-container'>";
    echo "<div class='iw-day-place-wrapper'>";
    echo "<div class='iw-day'>Day ".$dayOfTravel."</div>";
    echo "<div class='iw-place'>".$folderName."</div>";
    echo "</div>";
    echo "<div class='iw-view-gallery-wrapper'>";
    echo "<div class='iw-view-gallery-txt'>View Gallery </div>";
    echo "<img class='iw-view-gallery-btn' src='./images/icons/Play_Button_2.png' onclick='openModal(\"$folderName\")'>";
    echo "</div>";
    echo "</div>";
}

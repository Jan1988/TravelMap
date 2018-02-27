<?php
/**
 * Created by PhpStorm.
 * User: Külse
 * Date: 03.02.2018
 * Time: 11:41
 */

//$dir_path = "images/Mannheim/";
//$extensions_array = array('jpg', 'png','jpeg');



function echo_div_my_slides($dir_path){
    if(is_dir($dir_path)) {

        $files = array_slice(scandir($dir_path), 2);
        $files_count = count($files);
        for ($i = 0; $i < $files_count; $i++) {

            $img_num = $i + 1;
            //              echo "File Name -> $files[$i]<br>";

            echo "<div class='mySlides'>";
            echo "<div class='numbertext'>$img_num / $files_count";
            echo "</div>";

            echo "<img src='$dir_path$files[$i]' style=\"width: 100%\">";
            echo "</div>";
        }
    }
}

function pick_ramdom_image_from_folder($dir_path){
    if(is_dir($dir_path)) {
        $files = array_slice(scandir($dir_path), 2);
        $randomImage = $files[array_rand($files)];

        echo $randomImage;
    }
}

//function echo_div_row_column($dir_path)
//{
//    if (is_dir($dir_path)) {
//
//        $files = array_slice(scandir($dir_path), 2);
//        $files_count = count($files);
//
//        echo "<div class='row'>";
//        for ($i = 0; $i < $files_count; $i++) {
//            $img_num = $i + 1;
//            echo '<div class="column">';
//            echo "<img src='$dir_path$files[$i]' height='144px' width='216px' onclick='openModal();currentSlide($img_num)' class='hover-shadow'>";
//            echo "</div>";
//
//        }
//        echo "</div>";
//    }
//}

function echo_div_column($dir_path)
{
    if (is_dir($dir_path)) {

        $files = array_slice(scandir($dir_path), 2);
        $files_count = count($files);

        for ($i = 0; $i < $files_count; $i++) {
            $img_num = $i + 1;
            echo "<div>";
            echo "<img class='demo' background='$dir_path$files[$i]' src='$dir_path$files[$i]' style=\"width:100%\" onclick='currentSlide($img_num)' alt=\"Hier steht bald die Beschreibung\">";
            echo "</div>";
        }
    }
}

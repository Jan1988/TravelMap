<?php
/**
 * Created by PhpStorm.
 * User: Külse
 * Date: 28.02.2018
 * Time: 00:59
 */

$folderName = $_GET['folderName'];

$dir_path = "../images/".$folderName."/";

if(is_dir($dir_path)) {

    $files = array_slice(scandir($dir_path), 2);
    $files_count = count($files);
    $substr_dir_path = substr($dir_path, 3);
    for ($i = 0; $i < $files_count; $i++) {

        $img_num = $i + 1;
        //              echo "File Name -> $files[$i]<br>";

        echo "<div class='mySlides'>";
        echo "<div class='numbertext'>$img_num / $files_count";
        echo "</div>";


        echo "<img src='$substr_dir_path$files[$i]' style=\"width: 100%\">";
        echo "</div>";
    }
}
<?php
/**
 * Created by PhpStorm.
 * User: Külse
 * Date: 28.02.2018
 * Time: 02:10
 */

$dir_path = "../images/Mannheim/";

if (is_dir($dir_path)) {

    $files = array_slice(scandir($dir_path), 2);
    $files_count = count($files);
    $substr_dir_path = substr($dir_path, 3);
    for ($i = 0; $i < $files_count; $i++) {
        $img_num = $i + 1;

        echo "<div>";
        echo "<img class='demo' background='$substr_dir_path$files[$i]' src='$substr_dir_path$files[$i]' style=\"width:100%\" onclick='currentSlide($img_num)' alt=\"Hier steht bald die Beschreibung\">";
        echo "</div>";
    }
}
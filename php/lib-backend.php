<?php
/**
 * Created by PhpStorm.
 * User: Külse
 * Date: 15.04.2018
 * Time: 01:14
 */


$folderName = $_GET['folderName'];

$img_path_arr = array();

$dir_path = "../images/".$folderName."/";

if(is_dir($dir_path)) {

    $files = array_slice(scandir($dir_path), 2);
    $files_count = count($files);
    $substr_dir_path = substr($dir_path, 3);
    for ($i = 0; $i < $files_count; $i++) {

//        $img_num = $i + 1;


        array_push($img_path_arr, $substr_dir_path.$files[$i]);

    }

    $json_urls = json_encode( $img_path_arr );
    echo $json_urls;
}
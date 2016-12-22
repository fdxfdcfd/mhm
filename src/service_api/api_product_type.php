<?php
    header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization, If-Modified-Since, Cache-Control, Pragma");
include_once("database.php");
error_reporting(0);
$json = file_get_contents('php://input');
$input = json_decode($json);
$db = new database();
if($input->product_type_id)
    {
	$lenh_sql = "SELECT *
        FROM product_type
        WHERE product_type_id = $input->product_type_id";
	
	$db->setQuery($lenh_sql);
	$data = $db->loadAllRow();
}
else
    {
	$lenh_sql = "SELECT * FROM product_type";
	$db->setQuery($lenh_sql);
	$data = $db->loadAllRow();
}
$db->disconect();

//print_r($data);
//chuyen du lieu thanh json
    $chuoi =  json_encode($data, JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE);
//xuất chuỗi ra màn hình
    echo $chuoi;
?>
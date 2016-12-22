<?php
    header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization, If-Modified-Since, Cache-Control, Pragma");
include_once("database.php");
$json = file_get_contents('php://input');
$input = json_decode($json);
$db = new database();

if($input->condition)
    {
        $arr= (array) $input;
        $where =" 1 = 1 ";
        foreach( $arr as $key=>$val)
        {
            if($key != "condition" && $val != '')       
            {
                $where.= "and $key = $val";
            }             
        }
	$lenh_sql = "SELECT * 
        FROM product p 
         WHERE $where
        ";
	$db->setQuery($lenh_sql);
	$data = $db->loadAllRow();
} else if($input->category_id)
    {
	$lenh_sql = "SELECT p.*, c.name 
        FROM product p, category c 
        WHERE p.category_id = c.id
        AND p.category_id = $input->category_id";
	
	$db->setQuery($lenh_sql);
	$data = $db->loadAllRow();
}
else if($input->product_type){
	$lenh_sql = "SELECT *
        FROM product
        WHERE product_type = $input->product_type";
	$db->setQuery($lenh_sql);
	$data = $db->loadAllRow();
}
else if($input->product_type_limit){
	$lenh_sql = "SELECT *
        FROM product
        WHERE product_type = $input->product_type_limit
        LIMIT 0,4
        ";
	$db->setQuery($lenh_sql);
	$data = $db->loadAllRow();
}
else if($input->id)
    {
	$lenh_sql = "SELECT * 
        FROM product p
        WHERE p.id = $input->id";
	
	$db->setQuery($lenh_sql);
	$data = $db->loadAllRow();
}

else if($input->newProduct)
    {
	$lenh_sql = "SELECT * 
        FROM product p 
        LIMIT 0,4
        ";
	
	$db->setQuery($lenh_sql);
	$data = $db->loadAllRow();
}
else
    {
	$lenh_sql = "SELECT * FROM product";
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
<?php 
require 'connect.php';
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$sql        = "SELECT * FROM booking " ;
$result     = mysqli_query($conn, $sql);
$json_array = array();
while($row  = mysqli_fetch_assoc($result)){
	$json_array[] = $row;
}
echo json_encode($json_array)
?>

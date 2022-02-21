<?php
$conn = new mysqli('localhost', 'root','','db_project8');

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
// echo "Connected successfully";

?>
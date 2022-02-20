<?php
require 'connect.php';
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");


if(isset($_POST) && !empty($_POST)){
    $username = $_POST['username'];
    $age = $_POST['age'];
    $date = $_POST['date'];
    $time = $_POST['time'];
    $num = $_POST['num'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
   
             $sql_insert = "INSERT INTO booking (username,age,date,time,num,phone,email) VALUES ('$username','$age','$date','$time','$num','$phone','$email')";
             if(mysqli_query($db,$sql_insert)){
            //  $sql_select = "SELECT * FROM users where email = $email";
             $result = mysqli_query($db,$sql);
             $row = mysqli_fetch_assoc($result);
             http_response_code(201);
             print json_encode($row);
           }

             else{
                http_response_code(422); 
             }
  
}


?> 
<?php 
session_start(); 
$showAlert = false; 
$showError = false; 
$exists=false;

if($_SERVER["REQUEST_METHOD"] == "POST") {  
    // Include file which makes the
    // Database Connection.
    include 'connect.php';   
    $check = 1;  
    $username = $_POST["username"]; 
    $email = $_POST["email"]; 
    $password = $_POST["password"]; 
    $cpassword = $_POST["cpassword"]; 
    $nameError          = "";
    $emailError          = "";
    $passwordError       = "";
    $cpasswordError       = "";
    $sql = "Select * from admins where name='$username'";
    if ($email == "") {
        $check = 0;
        $emailError = "The email shouldn't be empty!";
    }
    if ($password == "") {
        $check = 0;
        $passwordError = "The password shouldn't be empty!";
    }
    if ($cpassword == "") {
        $check = 0;
        $cpasswordError = "The Confirm password shouldn't be empty!";
    }
    if ($username == "") {
        $check = 0;
        $nameError = "The name shouldn't be empty!";
    }
    if ($check == 1) {
    $result = mysqli_query($conn, $sql);   
    $num = mysqli_num_rows($result);   

    if($num == 0) {
        if(($password == $cpassword) && $exists==false) {
            $sql = "INSERT INTO `admins` ( `name`, `email`,
                `password`, `date`) VALUES ('$username', '$email',
                '$password', current_timestamp())";
            $result = mysqli_query($conn, $sql);
            if ($result) {
                $showAlert = true; 
            }
        } 
        else { 
            $showError = "Passwords do not match"; 
        }      
    }// end if 
    
   if($num>0) 
   {
      $exists="Username not available"; 
   } 
    
}
}  
    
?>
    
<!DOCTYPE html>
    
<html lang="en">
  
<head>
    
    <!-- Required meta tags --> 
    <meta charset="utf-8"> 
    <meta name="viewport" content=
        "width=device-width, initial-scale=1, 
        shrink-to-fit=no">
        <link rel="stylesheet" href="stylereg.css">
    <title>Login & Register</title>
    
<body>   
<div class="bg">
<?php  
    if($showAlert) {
    
        echo ' <div class="alert alert-success 
            alert-dismissible fade show" role="alert">
    
            <strong>Success!</strong> Your account is 
            now created and you can login. 
            <button type="button" class="close"
                data-dismiss="alert" aria-label="Close"> 
                <span aria-hidden="true">×</span> 
            </button> 
        </div> '; 
        header("Location: http://localhost:3000/order");
    }
    
    if($showError) {
    
        echo ' <div class="alert alert-danger 
            alert-dismissible fade show" role="alert"> 
        <strong>Error!</strong> '. $showError.'
    
       <button type="button" class="close" 
            data-dismiss="alert aria-label="Close">
            <span aria-hidden="true">×</span> 
       </button> 
     </div> '; 
   }
        
    if($exists) {
        echo ' <div class="alert alert-danger 
            alert-dismissible fade show" role="alert">
    
        <strong>Error!</strong> '. $exists.'
        <button type="button" class="close" 
            data-dismiss="alert" aria-label="Close"> 
            <span aria-hidden="true">×</span> 
        </button>
       </div> '; 
     }   
?>   
<div class="login-wrap">
	<div class="login-html">
		<h1 class="tab sign-up">Sign Up</h1>
		<div class="login-form">
			<div class="sign-up-htm">
            <form action="register.php" method="post">
				<div class="group">
					<label for="name" class="label">Name</label>
					<input id="name" type="text" class="input" name="username">
                    <div style="color: red;font-weight:bold;" id="emailHelp">
                        <div style="color: red;font-weight:bold;" id="pass2Help"><?php echo @$nameError ?></div>
                    </div>
				</div>
				<div class="group">
					<label for="email" class="label">Email</label>
					<input id="email" type="text" class="input" name="email">
                    <div style="color: red;font-weight:bold;" id="emailHelp">
                        <div style="color: red;font-weight:bold;" id="pass2Help"><?php echo @$emailError ?></div>
                    </div>
				</div>
                <div class="group">
					<label for="password" class="label">Password</label>
					<input id="password" type="password" class="input" data-type="password" name="password">
                    <div style="color: red;font-weight:bold;" id="passHelp">
                        <div style="color: red;font-weight:bold;" id="pass2Help"><?php echo @$passwordError ?></div>
                    </div>
				</div>
                <div class="group">
					<label for="cpassword" class="label">Confirm Password</label>
					<input id="cpassword" type="password" class="input" data-type="password" name="cpassword">
                    <div style="color: red;font-weight:bold;" id="passHelp">
                        <div style="color: red;font-weight:bold;" id="pass2Help"><?php echo @$cpasswordError ?></div>
                    </div>
                    <small id="emailHelp" class="form-text text-muted">
                        Make sure to type the same password </small> 
                </div>
           		<div class="group">
					<button type="submit" class="button"> Sign Up </button>
				</div>
                </form>
				<div class="hr"></div>
				<div class="foot-lnk">
					<a href="login.php">Already Member?</a>
				</div>
			</div>
		</div>
	</div>
	</div>


</body> 
</html>
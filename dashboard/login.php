<?php  
session_start();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 include 'connect.php';  
    $check               = 1;
    $email               = strtolower($_POST["email"]);
    $password            = $_POST['password'];
    $emailError          = "";
    $passwordError       = "";
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $emailError = ("$email is not a valid email address");
        $check = 0;
    }
    if ($email == "") {
        $check = 0;
        $emailError = "The email shouldn't be empty!";
    }
    if ($password == "") {
        $check = 0;
        $passwordError = "The email shouldn't be empty!";
    }
    if ($check == 1) {
        $check_exist = "SELECT * FROM admins WHERE email = '$email'";
        $result = mysqli_query($conn, $check_exist);
        $data = mysqli_fetch_array($result, MYSQLI_NUM);
        if ($check_exist) {
            $sql = "SELECT * FROM admins WHERE email = '$email'";
            $result = mysqli_query($conn, $sql);
            $users  = mysqli_fetch_all($result, MYSQLI_ASSOC);
            foreach ($users as $user) {
                if ($email == $user["email"] && $password == $user["password"]) {
                    $_SESSION["type"] = 0;
                    $_SESSION["id"] = $user['id'];  
                    $_SESSION['name'] = $user['name'];
                        header("Location: /dashboradproject8/dashboard/main.php");
                } else {
                    $error = "your email or password is wrong";
                }
            }
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
  
<div class="login-wrap">
	<div class="login-html">
		<label for="tab-1" class="tab sign-up">Sign In</label>
        <div class="login-form">
			<div class="sign-in-htm">
            <form action="login.php" method="post">
            <div style="color: red;font-weight:bold;" id="pass2Help"><?php echo @$error ?></div>
                <div class="group">
					<label for="email" class="label">Email</label>
					<input id="email" type="text" class="input" name="email">
                    <div style="color: red;font-weight:bold;" id="emailHelp">
                        <div style="color: red;font-weight:bold;" id="pass2Help"><?php echo @$emailError ?></div>
                    </div>
				</div>
				<div class="group">
					<label for="pass" class="label">Password</label>
					<input id="pass" type="password" class="input" data-type="password" name="password">
                    <div style="color: red;font-weight:bold;" id="passHelp">
                        <div style="color: red;font-weight:bold;" id="pass2Help"><?php echo @$passwordError ?></div>
                    </div>
				</div>
				<div class="group">
					<button type="submit" class="button"> Sign In </button>
				</div>
			</div>
                </form>
				<div class="hr"></div>
				<div class="foot-lnk">Don't have account? 
                <a href="register.php">Sign up</a>
				</div>
			</div>
		</div>
	</div>


</body> 
</html>
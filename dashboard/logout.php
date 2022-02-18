<?php
session_start();
unset($_SESSION["id"]);
unset($_SESSION["type"]);
session_destroy();
header("Location: main.php");
exit;

<?php
session_start();

if(isset($_SESSION['user']))
    unset($_SESSION['user']);
if(isset($_SESSION['user2']))
    unset($_SESSION['user2']);

header('Location:../index.php');
exit();
?>
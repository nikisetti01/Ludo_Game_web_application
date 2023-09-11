<?php
header('Content-Type: application/json; charset=utf-8');
session_start();

if(isset($_SESSION['user']) && isset($_SESSION['user2']))
    unset($_SESSION['user2']);
?>
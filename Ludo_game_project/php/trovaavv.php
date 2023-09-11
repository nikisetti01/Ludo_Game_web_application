<?php
session_start();

if (isset($_GET['avversario'])) {
  $_SESSION['avversario'] = $_GET['avversario'];
  echo json_encode(array("result"=>true, "text"=>"ho compreso l'avversario ". $_SESSION["avversario"]));
  return;
}
else 
echo json_encode(array("result"=>false, "text"=> "vediamo il problema"));
?>

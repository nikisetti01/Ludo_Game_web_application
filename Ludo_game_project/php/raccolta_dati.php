<?php
header('Content-Type: application/json; charset=utf-8');
require_once('costanti.php');
session_start();
// salvo il vincitore e i punteggi di ogni giocatore
if (isset($_POST['punteggio1'], $_POST['punteggio2'], $_POST['winner'])) {
 
    $winner=$_POST['winner'];
    $punteggio1=$_POST['punteggio1'];
    $punteggio2=$_POST['punteggio2'];
 

   
    
if(!isset($_SESSION['user'])){
    unset($_SESSION['punteggio1']);
    unset($_SESSION['punteggio2']);
    echo json_encode(array("result" => true, "text" => "Utente non loggato correttamente"));
    return;
}

if(!is_string($winner))
{
echo json_encode(array("result" => false, "text" => "Impossibile salvare i dati della partita"));
    return;
}
$winnerPlayer=" ";
$punteggiol;
$punteggiow;
$losePlayer;

if($winner==$_SESSION['user']){
    

$winnerPlayer=$_SESSION['user'];

$punteggiow=$_POST['punteggio1'];
// mi salvo solamente le partite vinte dai giocatori, utili ai fini di statistiche e classifiche 
if($_SESSION['avversario']=='computer'){
    $losePlayer="CPU";

}
    else 

$losePlayer=$_SESSION['user2'];
$punteggiol=$_POST['punteggio2'];


}

else if($_SESSION['avversario']!='computer') {
 
$winnerPlayer=$_SESSION['user2'];

$punteggiow=$_POST['punteggio2'];

$losePlayer=$_SESSION['user'];
$punteggiol=$_POST['punteggio1'];
} else {
    $punteggiol=$_POST['punteggio1'];
    $losePlayer=$_SESSION['user'];
  
}


$pdo = new PDO(CONNECTION, USER, PASSWORD);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

if($_SESSION['avversario'] =="player" || $winnerPlayer==$_SESSION['user']){
   
$insert1 = "insert into risultati( giocatorevincente,giocatoreperdente) 
          values (:giocatore1, :giocatore2)";

$stmt = $pdo->prepare($insert1);

$stmt->bindValue(':giocatore1', $winnerPlayer);
$stmt->bindValue(':giocatore2', $losePlayer);

$stmt->execute();
}
if($losePlayer != "CPU"){
$insert2="insert into punteggi(giocatore,punteggio)
values(:loseplayer, :losescore )";

$stmt2 = $pdo->prepare($insert2);
$stmt2->bindValue(':loseplayer', $losePlayer);
$stmt2->bindValue(':losescore', $punteggiol);
$stmt2->execute();

}
if($_SESSION['avversario'] =="player" || $winnerPlayer==$_SESSION['user']){
$insert3="insert into punteggi(giocatore,punteggio)
values(:winplayer, :winscore )";
$stmt3= $pdo->prepare($insert3);
$stmt3->bindValue(':winplayer', $winnerPlayer);
$stmt3->bindValue(':winscore', $punteggiow);
$stmt3->execute();
}



echo json_encode(array("result" => true, "text" => "Dati della partita salvati"));
}
else {
    echo json_encode(array("result" => false, "text" => " Impossibile salvare i dati della partita"));
    return;
}














?>
<?php
require_once('costanti.php');

if(isset($_SESSION['user'])){

    
    if(  $_GET['id'] ==1){
    $username = $_SESSION['user'];
  
    } else 
    $username = $_SESSION['user2'];


    $pdo = new PDO(CONNECTION, USER, PASSWORD);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    //recupera le informazioni dell'utente
    $query1 = "SELECT * from utenti where nomeUtente = :utente";

    $stmt_1 = $pdo->prepare($query1);
    $stmt_1->bindValue(':utente', $username);
    $stmt_1->execute();

    $row1 = $stmt_1->fetch();

    if(!$row1){
        unset($_SESSION['user']);
        if(isset($_SESSION['user2']))
            unset($_SESSION['user2']);
        header("Location: index.php");
        exit;
    } 
    else {
        $name = $row1['nome'];
        $surname = $row1['cognome'];
        $email = $row1['email'];
           
    }
    
    // se non trova recordo il count torna 0
    $query2 = "SELECT count(*) as partiteGiocate
               FROM punteggi p
               WHERE p.giocatore = :utente";

    $stmt_2 = $pdo->prepare($query2);
    $stmt_2->bindValue(':utente', $username);
    $stmt_2->execute();
 

    $row2 = $stmt_2->fetch();

    $gamesPlayed = $row2['partiteGiocate']; 
  
    

    $query3 = "SELECT count(*) as partiteVinte
               FROM risultati r
               WHERE r.giocatorevincente= :utente ";

    $stmt_3 = $pdo->prepare($query3);
    $stmt_3->bindValue(':utente', $username);
    $stmt_3->execute();

    $row3 = $stmt_3->fetch();

    $gamesWon = 0;
    $winPercentage = 0;
    if($gamesPlayed != 0){
        $gamesWon = $row3['partiteVinte'];  
        $winPercentage = intval(($gamesWon/$gamesPlayed)*100);
    }
  

    $query4 = "SELECT SUM(punteggio) as punteggiototale
               FROM punteggi p
               WHERE p.giocatore= :utente";
    
    $stmt_4 = $pdo->prepare($query4);
    $stmt_4->bindValue(':utente', $username);
    $stmt_4->execute();
  
    $row4 = $stmt_4->fetch();

    
  $Score=$row4['punteggiototale'];
}
else{
    
    return;
}
?>
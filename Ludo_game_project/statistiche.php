<!DOCTYPE html>
<html lang="it">

<head>
    <title>Profilo</title>
    <link rel="stylesheet" type="text/css" href="css/statistiche.css">


</head>

<body>
<header>
        <a href="menu.php" class="animate-charcter"> Ludo Game</a>
    <nav>
    
    </nav>
</header>
<?php 
    session_start();
    include 'php/dati_statistiche.php';
    $_SESSION['id']=$_GET['id'];
 

    
    ?>


    <div class="profile">
        
        <h1>  <?php echo $username ?> </h1>
        <p>Email: <?php echo $email ?> </p>
        <p> Nome:     <?php echo $name ?>                  </p>
        <p>Cognome:  <?php echo $surname ?></p>
        <div class="stats">
            <p><span>Statistiche:</span></p>
            <br>
            <p> Partite giocate: <span> <?php echo $gamesPlayed ?></span>            </p>
            <p>Partite vinte: <span><?php echo $gamesWon ?></span>  </p>  <p>Percentuale vittoria: <span><?php echo $winPercentage ?> %</span> </p>
            <p>Punteggio: <span><?php echo $Score ?></span></p>
           
        </div>
    </div>
</body>
</html>

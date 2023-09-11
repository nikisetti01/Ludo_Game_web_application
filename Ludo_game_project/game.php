

<!DOCTYPE html>
<html lang="it">
<head>
<link rel="shortcut icon" href="#">
<title>Ludo Game</title>
    <link rel="stylesheet" href="css/game.css">

</head>
<body>
    <header>
        <div>
        <h1 class="animate-charcter"> Ludo Game</h1>
        </div>
        <div>
        <?php
       session_start();
   if(isset($_SESSION["user"]))
   echo '<h3 id="account1" class="animate-charcter" >'.$_SESSION["user"]." </h3>"
   ?>
   <h3 id="account" class="animate-charcter"> &nbsp; VS &nbsp;  </h3>
   <?php
   if($_SESSION["avversario"]=="computer")
   echo '<h3 id="account2" class="animate-charcter"> CPU</h3>';
  else if(isset($_SESSION["user2"])){
 
   echo '<h3 id="account2" class="animate-charcter">     ' .$_SESSION["user2"]."</h3>";
   }

?>
<div class="punteggio" >
<span id="score1" class="animate-charcter">0</span>
<span id="score2" class="animate-charcter">0</span>
</div>
   </div>
   <div>
    <nav>
        <ul class="menu">
           
            <li><a href="#" id="Ricominciamo">Nuova Partita</a></li>
            <li><a href="menu.php">Home</a></li>
         
            
        </ul>
    </nav>
    </div>
</header>
<audio src="audio/ludomusic.mp3" loop autoplay>
  Il tuo browser non supporta l'elemento audio.
</audio>
    <div class="supercontainer">

    <div class="up">
<div id="player_0" class="person">
    <img src="immagini/red.jpg"  class="elemental" alt="fuoco">
   
</div>
<div class="name-container">
<div class="animate-charcter" id="a_chi_sta" >
</div>
   
</div>
<div id="player_3" class="person"> <img src="immagini/green.jpg" class="elemental" alt=terra></div>

 

</div>
<div id="container">
<div id="vittoria">
    <div class="content">

    </div>
  <div class="actions">
   

</div>

</div>
</div>

<div class="down">
<div id="player_1" class="person"><img src="immagini/blu.jpg" class="elemental" alt=acqua></div>
<div id="dado-container"> 

    <div id="punti"> </div>
</div>
<div id="player_2" class="person"><img  src="immagini/giallo.jpg" class="elemental" alt=ariaa></div>
</div>

    </div>
    <script src="js/game.js"> </script>

</body>
</html>



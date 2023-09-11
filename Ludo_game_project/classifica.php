<!DOCTYPE html>
<html lang="it">
<head>
    <title>Classifica</title>
<link rel="stylesheet" href="css/classifica.css">
<?php session_start(); ?>






</head>

<body>
<header>
        <a href="menu.php" class="animate-charcter"> Ludo Game</a>
    <nav>
    
    </nav>
</header>
    <div class="main">
        <div class="title-container">
        <h1  id="title" class="animate-charcter">Classifica</h1>
        </div>
<div class="Scelta" >
<div class="buttons">
            <button id="rank1" class=" rank">Maggior vittorie</button>
            <button id="rank2" class=" rank">Miglior punteggio</button>
</div>


    <div class="podio">
        <h2 id="title-podio">PODIO</h2>
        <div  id="primo" class="scalino primo">
     <img src=immagini/crown.png alt="winner">
        </div>
        <div id="secondo" class="scalino secondo">
        <img src=immagini/medals.png alt="second">
        </div>
        <div id="terzo" class="scalino terzo">
        <img src=immagini/medals.png alt="terzo">
       
        </div>
        </div>
    </div>
    <div class="table-container">
        <table id="tabella">

        </table>

    </div>
</div>
<script src="js/classifica.js"></script>
</body>
</html>
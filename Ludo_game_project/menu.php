
<!DOCTYPE html>
<html lang="it">
<head>
<link rel="stylesheet" href="css/menu.css">
<title>Menu</title>
</head>

<body>
<?php
session_start();


?>
    <header>
        <a href="index.php" class="animate-charcter"> Ludo Game</a>
    <nav>
    
    </nav>

    <?php
    if(isset($_SESSION['user'])){
    echo '<div class="account">';
    echo '<h2 class=animate-charcter>'.$_SESSION['user'] .'</h2>';
    echo '<a href="statistiche.php?id=1" id="stat" class=animate-charcter> Statistiche </a> ';
    echo '<form action="php/logout.php" method="post">';
    echo '<input class=animate-charcter type="submit" id=logout value=logout>';  
    echo '</div>';
    }
    if(isset($_SESSION['user2'])){
    echo '<div class="account">';
    echo '<h2 class=animate-charcter>'.$_SESSION['user2']. '</h2>';
    echo '<a href="statistiche.php?id=2" id="stat1" class=animate-charcter> Statistiche </a> ';
    echo '<form action="php/logout2.php" method="post">';
    echo '<input class=animate-charcter type="submit" id=logout2 value=logout>';  
    echo '</div>';
    echo '</div>';
    }
    ?>


<a href="classifica.php?id=1" id="classifica" class=animate-charcter> Classifica </a>
</header>
<main>
<div class="choise" id="Single-player">
    <div class="r">
<div class="img-container" ><img class="icona" src="immagini/monitor.png" alt="gioca contro PC"></div>
</div>
<div class="r">
    <div>
<h3>Gioca contro il Computer</h3>
<p>
Sfida il PC al classico gioco da tavolo e scopri se riuscirai a battere la macchina
</p>
</div>
</div>
<div class="r">

    <input type="submit" id="PC" value="Gioca">
</div>
</div>
<div class="choise">
    <div class="r">
<div class="img-container"><img class="icona" src="immagini/user.png" alt="gioca contro avversario"></div>
</div>
<div class="r">
    <div>
    
<h3>Gioca contro un avversario</h3>
<p>
    Divertiti insieme a un tuo amico sfidandovi a Ludo, ma senza arrabbiarvi troppo
</p>
</div>
</div>
<div class="r" >
    <?php
    if(isset($_SESSION['user2']))
   echo  '<input type="submit"  id="1vs1" value="Gioca"></div>';
   else 
   echo  '<input type="submit" id="1vs1" value="Gioca" disabled></div>';
   
     ?>
</div>
<div class="choise">
<div class="r">
<div class="img-container"><img class="icona" src="immagini/document.png" alt="regole"></div>
</div>
<div class="r">
<div>
<h3>
Regolamento</h3>

<p>Comprendi a pieno le semplici regole di questo gioco da tavolo, scoprendo il motivo per cui questo gioco è anche chiamato <em>Non ti arrabbiare!</em></p>
</div>
</div>
<div class="r">
    <a class="reg" href="regolamento.html"><br>Scopri</a>
</div>

</div>

</main>
<script  src="js/menu.js">
</script>
</body>
</html>

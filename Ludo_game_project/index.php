<!DOCTYPE html>
<html lang="it">
  <?php session_start()
  ?>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ludo</title>
  <link rel="stylesheet" href="css/home.css">

</head>
<body>

  <main>
    <div>
      <img src="immagini/dice.png" title="dado" class="dice" >
    </div>
    <div class="title-container">
      <h2 class="glitch"> The <br> Ludo <br> Game
        <span class="firtst">The Ludo Game</span>
        <span class="second" aria-hidden="true">The Ludo Game</span>  </h2>
        
    </div>

    <p class="subtest">Scopri l'emozione del classico gioco da tavolo.</p>
    <div id="button-container">

    <button  class="button" id="loginbutton" >►</button>
    
  </div>
  <div id="loginDropdown" class="dropdown">
    <h1 class="button">LOGIN</h1>
    <form id="formlogin">
      <label for="user">
      <input type="text"  id="user" name="user" placeholder="Username" required>
      </label>
      <label for="password">
      <input type="password" id="password" name="password" placeholder="Password" required>
    </label>
      <div id="errore">
    </div>
      <div id="b-container">
        <div class="acess">
      <a class="spec" href="reg.php">Registrati</a>
     
    </div>
    <input type="submit" id="acc" value="Accedi" >
  </div>
    
    

    </form>
  </div>
 
  <script src="js/home.js"></script>
  </main>
</body>

</html>

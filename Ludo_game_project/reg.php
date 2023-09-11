<?php session_start();?>

<!DOCTYPE html>

<html>
<head>
  <title>Registrazione</title>
  <link rel="stylesheet" href="css/reg.css">
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

  <header>
    <h1 class="animate-charcter"> Ludo Game</h1>
<nav>

</nav>
</header>
<body>
  <div class="base">
  <div class="box">
  <h1>Registrazione</h1>
  <form id="registrationForm">
    <div class="r">
    <label for="firstName">Nome:</label>

    <input type="text" id="firstName" name="name"  pattern="(?=.*[A-Z])[A-Za-z]+" required>
  </div>
  <div class="r">
    <label for="lastName">Cognome:</label>
    <input type="text" id="lastName" name="surname"  pattern="(?=.*[A-Z])[A-Za-z]+"required>
</div>
<div class="r">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
  </div>
  <div class="r">
    <label>Username:</label>
    <input type="text" id="user" name="user" pattern="^[a-zA-Z0-9_.]{6,18}$"required>
  </div>
  <div class="r">
    <label for="password">Password*:</label>
 
    <input type="password" id="password" name="password" id="pass1"required>
    <div class="requisiti">
    <p>*Richiesta password:</p> 
    <ul>
      <li>Minimo di 8 caratteri</li>
      <li>almeno Un numero</li>
      <li> almeno Una lettera maiuscola,  ma non solo maiuuscole</li>
      
    </ul>
    </div>
  </div>
  <div class="r">
    <label for="password2">Comferma <br> Password:   </label>
    <input type="password" id="password2" name="password2"  required>
  </div>
  <div class="rs">
    <input type="submit" value="Registrati" id="reg">
  </div>
    <div class="messaggio" id="invalido">
   
      </div>
  </form>

</div>
</div>
</body>
</html>
<script src="js/reg.js"></script>

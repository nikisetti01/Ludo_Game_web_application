<?php
require('costanti.php');
session_start();
if($_SERVER['REQUEST_METHOD'] == 'POST') {

    $regExname = '/(?=.*[A-Z])[A-Za-z]+/';
    $regExuser='/^[a-zA-Z0-9_.]{6,18}$/';
    $regExpsw='/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z]).{8,18}$/';

    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $user = $_POST['user'];
    $email = $_POST['email'];
    $psw = $_POST['password'];
    $pswcomf = $_POST['password2'];
    
    header('Content-Type: application/json; charset=utf-8');
$nomestringa= (isset($name) && preg_match($regExname,$name) );
$cognomestringa = ( isset($surname) && preg_match($regExname,$name));
    $testEmail = (isset($email) && filter_var($email, FILTER_VALIDATE_EMAIL));
    $testUser = (isset($user) && preg_match($regExuser, $user));
    $testpassword = (isset($psw) && preg_match($regExpsw, $psw));
    $confrontopassword = (isset($pswcomf) && ($psw == $pswcomf));
   if(!$nomestringa || !$cognomestringa){
        echo json_encode(array('result' => false, 'text' => 'Nome e cognome devono essere stringhe che inizino con una lettera maiuscola'));
        return;
    } 

    elseif (!$testUser){
        echo json_encode(array('result' => false, 'text' => 'Il nome utente deve avere almeno tra 6 e 18 e può contenere solo lettere, numeri, punti o underscore'));
        return;
    } 

    
    elseif (!$testpassword){
       echo json_encode(array('result' => false, 'text' => 'La password mpm rispetta i criteri richiesti dalla pagina'));
    return;
    } 
    
    elseif (!$testEmail){
        echo json_encode(array('result' => false, 'text' => 'Email non valida'));
        return;
    }
    
    elseif (!$confrontopassword){
        echo json_encode(array('result' => false, 'text' => 'La password di conferma non corrisponde alla password precedentemente inserita'));
        return;
    } 

    $pdo = new PDO(CONNECTION, USER, PASSWORD);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $search = "SELECT * from utenti where nomeUtente = :utente";
    $statement=$pdo->prepare($search);
    $statement->bindValue(':utente', $user);
    $statement->execute();

    $row = $statement->fetch();
    if($row){
        echo json_encode(array('result' => false, 'text' => 'Email già presente!'));
        return;
    } 
    else{
        $password_hash = password_hash($psw, PASSWORD_BCRYPT);
        $account = "insert into Utenti(nome, cognome, nomeUtente, email, password) 
                  values (:nome, :cognome, :utente, :email, :password);";
                  $statement = $pdo->prepare($account);
                  $statement->bindValue(':nome', $name);
                  $statement->bindValue(':cognome', $surname);
                  $statement->bindValue(':utente', $user);
                  $statement->bindValue(':email', $email);
                  $statement->bindValue(':password', $password_hash);
                  $statement->execute();
    


    if ($statement->rowCount() > 0) {
       

        echo json_encode(array('result' => true, 'text' => "Registrazione effettuata con successo!"));
        return;
    } else {
        echo json_encode(array("result" => false, "text" => "Problema con l'inserimento dei dati"));
        return;
    }
}

}






?>
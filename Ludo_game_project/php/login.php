<?php
session_start();
header('Content-Type: application/json; charset=utf-8');
require ('costanti.php');


if($_SERVER['REQUEST_METHOD']=='POST'){
 if(isset($_POST['user']) && isset($_POST['password'])){
        $username = $_POST['user'];
        $password = $_POST['password'];

    }


   else {
        echo json_encode(array("result" => false, "text" => "Parametri sbagliati"));
        return;
    }
    $regExuser='/^[a-zA-Z0-9_.]{6,18}$/';
    $regExpsw='/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z]).{8,18}$/';
    if(preg_match($regExuser, $username) && preg_match($regExpsw, $password)){
        
        $pdo = new PDO(CONNECTION, USER, PASSWORD);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        
        $search = "SELECT * from utenti where nomeUtente = :utente";
       
        $statement=$pdo->prepare($search);
        $statement->bindValue(':utente', $username);
        
        $statement->execute();
    
        $row = $statement->fetch();
       
        if (!$row) {
            echo json_encode(array("result" => false, "text" => "Username non registrato"));
            return;
        } 
        $controllo= password_verify($password, $row['password']);
        
        if(!$controllo){
            echo json_encode(array("result" => false, "text" => "Password errata"));
            return;
        }
        $pdo=null;
     
        if(isset($_SESSION['user'])){
            if($_SESSION['user']==$username){
             
                echo json_encode((array("result"=> false,"text" => "L'utente ha già effetuato il login")));
                return;

            }
            else 
                $_SESSION['user2']=$username;

        } else
            $_SESSION['user']=$username;
        
        echo json_encode(array("result" => true, "text" => "Login effettuato con successo!"));
    return;
    } else{
        echo json_encode(array("result" => false, "text" => "Username e/o password non validi"));
        return;
    } 
    
}




?>

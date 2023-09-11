<?php
$podio=array();
header('Content-Type: application/json; charset=utf-8');
require_once('costanti.php');
if($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET['rank']) ){
    $tiporank=$_GET['rank'];
   
    if($tiporank==1){
        $pdo = new PDO(CONNECTION, USER, PASSWORD);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $numvittorie= "SELECT giocatorevincente, COUNT(*) as vittorie
        FROM risultati
        GROUP BY giocatorevincente
        ORDER BY vittorie DESC
        LIMIT 10";
       
        $risultato=$pdo->query($numvittorie);
       
       
        $output=" <thead>
        <tr>
        <th>Posizione</th>
        <th>Giocatore</th>
        <th>N° Vittorie</th>
        </tr>
    </thead>
    <tbody>";
    $i = 1;
    
    while($row = $risultato->fetch()){
        if($row){
       if($i<4)
       $output .= "<tr><td >" . $i . "</td><td id=".$i.">" . $row['giocatorevincente'] . "</td><td>" . $row['vittorie'] . "</td></tr>";
            else 
            $output .= "<tr><td>" . $i . "</td><td>" . $row['giocatorevincente'] . "</td><td>" . $row['vittorie'] . "</td></tr>";
            $i++;

           
        }
        else
            break;
    }
    
    $output .= "</tbody>";
    
    $pdo = null;
 
    
 
    }
    else if($tiporank== 2){
      
        $pdo = new PDO(CONNECTION, USER, PASSWORD);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $numpunti="SELECT rank, giocatore, somma_punteggi
        FROM (
            SELECT giocatore, SUM(punteggio) as somma_punteggi,
                (SELECT COUNT(*) 
                 FROM (SELECT giocatore, SUM(punteggio) as totale 
                       FROM punteggi 
                       GROUP BY giocatore) as sub 
                 WHERE sub.totale > SUM(punteggio)) + 1 AS rank
            FROM punteggi
            GROUP BY giocatore
        ) as ranks
        ORDER BY somma_punteggi DESC
        LIMIT 10
        
        ";
        $result= $pdo->query($numpunti);
        
        $output = " <thead>
        <tr>
        <th>Posizione</th>
        <th>Giocatore</th>
        <th>Punteggio</th>
        </tr>
    </thead>
    <tbody>";
    $i=1;
    while($row = $result->fetch()){
        if($i<4)
        $output .= "<tr><td>" .$row['rank']   . "</td><td id=" .$i .">" . $row['giocatore'] . "</td><td>" . $row['somma_punteggi'] . "</td></tr>";
        else 
    $output .= "<tr><td>" .$row['rank']   . "</td><td>" . $row['giocatore'] . "</td><td>" . $row['somma_punteggi'] . "</td></tr>";
    $i++;
    }
        
 
    }
   


echo json_encode($output);



    return;
}


?>
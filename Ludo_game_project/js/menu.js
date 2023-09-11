
const PCbutton=document.getElementById("PC");

PCbutton.addEventListener("click",(e)=>{
  
e.preventDefault();
fetch('php/trovaavv.php?avversario='+ encodeURIComponent('computer'))
.then(response=> {

    if (response.ok) {
    console.log('Richiesta inviata con successo');
  } else {
    console.error('Si è verificato un errore durante l\'invio della richiesta');
 } })
.then(data=>{
    console.log(data)
   window.location.replace('game.php');
})
})

const Playerbutton=document.getElementById("1vs1");
Playerbutton.addEventListener("click",(e)=>{
   
e.preventDefault();
fetch('php/trovaavv.php?avversario='+ encodeURIComponent('player'))
.then(response=> {

    if (response.ok) {
    console.log('Richiesta inviata con successo');
  } else {
    console.error('Si è verificato un errore durante l\'invio della richiesta');
 } })
.then(data=>{
    
   window.location.replace('game.php');
})
})
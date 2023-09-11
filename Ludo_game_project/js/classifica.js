let podio=[]


function trovo_podio(){
    for(let i=1; i<4; i++){
    podio[i]=document.getElementById(i).textContent

    }
    let primo=document.getElementById("primo")
  
    let secondo=document.getElementById("secondo");
    let terzo=document.getElementById("terzo");
    let primoapp=document.createElement("div");
    let secondoapp=document.createElement("div");
    primo.removeChild(primo.childNodes[2]);
    secondo.removeChild(secondo.childNodes[2]);
    terzo.removeChild(terzo.childNodes[2])
    let terzoapp=document.createElement("div");
    primoapp.textContent=podio[1];
    secondoapp.textContent=podio[2];
    terzoapp.textContent=podio[3];
    primo.appendChild(primoapp);
    secondo.appendChild(secondoapp);
    terzo.appendChild(terzoapp);

}
const rankvictory=document.getElementById("rank1");
const rankscore=document.getElementById("rank2");
const table=document.querySelector("table");
rankvictory.addEventListener("click", ()=>{
    let queryString = '?rank=1';
    fetch("php/dati_classifica.php" + queryString)
    .then(response => response.json())
    .then(data => {
    
        table.innerHTML = data;
        trovo_podio();
        
    });


    



})
rankscore.addEventListener("click", ()=>{
    let queryString = '?rank=2';
    fetch("php/dati_classifica.php" + queryString)
    .then(response => response.json())
    .then(data => {   
          
        table.innerHTML = data;
        trovo_podio()

    });
    
 
})

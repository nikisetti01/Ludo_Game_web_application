


const L=15;

function giocatore(colore, array,team, position){
    this.colore=colore;
    this.array=array;
    this.team=team;
   this.position= position;
}

let array_red=[];
let array_green=[];
let array_blue=[];
let array_yellow=[];
let position1=[];
let position2=[];
let position3=[];
let position4=[];
let freccia_casella;
let passato=false;
let random=0;
let mossa=0;
let conto_prova=0;
let conto=0;
let controllo=true;
let wincase;
let scoreteam=[0,0];
let lancio=false;
let winner;
let volte=true;
let valutation=[];
let valutazione=true;
let sov=true;
let sta_PC=true
let proxcaselle_Pc=[]
let jugador1={
    nome: " ",
    punteggio: 0
}  
let jugador2={
    nome: " ",
    punteggio: 0
}  

 jugador1.nome=document.getElementById("account1").textContent.trim()

 jugador2.nome=document.getElementById("account2").textContent.trim()
let comincia=Math.round(Math.random()*3); 



let ordine_gioco=[];
if(comincia==1 || comincia==3)
ordine_gioco=[jugador2
    ,jugador1];
else 
ordine_gioco=[jugador1,jugador2];

// inizializzo i giocatori delle due squadre
let red_player= new giocatore("rosso", array_red,1,position1 );
let blue_player= new giocatore("blu",array_blue,2 ,position2);
let green_player=new giocatore("verde",array_green,2,position3);

let yellow_player=new giocatore("giallo",array_yellow,1,position4);
let giocante=0;



function creatavola(){
 let tavola=document.createElement("table");
let container=document.getElementById("container");

for(let i=0; i<L; i++){
let riga=document.createElement("tr");
for(let j=0; j<L;j++){
    let elem=document.createElement("td");

    riga.appendChild(elem);

}
 tavola.appendChild(riga);
}

container.appendChild(tavola);

}
let teamval=[];
let cammino=0;
let camminos=13;
let camminot=0;

for(let o=0; o<225; o++)
teamval.push(0);
function coloratavola(){
    let tavola=document.querySelector("table");
    for(let i=0; i<L; i++){

        for(let j=0; j<L; j++){
            if((i==7 && (j>0 && j<7)) || (i==6 && j==1))
                
                tavola.childNodes[i].childNodes[j].classList.add("sentiero_rosso");
            if(i==7 && (j>7 && j<14) || (i==8 && j==13))
            tavola.childNodes[i].childNodes[j].classList.add("sentiero_giallo");
            if((j==7 && (i>0 && i<7)) || (j==8 && i==1) )
            tavola.childNodes[i].childNodes[j].classList.add("sentiero_blu");
            if(j==7 && (i>7 && i<14) || (j==6 && i==13))
            tavola.childNodes[i].childNodes[j].classList.add("sentiero_verde");
            if((i==0 || i==5)&& j<5 || (j==0 || j==5)&& i<6)
            tavola.childNodes[i].childNodes[j].classList.add("tana_rosso");
            if((i==9 || i==14)&& j>8 || (j==9 || j==14)&& i>8)
            tavola.childNodes[i].childNodes[j].classList.add("tana_giallo");
            if((i==0 || i==5)&& j>8 || (j==9 || j==14)&& i<5)
            tavola.childNodes[i].childNodes[j].classList.add("tana_blu");
            if((i== 9|| i==14)&& j<6 || (j==0 || j==5)&& i>9)
                tavola.childNodes[i].childNodes[j].classList.add("tana_verde");
                if(i==7 && j==7){
                    let triangolo=document.createElement("div");
                
                    triangolo.classList.add("arrivo_rosso");
                   
                    tavola.childNodes[i].childNodes[j].appendChild(triangolo);
                   
                }
                if(i==6 && j==6){
                    let triangolo=document.createElement("div");
                
                triangolo.classList.add("arrivo1");
               
                tavola.childNodes[i].childNodes[j].appendChild(triangolo);

                  
                }
                if(i==8 && j==8){
                    let triangolo=document.createElement("div");
                
                triangolo.classList.add("arrivo2");
               
                tavola.childNodes[i].childNodes[j].appendChild(triangolo);

                }
                if(i==6 && j==8){
                    let triangolo=document.createElement("div");
                
                triangolo.classList.add("arrivo3");
               
                tavola.childNodes[i].childNodes[j].appendChild(triangolo);
                }
                if(i==8 && j==6){
                    let triangolo=document.createElement("div");
                
                triangolo.classList.add("arrivo4");
               
                tavola.childNodes[i].childNodes[j].appendChild(triangolo);
                }
                // provo a fare il cammino 
                if(i===6 && (j>0 &&  j<6)){
                    if(i==6 && j==1)
                    cammino=0;
                tavola.childNodes[i].childNodes[j].id="cammino"+cammino;
                cammino++;
                }
                if(i<6 && (j==6)){
                    if(i==0 && j==6)
                    camminot=10;
                    tavola.childNodes[i].childNodes[j].id="cammino"+camminot;
                    camminot--;

                }
                if(i==0 && (j>6 && j<9)){
                if(i==0 && j==7)
                cammino=11;
                tavola.childNodes[i].childNodes[j].id="cammino"+cammino;
                    cammino++;
                }
                if((i>0 && i<6) && (j==8)){
                   
                    if(i==0 && j==8){
                    camminos=12;
                   
                    
                    }
                    tavola.childNodes[i].childNodes[j].id="cammino"+camminos;
                    camminos++;
                   

                }
                if(i==6 && j>8){
                    if(i==6 && j==9)
                    cammino=18;
                    tavola.childNodes[i].childNodes[j].id="cammino"+cammino;
                        cammino++;
                    }
              
               if((i>=7 && i<9) && j==14){
               if(i==7 && j==14)
               camminos=24
               tavola.childNodes[i].childNodes[j].id="cammino"+camminos;
                        camminos++;


            }
            if(i==8 && (j>8 && j<14)){
            if(i==8 && j==9)
            cammino=30;
            tavola.childNodes[i].childNodes[j].id="cammino"+cammino;
            cammino--;

        }
        if(i>8 && j==8){
        if(i==9 && j==8)
        camminos=31;
        tavola.childNodes[i].childNodes[j].id="cammino"+camminos;
        camminos++;
    }
    if(i==14 && j==7){
 
    tavola.childNodes[i].childNodes[j].id="cammino37";
    }
    if(i>8 && j==6){
        if(i==9 && j==6)
    cammino=43;
    tavola.childNodes[i].childNodes[j].id="cammino"+cammino;

            cammino--;

    }


if(i==8 && j<=5){
    if(i==8 && j==0)
    cammino=49;
    tavola.childNodes[i].childNodes[j].id="cammino"+cammino;

            cammino--;
}
        
        if(i===7 && j===0){
            cammino=50;
            tavola.childNodes[i].childNodes[j].id="cammino"+cammino;
        }
        if(i===6 && j===0){
            cammino=51;
            tavola.childNodes[i].childNodes[j].id="cammino"+cammino;
        }
        


        }
    }

    }

    function elementiextra(){
        let tavola=document.querySelector("table");
        let star=document.createElement("img");
        let arrow=document.createElement("img");
        let container_arrow=document.createElement("div");
        arrow.src="immagini/freccia.png";
        arrow.title="arrow";
        arrow.alt="arrow";
        let newarrow=[]
        let newcontainer_arrow=[]
        for(let i=0; i<4; i++){
           
            newarrow[i]=arrow.cloneNode();
            newarrow[i].classList.add("arrow");
            
            newcontainer_arrow[i]=container_arrow.cloneNode();
container_arrow.classList.add("container_arrow");
            
        }
       


        arrow.classList.add("arrow");
        star.src="immagini/star.png";
        star.alt="stella";
        star.title="stella";
        star.classList.add("star");
        for(let i=0; i<L; i++){
            for(let j=0;j<L; j++ ){
                if((i==2 && j==6) || (i==6 && j==12) || (i==12 && j==8) ||  (i==8 && j==2) ){
                    let newstar=star.cloneNode();
                tavola.childNodes[i].childNodes[j].appendChild(newstar);
                newstar.id="star"+i;
                

                    }
                    
                    if(i==7 && j==0){
                    tavola.childNodes[i].childNodes[j].appendChild(newcontainer_arrow[0]);
                   
             newcontainer_arrow[0].appendChild(newarrow[0]);
              newcontainer_arrow[0].classList.add("container0")
              newarrow[0].classList.add("arrow0")
                }
                if(i==0 && j==7){
                    tavola.childNodes[i].childNodes[j].appendChild(newcontainer_arrow[1]);
                   
              newcontainer_arrow[1].appendChild(newarrow[1]);
              newcontainer_arrow[1].classList.add("container1");
              newarrow[1].classList.add("arrow1");
           

                }
                if(i==7 && j==14){
                    tavola.childNodes[i].childNodes[j].appendChild(newcontainer_arrow[2]);
                   
                    newcontainer_arrow[2].appendChild(newarrow[2]);
                    newcontainer_arrow[2].classList.add("container2");
                    newarrow[2].classList.add("arrow2");
                }
                if(i==14 && j==7){
                    tavola.childNodes[i].childNodes[j].appendChild(newcontainer_arrow[3]);
                   
                    newcontainer_arrow[3].appendChild(newarrow[3]);
                    newcontainer_arrow[3].classList.add("container3");
                    newarrow[3].classList.add("arrow3");
                }

               
            }
        }
    }
    function torna_tana(giocatore, i){//passiamo il gicoatore e il numero della pedina
        let tavola=document.querySelector("table");
        giocatore.position[i]=-1;
  
        switch(giocatore.colore){
       
            case "rosso":
            switch(i){
                case 0: 
                tavola.childNodes[2].childNodes[2].appendChild(giocatore.array[0]);
                break;
                case 1:
                    tavola.childNodes[2].childNodes[3].appendChild(giocatore.array[1]);
                    break;
                case 2: 
                    tavola.childNodes[3].childNodes[2].appendChild(giocatore.array[2]);
                    break;
                case 3: 
                    tavola.childNodes[3].childNodes[3].appendChild(giocatore.array[3]);
                    break;


            }
            break;
            case "blu":
                switch(i){
                    case 0: 
                    tavola.childNodes[2].childNodes[11].appendChild(giocatore.array[0]);
                    break;
                    case 1:
                        tavola.childNodes[2].childNodes[12].appendChild(giocatore.array[1]);
                        break;
                    case 2: 
                        tavola.childNodes[3].childNodes[11].appendChild(giocatore.array[2]);
                    case 3: 
                        tavola.childNodes[3].childNodes[12].appendChild(giocatore.array[3]);
                        break;
    
    
                }
                break;
                case "verde":
                    switch(i){
                        case 0: 
                        tavola.childNodes[11].childNodes[2].appendChild(giocatore.array[0]);
                        break;
                        case 1:
                            tavola.childNodes[11].childNodes[3].appendChild(giocatore.array[1]);
                            break;
                        case 2: 
                            tavola.childNodes[12].childNodes[2].appendChild(giocatore.array[2]);
                            break;
                        case 3: 
                            tavola.childNodes[12].childNodes[3].appendChild(giocatore.array[3]);
                            break;
        
        
                    }
                    break;
                case "giallo":
                    switch(i){
                        case 0: 
                        tavola.childNodes[11].childNodes[11].appendChild(giocatore.array[0]);
                        break;
                        case 1:
                            tavola.childNodes[11].childNodes[12].appendChild(giocatore.array[1]);
                            break;
                        case 2: 
                            tavola.childNodes[12].childNodes[11].appendChild(giocatore.array[2]);
                            break;
                        case 3: 
                            tavola.childNodes[12].childNodes[12].appendChild(giocatore.array[3]);
                            break;
        
        
                    }
                    





        }

    }
// inserisco nelle corispettive tane le pedine di ciascun giocatore che controlliamo
function creaplayer(giocatore){ 
    for(let i=0; i<4; i++){
     
            let pedina=document.createElement("div");
            pedina.classList.add("bordo");
            let interno=document.createElement("div");
            interno.classList.add("pedina_"+ giocatore.colore+"_"+i);
            pedina.appendChild(interno);
            
        

        
        giocatore.array[i]=pedina;
        giocatore.position[i]=-1;
    }


    let tavola=document.querySelector("table");
for(let i=0; i<L; i++){
    for(let j=0; j<L; j++){
        switch(giocatore.colore){
            case "giallo":
            
                tavola.childNodes[11].childNodes[11].appendChild(giocatore.array[0]);
                tavola.childNodes[11].childNodes[12].appendChild(giocatore.array[1]);
                tavola.childNodes[12].childNodes[11].appendChild(giocatore.array[2]);
                tavola.childNodes[12].childNodes[12].appendChild(giocatore.array[3]);
                break;
        
            case "rosso":
            tavola.childNodes[2].childNodes[2].appendChild(giocatore.array[0]);
            tavola.childNodes[2].childNodes[3].appendChild(giocatore.array[1]);
            tavola.childNodes[3].childNodes[2].appendChild(giocatore.array[2]);
            tavola.childNodes[3].childNodes[3].appendChild(giocatore.array[3]);
            break;
            case "verde":
            tavola.childNodes[11].childNodes[2].appendChild(giocatore.array[0]);
            tavola.childNodes[11].childNodes[3].appendChild(giocatore.array[1]);
            tavola.childNodes[12].childNodes[2].appendChild(giocatore.array[2]);
            tavola.childNodes[12].childNodes[3].appendChild(giocatore.array[3]);
          break;
            case "blu":
            tavola.childNodes[2].childNodes[11].appendChild(giocatore.array[0]);
            tavola.childNodes[2].childNodes[12].appendChild(giocatore.array[1]);
            tavola.childNodes[3].childNodes[11].appendChild(giocatore.array[2]);
            tavola.childNodes[3].childNodes[12].appendChild(giocatore.array[3]);
               
            
        }
    }
}

}
function a_chi_sta(tocca){
    switch(tocca){
            case 0:
            giocante=red_player;
            break;
            case 1: 
            giocante=blue_player;
            break;
            case 2: 
            giocante=yellow_player;
            break;
            case 3:
            giocante=green_player;
            break;
            default:
          

            }
        
        }
creatavola();
coloratavola();
elementiextra();
creaplayer(red_player);

creaplayer(green_player);

creaplayer(blue_player);
creaplayer(yellow_player);
let giocatori=[red_player,blue_player,green_player,yellow_player];
// questa funzione mi permette di capire se posso o meno mangiare una pedina avversaria
function controlliamo(proxcasella, giocante,k){
    for(let i=0; i<4; i++){
        
        if((giocatori[i].position.indexOf(proxcasella)!= -1)&& proxcasella !=-1){
         
           
          
            if((giocatori[i].team===giocante.team) || (proxcasella ==47 || proxcasella ==8 || proxcasella ==21 || proxcasella ==34)||
             (giocatori[i].colore=="rosso" && proxcasella==0) || (giocatori[i].colore=="blu" && proxcasella==13)
             || (giocatori[i].colore=="giallo" && proxcasella==26)
             || (giocatori[i].colore=="verde" && proxcasella==39)) {
                controllo=false;
                // tale controllo viene effettuato per verificare se sto giocando contro il computer 
                if(jugador2.nome=="CPU"){

                    if(valutazione)
                valutation[k]=0;
                }
                
                
            }
            else  {
                if(jugador2.nome=="CPU"){
                    if(valutazione)
                valutation[k]=8;
                }
                let giocatore_target=giocatori[i];
            let pedina_target=giocatori[i].position.indexOf(proxcasella);
          
            document.getElementById("cammino"+proxcasella).appendChild(giocante.array[k]);
            torna_tana(giocatore_target,pedina_target);
            giocante.position[k]=proxcasella;
         
            
            
            controllo=false;
    
            }

        }
    }
    

   }  
   function corrisponde_uscita(giocatore){
    switch(giocatore.colore){
        case "rosso":
            freccia_casella=50;
            break;
        case "blu":
            freccia_casella=11;
            break;
        case "giallo":
            freccia_casella=24;
            break;
        case "verde":
            freccia_casella=37;
            break;

    }

   }
   function casella_score(giocatore){
    switch (giocatore.colore){
     case "rosso":
            wincase=6;
            break;
        case "blu":
            wincase=6;
            break;
        case "giallo":
            wincase=0;
            break;
        case "verde":
            wincase=0;
            break;
    }

   }
   // funzione per ricominciare da capo
   function restart(){
    for(let i=0; i<4; i++){
    torna_tana(red_player,i);
    torna_tana(yellow_player,i);
    torna_tana(blue_player,i);
    torna_tana(green_player,i);
    }
    scoreteam=[0,0];
    jugador1.punteggio=0;
    jugador2.punteggio=0;
    giococontainer.classList.remove("flashing-border");
    bottone.disabled=false;
    nome_container.textContent="Tocca   a   "+jugador1.nome;
    let scoring1=document.getElementById("score1");
    let scoring2=document.getElementById("score2");
    scoring1.textContent=jugador1.punteggio;
    scoring2.textContent=jugador2.punteggio
}
// controlla se devo cambiare la direzione della pedina e indirizzarla alla freccia
function verso_vittoria(giocante,k, mossa){
    
    corrisponde_uscita(giocante);

    if(giocante.position[k]+mossa>freccia_casella && giocante.position[k]<=freccia_casella && giocante.position[k]<100){
       
        
        controllo=false;
        if(jugador2.nome=="CPU"){
            if(valutazione)
        valutation[k]=7;
        }
        if((jugador2.nome=="CPU" && !valutazione) || jugador2.nome !="CPU"){
      
        let sentiero=document.getElementsByClassName("sentiero_"+giocante.colore);
        
       
       
        let avanzo=((giocante.position[k]+mossa)-freccia_casella);
    
    
       let appavanzo=avanzo;
        if(giocante.colore=="rosso" || giocante.colore=="blu"){
          

            if(giocante.colore=="blu" && avanzo==1){
            appavanzo=0;
         
            }
        sentiero[appavanzo].appendChild(giocante.array[k]);
    
        giocante.position[k]=100+avanzo;
        }
        else{
            appavanzo=avanzo;
           
            if(giocante=="verde" && avanzo==1)
            appavanzo=0;
          
        sentiero[6-appavanzo].appendChild(giocante.array[k]);
        giocante.position[k]=100+(6-avanzo)
      
        }
    



}
    }
}
// calcola se la pedina riesce a entrare o meno nella casella score
function vdeiamosevinci(giocante,mossa,k){
if(giocante.position[k]>=100){
    controllo=false;
    if(jugador2.nome=="CPU"){
        if(valutazione)
    valutation[k]=4;
    }

    let sentiero=document.getElementsByClassName("sentiero_"+giocante.colore);
    let newpos=(giocante.position[k]-100)+mossa
   
    if(giocante.colore=="rosso" || giocante.colore=="blu"){
        casella_score(giocante);
        if(jugador2.nome=="CPU"){
            if(valutazione){
                if(newpos==wincase)
        valutation[k]=10;
            }
        }
        if((jugador2.nome=="CPU" && !valutazione) || jugador2.nome !="CPU"){
        if(newpos<=6){
        sentiero[newpos].appendChild(giocante.array[k]);  
        giocante.position[k]=100+newpos;
        } 
    }
        
    }
    else {
        if((giocante.position[k]-100)-mossa>=0){
            newpos=(giocante.position[k]-100)-mossa;
            if(jugador2.nome=="CPU"){
                if(valutazione){
                    if(newpos==wincase)
            valutation[k]=10;
                }
            } 
            if((jugador2.nome=="CPU" && !valutazione) || jugador2.nome !="CPU"){  
        sentiero[newpos].appendChild(giocante.array[k]);
        giocante.position[k]=100+newpos; 
            }
    }

}



    
}
}
//verifica se siamo arrivati alla casella score e in caso da un punto alla squadra corrispettiva
function punto(giocante,k ){

    casella_score(giocante);
 if(giocante.position[k]==100+wincase){
        scoreteam[giocante.team-1]++;
        ordine_gioco[0].punteggio=scoreteam[0] ;
        ordine_gioco[1].punteggio=scoreteam[1]; 
            let scoring1=document.getElementById("score1");
            let scoring2=document.getElementById("score2");
            scoring1.textContent=jugador1.punteggio;
            scoring2.textContent=jugador2.punteggio
       
       



    } 
    ordine_gioco[0].punteggio=scoreteam[0] ;
    ordine_gioco[1].punteggio=scoreteam[1];
    let squad=scoreteam.indexOf(4) ;
    let winpopup=document.getElementById("vittoria")
    let testocontainer=document.getElementsByClassName("content")
    let actions=document.getElementsByClassName("actions")
  // verifico se una delle due squadre ha fatto 4 punti, ovvero se ha vinto
    if(squad !=-1){
        bottone.disabled=true;
        sta_PC=true;


      
    if(squad==0){
        winner=ordine_gioco[0].nome;
        testocontainer[0].textContent="Vince la squadra di "+ ordine_gioco[0].nome;
       winpopup.style.background="red";
        winpopup.style.borderColor="yellow";
        
        
      


        
    }
    if(squad==1){
        winner=ordine_gioco[1];
        testocontainer[0].textContent="Vince la squadra di " +ordine_gioco[1];
       winpopup.style.background="green";
       winpopup.style.borderColor="#4c87af";
       
      

    }

let restarto=document.createElement("button");

restarto.id=restart;
restarto.textContent= "↺";

winpopup.appendChild(testocontainer[0]);

winpopup.appendChild(actions[0]);

restarto.onclick= function(){ 
    winpopup.style.display="none"
    restart(); }
    if(volte){
actions[0].appendChild(restarto)
volte=false;
    }


// invio al server php i punteggi degli utenti e il risultato della partita
let punteggio1=jugador1.punteggio;
let punteggio2=jugador2.punteggio;



winpopup.style.display="flex";


let url = 'php/raccolta_dati.php';


let formData = new FormData();

formData.append('punteggio1', punteggio1);
formData.append('punteggio2', punteggio2);
formData.append('winner', winner);


let options = {
  method: 'POST',
  body: formData
};
fetch(url, options)
  .then(response =>{
   
  return  response.json()})
  .then(data => {
    console.log(data)
    if (!data['result']) {
      winpopup.textContent = data['text'];
    }
  })
  .catch(error => {
    console.error('Errore durante la richiesta:', error);
  });




}


}
// il dado utilizzato è truccato affinchè ci capitino più spesso i numeri 1 e 6, i più rilevanti per il gioco
function generaNumeroCasuale() {
    var randomNumber = Math.random();
    
    // Se il numero casuale è inferiore a 0.3, restituisci 1
    if (randomNumber < 0.2) {
      return 1;
    }

    if (randomNumber >= 0.2 && randomNumber < 0.7) {
      return Math.floor(Math.random() * 4) + 2;
    }

    return 6;
  }


  





    function createDice(number) {
        const dotPositionMatrix = {
            1: [
                [50, 50]
            ],
            2: [
                [20, 20],
                [80, 80]
            ],
            3: [
                [20, 20],
                [50, 50],
                [80, 80]
            ],
            4: [
                [20, 20],
                [20, 80],
                [80, 20],
                [80, 80]
            ],
            5: [
                [20, 20],
                [20, 80],
                [50, 50],
                [80, 20],
                [80, 80]
            ],
            6: [
                [20, 20],
                [20, 80],
                [50, 20],
                [50, 80],
                [80, 20],
                [80, 80]
            ]
        };
    
        const dice = document.createElement("div");
    
        dice.classList.add("dice");
    
        for (const dotPosition of dotPositionMatrix[number]) {
            const dot = document.createElement("div");
    
            dot.classList.add("dice-dot");
            dot.style.setProperty("--top", dotPosition[0] + "%");
            dot.style.setProperty("--left", dotPosition[1] + "%");
            dice.appendChild(dot);
        }
    
        return dice;
    }
    
    function randomizeDice(diceContainer, numberOfDice, random) {
        diceContainer.innerHTML = "";
    
        for (let i = 0; i < numberOfDice; i++) {
            

           

            const dice = createDice(random);

    
            diceContainer.appendChild(dice);
        }
        
    }
    
    const NUMBER_OF_DICE = 1;
    
    const btnRollDice = document.getElementById("dadus");
    
    let diceContainer=document.createElement("div");
    diceContainer.classList.add("dice-container")

    
 
  
    
    
       
// tale funzione viene invocata per far uscire dalla tana una pedina
  
function esci_tana(giocante, i){
    giocante.array[i].disabled=true;
    
    let tavola=document.querySelector("table");
    switch(giocante.colore){
                    case "rosso":
                      
                    controlliamo(0,giocante,i);
                    if(controllo){
                    tavola.childNodes[6].childNodes[1].appendChild(giocante.array[i]);
                      giocante.position[i]=0;
                    }
                      
                    break;
                    case "blu":
                    
        
                    controlliamo(13,giocante,i);
                    if(controllo){
                      giocante.position[i]=13;
                      tavola.childNodes[1].childNodes[8].appendChild(giocante.array[i]);
                    }
                        break;
                    case "giallo":
                    
                        controlliamo(26,giocante,i);
                        if(controllo){
                        tavola.childNodes[8].childNodes[13].appendChild(giocante.array[i]);
                          giocante.position[i]=26;
                        }
                        break;
                    case "verde":
                    
                    
                    controlliamo(39,giocante,i);
                    if(controllo){
                    tavola.childNodes[13].childNodes[6].appendChild(giocante.array[i]);
                      giocante.position[i]=39;
                    }
                        break;
                }
                controllo=true;
             
               

                
                
              

             
            

}
// decreto casualmente chi comincia
let turno=document.getElementById("player_"+comincia);
a_chi_sta(comincia);

randomizeDice(diceContainer, NUMBER_OF_DICE,Math.round(Math.random()*5)+1);

let recipiente=document.getElementById("dado-container");
a_chi_sta(comincia);
recipiente.appendChild(diceContainer);

let bottone=document.createElement("button")
bottone.id="dadus";
bottone.textContent="Lancia!";
recipiente.appendChild(bottone)

let chigioca=jugador1.nome;

let nome_container=document.getElementById("a_chi_sta")
// a ogni turno illumino il riquadro del personaggio e dico a quale utente tocca lanciare il dado 

let colorato=document.createElement("div");

colorato.textContent="Tocca a "+chigioca;
nome_container.appendChild(colorato);

let giococontainer=document.getElementById("player_"+comincia);
let giococontainernew;
    

     giococontainer.classList.add("flashing-border");

    bottone.onclick=function (){
      
        
        bottone.disabled=true;
        var audio=new Audio("audio/rumoredadi.wav")
        if(jugador2.nome=="CPU")
            valutazione=false;
        function letsplay(){
            // funzione per la gestione del passaggio del turno
            function passaturno(){
                bottone.disabled=true
                
             
                let attesa= setTimeout( ()=>{
                bottone.disabled=false;
               
                if(mossa!=6){
                           
                           giococontainer.classList.remove("flashing-border");
                            chigioca=(chigioca==jugador1.nome)?jugador2.nome: jugador1.nome;
                         
                           giococontainernew.classList.add("flashing-border")
                           nome_container.textContent="Tocca   a     "+ chigioca;
                      
                           if(jugador2.nome=="CPU")
                           turnoPc();
                         
                
                }
            } ,3000)
            
        }
            audio.play();
            
      
        
        function inizio_gioco (){
            if(jugador2.nome=="CPU")
            sov=true;
            // lancio i dadi e viene un numero casuale
        mossa=generaNumeroCasuale();
        controllo=true;  
      a_chi_sta(comincia)
    //  giocante=red_player;
       const interval = setInterval(() => {
        randomizeDice(diceContainer, NUMBER_OF_DICE,Math.round(Math.random()*5)+1);
       }, 50);
   
       setTimeout(() => {clearInterval(interval)
        randomizeDice(diceContainer, NUMBER_OF_DICE, mossa);
        }, 1000);

   
        giococontainer=document.getElementById("player_"+comincia);
    

      
        
   
  
    // a ogni cambio turno se non è uscito 6 cambio colore
        if(mossa !=6)
       comincia= (comincia+1)%4

        
   
 
      
     giococontainernew=document.getElementById("player_"+comincia);
            // se sono tutti in tana faccio uscire la prima pedina 
        if(giocante.position[0]==-1 && giocante.position[1]==-1 && giocante.position[2]==-1 && giocante.position[3]==-1 ){

     
  
            if(mossa==1 || mossa==6){
             let esci=setTimeout( ()=>{
            ;
             
             esci_tana(giocante, 0)},1500);
            }
            
                // se gioco contro il pc poi sarà il suo di turno
               if(jugador2.nome=="CPU"){
               
             
                if(!valutazione)
               passaturno();
               else 
               sov=false;
               } else
               passaturno();
        
               

               
               
    
              
            
        }
    }
    inizio_gioco();  
    // assegno alle pedine la possibilità di muoversi se cliccate      
       for(let m=0; m<4; m++){
    
        giocante.array[m].disabled=false;
   
            
            giocante.array[m].onclick= function(){
                if(giocante.array[m].disabled)
                return;
                giocante.array[m].disabled=true;
                

                if(giocante.position[m]==-1){
    tavola=document.querySelector("table")
                    
 
            // se sono ancora in tana e vengono cliccate allora escono
            if((mossa ==1 || mossa ==6) && (giocante.position[m] ==-1)){
              
                
            esci_tana(giocante,m);
         
            passaturno();
            
            
           
        


            }
            }
       
            else if(giocante.position[m]!=-1){ 
                bottone.disabled=false;
               //altrimenti si spostano lungo il cammino con gli eventuali controlli inizializzati prima
               
                

               let proxcasella=(giocante.position[m]+mossa)%52;
               controlliamo(proxcasella, giocante, m);
               vdeiamosevinci(giocante,mossa,m);
               verso_vittoria(giocante,m,mossa);
               punto(giocante,m);
               
               if(controllo){
                
                giocante.position[m]=proxcasella;
               
                document.getElementById("cammino"+giocante.position[m]).appendChild(giocante.array[m]);

          
                
             
               }
               
               passaturno();
            
           
                        }
                  
                            }
                              
                        }
                        // funzione per la CPU per verificare se possa o meno uscire dalla tana (uscita occupata da pedina alleata)
                    function controllo_sovrapposizione(giocante, m){
                        let nextmove;
                        switch (giocante.colore) {
                            case "rosso":
                                nextmove=0;
                               
                                break;
                            case "blu":
                                nextmove=13;
                                break;
                            case "giallo": 
                                nextmove=26;
                                break;
                            case "verde":
                                nextmove=39
                                break;
                        }
                        for(let i=0; i<4; i++){
                           
                    
                           if(giocatori[i].position.indexOf(nextmove)!= -1 && giocatori[i].position.indexOf(nextmove)!= m){
                            if(giocatori[i].team==giocante.team){
                             
                            return false;
                            }
                           }
                    
                        }
                        return true;
                    
                    
                       }        
                              // passaggio di turno tra cpu e giocatore              
                       function ripasso_turno(){
                                if(mossa==6){
                                          
                                            sta_PC=false;
                             
                                turnoPc();
                                }else{
                                    let aripasso=setTimeout(()=>{
                                    giococontainer.classList.remove("flashing-border");
                                    chigioca=jugador1.nome;
                                  
                                   giococontainernew.classList.add("flashing-border")
                                   nome_container.textContent="Tocca   a   "+ chigioca;
                                  
                                     bottone.disabled=false;},2000 )
                                }
                            }    
                    // la cpu funziona in modo semplice prima ha una fase di valutazione in cui seleziona la miglior mossa tra
                    // mangiare uscire di tana entrare nella freccia o vincere
                    // scelte tramite un array di valutazione
                    // e una volta scelto esegue
                       function turnoPc(){
                        
                        if(mossa !=6 || !sta_PC){
                          
                           sta_PC=true
                            valutazione=true;
                            bottone.disabled=true;
                                     let giocoPC=setTimeout(
                            
                                        ()=>{       
                                           
                                         
                                            inizio_gioco();
                            if(sov){
                                            for(let m=0; m<4; m++){
                                                
                     giocante.array[m].disabled=true;
                             if(giocante.position[m]==-1){
                    tavola=document.querySelector("table")
                         giocante.array[m].disabled=true;
                         if((mossa ==1 || mossa ==6) && (giocante.position[m] ==-1)){   
                            if(controllo_sovrapposizione(giocante, m))
                            valutation[m]=6;
                            else 
                                valutation[m]=0;
                         }
                         }
                        
                         else if(giocante.position[m]!=-1){
                            valutation[m]=1;   
                            proxcaselle_Pc[m]=(giocante.position[m]+mossa)%52;
                            controlliamo(proxcaselle_Pc[m], giocante, m);
                            vdeiamosevinci(giocante,mossa,m);
                            verso_vittoria(giocante,m,mossa);
                                     }    
                                       
                                         
                                     }
                    
                    
                              
                      let maxIndex = 0;
                      let maxValue = valutation[0];
                      valutazione=false;
                    
                      for (let ii = 0; ii < valutation.length; ii++) {
                        if (valutation[ii] > maxValue) {
                          maxIndex = ii;
                          maxValue = valutation[ii];
                        }
                    }
                       
                        
                    let Pc_mossa=setTimeout( ()=>{
                    if(maxValue==6){
                        esci_tana(giocante,maxIndex);
                    }
                    if(maxValue==4 || maxValue==10)
                      vdeiamosevinci(giocante,mossa,maxIndex);
                     if(maxValue==8) 
                     controlliamo(proxcaselle_Pc[maxIndex], giocante,maxIndex)
                    if(maxValue==7){
                        verso_vittoria(giocante,maxIndex,mossa);
                        
                    }
                    if(maxValue==1){
                        giocante.position[maxIndex]=proxcaselle_Pc[maxIndex];
                        document.getElementById("cammino"+giocante.position[maxIndex]).appendChild(giocante.array[maxIndex]);
                    
                    
                                   
                    }
                    valutation=[0,0,0,0];
                    punto(giocante,maxIndex);
                    
                    ripasso_turno();
                    
                    
                                        },2000)
                                          } 
                                       else 
                                     ripasso_turno();
                                  }, 3000
                                     )                      
                    
                                    } else 
                    
                                    bottone.disabled=false;
                                }

                   
                    
                    
                    }
                    
letsplay(); 

                }
           // se si clicca Nuova Partita parte un avviso di comferma 
                let newmatch=document.getElementById("Ricominciamo");
                newmatch.addEventListener("click", ()=>{
             
                    let popup=document.createElement("div");
                    popup.textContent="Sei sicuro di ricominciare?";
                    popup.id="popup"
                    let yes=document.createElement("button");
                    yes.textContent="Yes";
               
                    let no=document.createElement("button");
                    no.textContent="No"
                    let corpo=document.querySelector("body");
                    popup.appendChild(yes);

                    popup.appendChild(no);
                    corpo.appendChild(popup);
                    no.onclick=function(){
                        corpo.removeChild(popup);
                    }
                    yes.onclick=function (){restart();
                        corpo.removeChild(popup);
                    };


                }  )
             


document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let invalid=document.getElementById("invalido")
    // Ottieni i dati del modulo
    var firstName = document.getElementById('firstName');
    var lastName = document.getElementById('lastName');
    var user=document.getElementById('user');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var password2=document.getElementById("password2");
    const Regexuser=/^[a-zA-Z0-9_.]{6,18}$/;
    const Regexpassword=/^(?=.*[A-Z])(?=.*\d).{8,18}$/;
    const Regexemail = /^\S+@\S+\.\S+$/;
    if(!(firstName.checkValidity()) || !(lastName.checkValidity())){
      invalid.style.display="block"
      invalid.textContent="Nome e Cognome devono contenere solo lettere dell'alfabeto e cominciare con le lettere maiuscole";
      return;

    }
    if(!Regexuser.test(user.value)){
      invalid.style.display="block";
      invalid.textContent="user non valido, deve contere dai 6 a 18 caratteri";
      return;
    }
    if(!Regexemail.test(email.value)){
      invalid.style.display="block";
      invalid.textContent="email non valida";
      return;
    }
    if(!Regexpassword.test(password.value)){
      invalid.style.display="block"
      invalid.textContent="la password non rispetta le richieste sopra indicate"
      return;
    }
    if(password.value !==password2.value){
  
      invalid.style.display="block";
      invalid.textContent="le password non corrispondono"
      return;
    }
else{
  

  
  
    let rf=document.getElementById("registrationForm")
   
    fetch("php/registrazione.php",{
      method: 'POST',
      body: new FormData(rf)
    })
  

    .then((response)=>
      {
        if(response.ok)
        console.log("tutto ok")
        else 
        console.log("non è tutto ok")

     return  response.json();
      })

   
    .then((data)=>{

      if(!data['result']){
        invalid.style.display="block";
        invalid.textContent=data["text"];
      } else{
        window.location.replace('index.php');
      }
      
    })
    .catch((error)=>{
      console.log("Errore", error)
    })
  }
}


);
  

 
  
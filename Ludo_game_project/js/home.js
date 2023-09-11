const loginButton = document.getElementById("loginbutton");
const loginDropdown = document.getElementById("loginDropdown");
const loginForm=document.getElementById("formlogin")
let errmsg= document.getElementById("errore");
conto=0;
loginButton.addEventListener("click", function() {
  loginDropdown.classList.toggle("show");
  
});
let Data= new FormData();

const login=document.getElementById("acc");

 login.addEventListener( "click", (e)=>{
  e.preventDefault();
let user=document.getElementById("user").value;
let psw=document.getElementById("password").value;
Data.append("user",user);
Data.append("password",psw);

const regExuser=/^[a-zA-Z0-9_.]{6,20}$/;
const regExpsw=/^(?=.*[A-Z])(?=.*\d).{8,18}$/;
if(!regExpsw.test(psw) || !regExuser.test(user)){
  conto++;

errmsg.classList.add("err");
errmsg.textContent="Username e/o Password non validi"
}
else{


  fetch("php/login.php",{
    method: 'POST',
    body: new FormData(loginForm)
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

  if(data['result'])
  window.location.replace("menu.php");
  else{
    
    errmsg.classList.add("err");
    errmsg.textContent=' ';
    errmsg.textContent=data['text'];
  }
})
.catch((error)=>{
  console.log("Errore", error)
})
}
}


);


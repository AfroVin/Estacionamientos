function Login() {
    var correo = document.login.email.value;
    var pass = document.login.contra.value;
    document.getElementById("correoAlerta").innerHTML= "";
    document.getElementById("alertaPass").innerHTML ="";

    if (correo=="correoprueba@correo.com" && pass=="1234567890"){
      
        //navegar a url
        const path = location.pathname;
        const pathNav = path.slice(1,-10)+'index.html';
         window.location.assign(pathNav);
        
  }  if (correo !="correoprueba@correo.com"){
   
    document.getElementById("correoAlerta").innerHTML +=
      "<p>Ingresar Correo Válido</p>"
     
  }if (pass!="1234567890"){
    document.getElementById("alertaPass").innerHTML +=
      "<p>Contraseña Inválida</p>"
  }

};

function valContra(){
  
  var correo2 = document.rec.correoContra.value;
  if (correo2 !="correoprueba@correo.com"){
   
    window.alert('Correo Invalido')}
  else {
    window.alert('Se ha enviado el codigo al correo')
}
}

function valCode(){
  document.getElementById("nav2").innerHTML="";
  var correo3 = document.rec2.code.value;
  
  if (correo3 =="1234"){
    window.location.assign("https://www.w3schools.com")
        

    }
    if (correo3!="1234"){
      window.alert('Codigo Invalido')

    }
  
}


















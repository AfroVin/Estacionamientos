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

//validaciones correo recuperar contrasena
function valContra(){
  
  var correo2 = document.rec.correoContra.value;
  if (correo2 !="correoprueba@correo.com"){
   
    window.alert('Correo Invalido')}
  else {
    window.alert('Se ha enviado el codigo al correo')
}
}

//validacion del codigo recuperar contrasena

function valCode(){
  
  var correo3 = document.rec2.code.value;
  
  if (correo3 =="1234"){
    const path = location.pathname;
    const pathNav = path.slice(1,-20)+'recuperarContra2.html';
     window.location.assign(pathNav);
        

    }
    if (correo3!="1234"){
      window.alert('Codigo Invalido')

    }  
}
// Validacion de Recuperar contrasena
function valContra2(){
  document.getElementById("p1").innerHTML= 
    ""
  
  var pass1= document.contra2.pass1.value;
  var pass2= document.contra2.pass2.value;
  
  if (pass1.trim()!=pass1){

    window.alert("No puede contener espacios en blanco")
  }
  if (pass1.length==0){

    window.alert("Debe ingresar una contraseña")
  }
  if (pass1.length<10){

    window.alert("Minimo 10 caracteres")
  }
  
  if (pass1 != pass2){

    document.getElementById("p1").innerHTML+= 
    "<p>La contraseña no coincide</p>"
  }
  if (pass1 == pass2 && pass1.trim()==pass1 && pass1.length>=10){
    const path = location.pathname;
        const pathNav = path.slice(1,-21)+'login.html';
         window.location.assign(pathNav);

  }

}


















function Login() {
    var correo = document.login.email.value;
    var pass = document.login.contra.value;
    
    if (correo=="correoprueba@correo.com" && pass=="1234567890"){
      
        //navegar a url
        const path = location.pathname;
        const pathNav = path.slice(1,-10)+'index.html';
         window.location.assign(pathNav);
        
  }  if (correo !="correoprueba@correo.com"){
    window.alert('Correo Invalido')
  }if (pass!="1234567890"){
    window.alert('Contraseña Invalida')
  }

} 
    






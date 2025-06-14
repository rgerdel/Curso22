 function validar_datos() {
    
    let usuario = document.getElementById("usuario").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
     console.log(usuario)
     console.log(email)
     console.log(password)





    
    let registroObjeto = {

        fecha: new Date().toLocaleDateString(),
        hora: new Date().toLocaleTimeString(),
        usuario: usuario.toLowerCase().trim(),
        email: email.toLowerCase().trim(),
        password: password.trim(),
};

 let registroRickMorty = [];

    registroRickMorty.push(registroObjeto)
    localStorage.setItem(`RRM-${email.toLowerCase()}`, JSON.stringify(registroRickMorty));
  
 
 }

 function registrar_usuario() {
   //Paso los valores del formulario de registro
   let usuario = document.getElementById("usuario").value;
   let email = document.getElementById("email").value;
   let password = document.getElementById("password").value;
   console.log("prueba")   
   console.log(usuario)
   console.log(email)
   console.log(password)
   //let confirmPassword = document.getElementById("confirmPassword").value;
   let usuarioRegex = /^[a-zA-Z0-9_-]{3,}$/;
   let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
   let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,20}$/;
   //let usuarios = localStorage.getItem("usuarios") || [];
   let error = true;

   console.log("prueba")   
   console.log(usuario)
   console.log(email)
   console.log(password)
   console.log(error)
   //Valido que el campo usuario no este el blanco
   if (usuario === "") {
      alert("El usuario no puede estar vacío.");
      error = false;
     } else if (!usuarioRegex.test(usuario)) {    //Valido que el campo usuario sea mayor a 3 caracteres
       alert("El usuario debe tener al menos 3 caracteres y solo puede contener letras, números, guiones bajos y guiones.");
       error = false;
    } else  {
       error = true;
    }

   if (email === "") {
      alert("El email no puede estar vacío.");
      error = false;
    } else if  (!emailRegex.test(email)) {
       alert("El email no es válido.");
      error = false;
    } else {
       error = true;
   }

   if (password === "") {
      alert("La contraseña no puede estar vacía.");
      error = false;
    } //else if (!passwordRegex.test(password)) {
   //    alert("La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número.");
   //    error = false;
   // } else {
   //    error = true;
   // }
   

if (error) {
   console.log("error")
   let registroObjeto = {
        fecha: new Date().toLocaleDateString(),
        hora: new Date().toLocaleTimeString(),
        usuario: usuario.toLowerCase().trim(),
        email: email.toLowerCase().trim(),
        password: password.trim(),
   };
   //Guardo los datos del registro en un array en el localstorage
   let registroRickMorty = [];

    registroRickMorty.push(registroObjeto)
    //Almacena los datos (key como llave unica, los datos tomados de registroObjeto)
    localStorage.setItem(`RRM-${email.toLowerCase()}`, JSON.stringify(registroRickMorty));
    alert("Usuario registrado con éxito")
}
}

function iniciarSesion(){
   let email = document.getElementById("emailIS").value;
   let password = document.getElementById("passwordIS").value;
   let usuario = localStorage.getItem(`RRM-${email.toLowerCase()}`) || [];
   usuario = JSON.parse(usuario);
   let usuarioEncontrado = usuario.find(
    usuario => usuario.email === email && usuario.password === password
  );
  
  if (usuarioEncontrado) {
      sessionStorage.setItem(`RRM-${email.toLowerCase()}`, email);
      window.location.href = `menu.html?email=${email}`;
  } else {
      alert("Usuario y contraseña incorrrecto, favor verifique e intente nuevamente")
  }   
}

function salir_logout() {
  console.log(email)
  if (!sessionStorage.getItem(`RRM-${email.toLowerCase()}`)) {
    alert("No hay un usuario conectado.");
    return;
  }
  sessionStorage.removeItem(`RRM-${email.toLowerCase()}`);
  window.location.href = "index.html";
}

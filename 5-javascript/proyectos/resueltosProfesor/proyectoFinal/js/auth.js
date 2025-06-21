function register() {
  const user = document.getElementById("usuario").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const userRegex = /^[a-zA-Z0-9_-]{3,}$/;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  let usuarios = localStorage.getItem("usuarios") || [];
  let errores = [];
  if (user === "") {
    errores.push("El usuario no puede estar vacío.");
  }
  if (!userRegex.test(user)) {
    errores.push(
      "El usuario debe tener al menos 3 caracteres y solo puede contener letras, números, guiones bajos y guiones."
    );
  }
  if (email === "") {
    errores.push("El email no puede estar vacío.");
  }
  if (!emailRegex.test(email)) {
    errores.push("El email no es válido.");
  }
  if (password === "") {
    errores.push("La contraseña no puede estar vacía.");
  }
  if (!passwordRegex.test(password)) {
    errores.push(
      "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número."
    );
  }
  if (password !== confirmPassword) {
    errores.push("Las contraseñas no coinciden.");
  }
  if (errores.length > 0) {
    errores.forEach((error) => {
      document.getElementById(
        "resultado"
      ).innerHTML += `<p class="error">${error}</p>`;
    });
  } else {
    document.getElementById("resultado").innerHTML =
      "<p class='success'>Registro exitoso.</p>";
    console.log(usuarios);
    if (typeof usuarios === "string") {
      usuarios = JSON.parse(usuarios);
    } else if (!Array.isArray(usuarios)) {
      usuarios = [];
    }
    usuarios.push({ user, email, password });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }
}

function login() {
  const user = document.getElementById("usuario").value;
  const password = document.getElementById("password").value;
  let usuarios = localStorage.getItem("usuarios") || [];
  usuarios = JSON.parse(usuarios);
  const usuarioEncontrado = usuarios.find(
    (u) => u.user === user && u.password === password
  );
  if (usuarioEncontrado) {
    //redirigir a la página de inicio
    sessionStorage.setItem("usuario", user);
    window.location.href = "characters.html";
  } else {
    document.getElementById("resultado").innerHTML =
      "<p class='error'>Usuario o contraseña incorrectos.</p>";
  }
}

function logout() {
  if (!sessionStorage.getItem("usuario")) {
    alert("No hay un usuario conectado.");
    return;
  }
  sessionStorage.removeItem("usuario");
  window.location.href = "index.html";
}

function cambiarModo() {
  let boton = document.getElementById("modo");
  let body = document.body;
  if (boton.innerHTML === "☀️") {
    boton.innerHTML = "🌙";
    body.style.backgroundColor = "black";
    body.style.color = "white";
  } else {
    boton.innerHTML = "☀️";
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }
}
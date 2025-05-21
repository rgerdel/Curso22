document.body.addEventListener("keydown", function (event) {
  console.log(event.key);
  if (event.key === "ArrowUp" || event.key === "w") {
    moverPersonaje("arriba");
  } else if (event.key === "ArrowDown" || event.key === "s") {
    moverPersonaje("abajo");
  } else if (event.key === "ArrowLeft" || event.key === "a") {
    moverPersonaje("izquierda");
  } else if (event.key === "ArrowRight" || event.key === "d") {
    moverPersonaje("derecha");
  }
});

function moverPersonaje(direccion) {
  let personaje = document.getElementById("personaje");
  personaje.style.position = "relative";

  if(direccion === "arriba") {
    personaje.style.top = (parseInt(personaje.style.top) || 0) - 10 + "px";
  } else if(direccion === "abajo") {
    personaje.style.top = (parseInt(personaje.style.top) || 0) + 10 + "px";
  } else if(direccion === "izquierda") {
    personaje.style.left = (parseInt(personaje.style.left) || 0) - 10 + "px";
  } else if(direccion === "derecha") {
    personaje.style.left = (parseInt(personaje.style.left) || 0) + 10 + "px";
  }

}
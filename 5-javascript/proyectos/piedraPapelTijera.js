let jugador1 = prompt("Jugador 1: Eliga piedra, papel o tijera");
let jugador2 = prompt("Jugador 2: Eliga piedra, papel o tijera");

function jugar(opcion1, opcion2){
if (opcion1 !== "piedra" && opcion1 !== "papel" && opcion1 !== "tijera") {
    console.log ("Opción no válida Jugador 1 Por favor elige piedra, papel o tijera.");
  } else if (opcion2 !== "piedra" && opcion2 !== "papel" && opcion2 !== "tijera") {
    console.log ("Opción no válida Jugador 2 Por favor elige piedra, papel o tijera.");
  } else if (opcion1 === opcion2) {
    console.log ("¡Es un empate!");
  } else if (
    (opcion1 === "piedra" && opcion2 === "tijera") ||
    (opcion1 === "tijera" && opcion2 === "papel") ||
    (opcion1 === "papel" && opcion2 === "piedra")
  ) {
    console.log ("Gana jugador 1");
  } else if (
    (opcion2 === "piedra" && opcion1 === "tijera") ||
    (opcion2 === "tijera" && opcion1 === "papel") ||
    (opcion2 === "papel" && opcion1 === "piedra")
  ) {
    console.log ("Jugador 2 Gana");
  } 
}
jugar(jugador1, jugador2);
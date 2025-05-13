

/*
Proyecto 2: Juego de Tres en Raya (Tic-Tac-Toe)
Crea un juego de tres  raya que permita a dos jugadores jugar por turnos.
*/

/* 
JUEGO CON LAS POSICIONES CADA NUMERO INDICA EL POSICION DEL INDICE
0 - 1 - 2
3 - 4 - 5
6 - 7 - 8

COMBINACIONES PARA GANAR SEGUN EL NUMERO DE POSICION DEL ARREGLO
012 - 345 - 678 
036 - 147 - 258 
048 - 246
*/

let posicion = [" ", " ", " ", " ", " ", " ", " ", " ", " "]; //LIMPIO EL ARREGLO

console.log("POSICION DEL ARRAY EN EL JUEGO")

console.log("0 | 1 | 2"); // Muestro en pantalla por consola la posicion segun el indice del Array
console.log("---------");
console.log("3 | 4 | 5");
console.log("---------");
console.log("6 | 7 | 8");

let turno1 = prompt("Turno Jugador X, elige una posicion entre (0-8):");
posicion[turno1] = "X";

let turno2 = prompt("Turno Jugador O, elige una posicion entre (0-8):");
posicion[turno2] = "O";

let turno3 = prompt("Turno Jugador X, elige una posicion entre (0-8):");
posicion[turno3] = "X";

let turno4 = prompt("Turno Jugador X, elige una posicion entre (0-8):");
posicion[turno4] = "O";

let turno5 = prompt("Turno Jugador X, elige una posicion entre (0-8):");
posicion[turno5] = "X";

if (posicion[0] !== "" && posicion[1] !== "" && posicion[2] !== "" &&
    posicion[0] == "X" && posicion[1] == "X" && posicion[2] == "X") {
    console.log("JUGADOR X GANA");
} else {
    console.log("JUEGO SIN DECISION");
}

console.log(" ");
console.log("RESULTADO DEL JUEGO");

console.log(posicion[0] + " | " + posicion[1] + " | " + posicion[2]);
console.log("---------");
console.log(posicion[3] + " | " + posicion[4] + " | " + posicion[5]);
console.log("---------");
console.log(posicion[6] + " | " + posicion[7] + " | " + posicion[8]);
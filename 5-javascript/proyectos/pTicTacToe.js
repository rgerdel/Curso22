
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


let posicion = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
let turnoActual = "X";
let movimientos = 0;

function imprimirTablero() {
    console.log("RESULTADO DEL JUEGO");
    console.log(posicion[0] + " | " + posicion[1] + " | " + posicion[2]);
    console.log("---------");
    console.log(posicion[3] + " | " + posicion[4] + " | " + posicion[5]);
    console.log("---------");
    console.log(posicion[6] + " | " + posicion[7] + " | " + posicion[8]);
}

function verificarGanador(jugador) {
    const combinacionesGanadoras = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Combinaciones Horizontales
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Combinaciones Verticales
        [0, 4, 8], [2, 4, 6]             // Conbinaciones Esquinas
    ];

    return combinacionesGanadoras.some(combinacion =>
        posicion[combinacion[0]] === jugador &&
        posicion[combinacion[1]] === jugador &&
        posicion[combinacion[2]] === jugador
    );
}

function jugarTurno() {
    if (movimientos === 9) {
        alert("¡Empate! No hay ganador.");
        console.log("¡Empate! No hay ganador.");
        imprimirTablero();
        return;
    }

let posicionSeleccionada;

function obtenerEntradaValida() {
    posicionSeleccionada = prompt("Turno Jugador " + turnoActual + ", elige una posición entre (0-8):");

    // Validar que la entrada es un número dentro del rango permitido y que la casilla está vacía
    if (!Number.isInteger(Number(posicionSeleccionada)) || posicionSeleccionada < 0 || posicionSeleccionada > 8 || posicion[posicionSeleccionada] !== " ") {
        alert("Posición ocupada. Por favor, elige una posición válida que esté libre.");
        obtenerEntradaValida(); // Llamada recursiva para repetir el proceso
    }
}

// Llamar la función para obtener una posición válida
obtenerEntradaValida();
posicion[posicionSeleccionada] = turnoActual;


    imprimirTablero();

    if (verificarGanador(turnoActual)) {
        alert("¡Jugador " + turnoActual + " gana!");
        console.log("¡Jugador " + turnoActual + " gana!");
        return;
    }

    turnoActual = turnoActual === "X" ? "O" : "X"; // Alternar turno
    movimientos = movimientos + 1
    jugarTurno(); // Llamada recursiva para el siguiente turno
}

// Iniciar el juego
console.log("POSICIÓN DEL ARRAY EN EL JUEGO");
console.log("0 | 1 | 2");
console.log("---------");
console.log("3 | 4 | 5");
console.log("---------");
console.log("6 | 7 | 8");

jugarTurno();
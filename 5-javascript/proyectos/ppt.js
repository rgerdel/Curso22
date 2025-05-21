//Programación funcional

/**
 * @function pedir_jugada
 * @description función para que el usuario ingrese opción a jugar
 * @example pedir_jugada("piedra) retorna "piedra", pedir_jugada("telefono") retorna vacio, alert("error")
 * @return la jugada del usuario
 */
function pedir_jugada() {
    let jugada = prompt("Ingresa piedra papel o tijera");
    jugada = jugada.toLowerCase();
    if (jugada !== "piedra" && jugada !== "papel" && jugada !== "tijera") {
      alert("Has seleccionado una opción invalida");
      pedir_jugada();
    } else {
      return jugada;
    }
  }
  
  /**
   * @function evaluar_resultado
   * @param {string} jugador1 - Selección del jugador 1
   * @param {string} jugador2 - Selección del jugador 2
   * @description función utilizada para devolver el resultado del juego
   * @returns {string} resultado
   */
  function evaluar_resultado(jugador1, jugador2) {
    if (jugador1 === jugador2) {
      return "empate";
    } else if (
      (jugador1 === "piedra" && jugador2 === "tijera") ||
      (jugador1 === "papel" && jugador2 === "piedra") ||
      (jugador1 === "tijera" && jugador2 === "papel")
    ) {
      return "jugador 1 gana";
    } else if (
      (jugador2 === "piedra" && jugador1 === "tijera") ||
      (jugador2 === "papel" && jugador1 === "piedra") ||
      (jugador2 === "tijera" && jugador1 === "papel")
    ) {
      return "jugador 2 gana";
    } else {
      return "error en la evaluacion del resultado";
    }
  }
  
  /**
   * @function jugar
   * @description funcion que inicializa el programa para jugar
   */
  function jugar() {
    let jugador1 = pedir_jugada();
    let jugador2 = pedir_jugada();
    alert(evaluar_resultado(jugador1, jugador2));
    jugar();
  }
  
  jugar();
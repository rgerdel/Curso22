let oportunidades = 5;
let numeroAleatorio = generarNumeroAleatorio(1, 100);
let ganado = false;

function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciarJuego() {
  oportunidades = 5;
  numeroAleatorio = generarNumeroAleatorio(1, 100);
  ganado = false;
  alert("El juego ha sido reiniciado. Tienes " + oportunidades + " oportunidades.");
}

function determinarResultado(numeroUsuario) {
  if (numeroUsuario < numeroAleatorio) {
    oportunidades--;
    return "El número es mayor";
  } else if (numeroUsuario > numeroAleatorio) {
    oportunidades--; // una forma de restarle 1 rapidamente
    return "El número es menor";
  } else {
    ganado = true;
    return "¡Felicidades! Adivinaste el número.";
  }
}

function jugar() {
  let numeroUsuario = parseInt(document.getElementById("numero").value);
  let resultado = determinarResultado(numeroUsuario);
  if(oportunidades <= 0 && !ganado) {
    alert("Has perdido. El número era " + numeroAleatorio);
    reiniciarJuego();
  } else if (ganado) {
    alert("¡Felicidades! Adivinaste el número.");
    reiniciarJuego();
  } else {
    alert(resultado + " Te quedan " + oportunidades + " oportunidades.");
  }
}

/*
  Programación orientada a eventos
*/
document.getElementsByTagName("button")[0].addEventListener("click", jugar);

document.getElementById("numero").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    jugar();
  }
})

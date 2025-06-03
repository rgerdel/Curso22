/*
  Asincronismo
  El asincronismo es una característica de JavaScript que permite ejecutar código 
  en segundo plano.
*/
/*
  SetTimeout
  SetTimeout es una función que permite ejecutar una función después de 
  un tiempo determinado.
*/
setTimeout(() => {
  console.log("Hola, soy una función que se ejecuta después de 10 segundos");
}, 10000);

console.log("Hola Mundo");

/*
  SetInterval
  SetInterval es una función que permite ejecutar una función cada cierto 
  intervalo de tiempo.
*/
setInterval(() => {
  console.log("Hola, soy una función que se ejecuta cada 5 segundos");
}, 5000);

/*
  Consumo de una API
*/

let datos = fetch("https://rickandmortyapi.com/api/character").then((response) => {
  return response.json();
});

if (datos) {
  datos.then((data) => {
    console.log(data);
  }).catch((error) => {
    console.error("Error al obtener los datos:", error);
  });
}


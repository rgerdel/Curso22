/*Realiza un programa que funcione como un semáforo, que reciba un color por consola y devuelva el siguiente mensaje:
- Si el color es rojo, devuelve "Detenerse"
- Si el color es amarillo, devuelve "Precaución"
- Si el color es verde, devuelve "Avanzar"
- Si es cualquier otro color, devuelve "Color no válido"
- Si no se recibe ningún color, devuelve "No se recibió ningún color"
*/

    
    
    let semaforo = prompt("Indicame un Color");
    switch(semaforo) {
    case "Verde":
        console.log ("Puedes avanzar.");
        break;
    case "Rojo":
        console.log ("Detenerse");
        break;
    case "Amarillo":
        console.log ("Precacucion");
        break;
    case "":
        console.log ( "No se recibió ningún color");
        break;
    default:
        console.log ( "Color no valido");
    }

/*Realiza un programa un programa que reciba un número por y evalúe si es par o impar.
- Si es par, devuelve "El número es par"
- Si es impar, devuelve "El número es impar"
- Si no se recibe ningún número, devuelve "No se recibió ningún número"
- Si no es un número, devuelve "No es un número"
*/

    let num = prompt("Introduce un numero");
    if (num == "") {
      console.log("No se recibió ningun número");
    } else {
      if (isNaN(num)) {
        console.log("No es un número");
      } else {
        if (num % 2 == 0) {
          console.log("El número es par");
        } else {
          console.log("El número es impar");
        }
      }
    } 
    



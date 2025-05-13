// Comentario de una línea
/*
  Comentario de múltiples
  lineas
  :)
*/
/**
 * Comentario de documentación
 */
console.log("Hola Mundo desde section1.js");
let nombre;

/*
  Tipos de datos
  - String: "Hola Mundo", 'Hola Mundo', `Hola Mundo`
  - Number: 1, 1.5, -1, -1.5
  - Boolean: true, false
  - Undefined: undefined
  - Null: null
  - Array: [1, 2, 3], ["Hola", "Mundo"]
  - Object: { nombre: "Juan", edad: 30 }, { nombre: "Juan", edad: 30, amigos: ["Pedro", "Maria"] }
  - Regexp: /[a-z]/, /[0-9]/, /[A-Z]/
*/

// Variables
// Declaración de variables
/*
  let: variables locales, se pueden reasignar
  var: variables globales, se pueden reasignar, no se recomienda su uso
  const: constantes, no se pueden reasignar
*/
let apellido = "Rodriguez"; // Declaración y asignación de variable
const PI = 3.1416; // Declaración y asignación de constante

// Asignación de variable
apellido = "Gonzalez"; // Reasignación de variable
// "apellido" = "Perez"

/*
  Operadores comparativos
  - ==: igual
  Ejemplo: 1 == 2 // false
  Ejemplo: 1 == "1" // true
  - ===: estrictamente igual
  Ejemplo: 1 === "1" // false
  - !=: diferente
  Ejemplo: 2 != 3 // true
  Ejemplo: 2 != "2" //false
  - !==: estrictamente diferente
  Ejemplo: 2 !== "2" //true
  - >: mayor que
  Ejemplo: 2 > 2 //false
  Ejemplo: 2 > 3 //false
  - <: menor que
  Ejemplo: 2 < 3 //true
  - >=: mayor o igual que
  Ejemplo: 2 >= 2 //true
  - <=: menor o igual que
  ejemplo: 2 <= 2 //true
  - =: asignación
*/

/*
  Operadores aritméticos
  - +: suma
  Ejemplo: 1 + 2 //3
  - -: resta
  Ejemplo: 2 - 1 //1
  - *: multiplicación
  Ejemplo: 2 * 3 //6
  - /: división
  Ejemplo: 6 / 2 //3
  - %: módulo (resto de la división)
  Ejemplo: 5 % 2 //1
  - **: potencia
  Ejemplo: 2 ** 3 //8
  - ++: incremento
  Ejemplo: let a = 1; a++ //2
  - --: decremento
  Ejemplo: let a = 1; a-- //0

  let a = 5;
  a = a + 2;
  a += 2;

  - +=: suma y asignación
  Ejemplo: let a = 1; a += 2 //3
  - -=: resta y asignación
  Ejemplo: let a = 1; a -= 2 //-1
  - *=: multiplicación y asignación
  Ejemplo: let a = 1; a *= 2 //2
  - /=: división y asignación
  Ejemplo: let a = 1; a /= 2 //0.5
  - %=: módulo y asignación
  Ejemplo: let a = 1; a %= 2 //1
  - **=: potencia y asignación
  Ejemplo: let a = 1; a **= 2 //1
  - ++=: incremento y asignación
  Ejemplo: let a = 1; a ++= 2 //3
  - --=: decremento y asignación
  Ejemplo: let a = 1; a --= 2 //-1
*/

/*
  Operadores lógicos
  - &&: y lógico (and)
  Ejemplo: true && true //true
  Ejemplo: true && false //false
  - ||: o lógico (or)
  Ejemplo: true || false //true
  Ejemplo: false || false //false
  - !: no lógico (not)
  Ejemplo: !true //false
  Ejemplo: !false //true
*/

//Ejercicos para practicar la lógica

// (Facil)
var uno = !true || false; //false
var dos = false && !false; //false
var tres = true && !false; //true

//(Medio)
var cuatro = 5 === 5 || !true; //true
var cinco = !0 || 5 < 0; //true
var seis = 3 > 4 && !0; //false

//Avanzado
var siete = ((false || true) && !false && true) || (true && false); //true
var ocho = 6 === 3 + 3 && 9 / 3 >= 3; //true
var nueve = !!false || ("1" == 1 && !false === true); //true

//Hardcore
var diez = !!true === !!(5 >= 5); //true
var once = !(true && !true === !!(8 === 4 * 2)); //true

//Ultra-Hardcore
var doce = !(true && !true === !!(16 === 4 * 2 + 8)) !== false; //true

//Leyenda
var trece = !(
  (!(!(10 / 5 == "2") === false) != false) === 5 * 5 <= 100 / 4 &&
  !(1 + 1 !== 10 / 5) !== true
); //true

/*
  Condicionales
  Los condicionales son estructuras de control que permiten ejecutar un bloque de código si se cumple una condición.
*/

const edad = -5;
//redondear a entero

if (typeof edad === "number") {
  const edadRedondeada = Math.round(edad); // redondear a entero

  if (edadRedondeada >= 18) {
    console.log("Eres mayor de edad");
  } else if (edadRedondeada >= 0 && edadRedondeada < 18) {
    console.log("Eres menor de edad");
  } else {
    console.log("Edad no válida");
  }
} else {
  console.log("Edad no válida");
}

// Ejercicio

const tiempo = true;
const dinero = false;
const salud = true;
const tiempoLibre = true;

if (tiempo && dinero) {
  console.log("Puedes ir de vacaciones");
} else if (tiempo && salud) {
  console.log("Puedes ir al médico");
} else if (tiempoLibre && dinero) {
  console.log("Puedes ir al cine");
} else if (tiempoLibre && salud) {
  console.log("Puedes ir al gimnasio");
} else {
  console.log("No puedes hacer nada");
}

//Planteado de otra forma
tiempo = true;
dinero = false;
salud = true;
tiempoLibre = true;

if (tiempo) {
  if (salud) {
    if (dinero) {
      console.log("Puedes ir de vacaciones");
    }
  } else if (tiempoLibre) {
    if (dinero) {
      console.log("Puedes ir al cine");
    } else {
      console.log("No puedes hacer nada");
    }
  } else {
    console.log("No puedes hacer nada");
  }
} else {
  console.log("No puedes hacer nada");
}

const dia = "Jueves";
switch (dia) {
  case "lunes":
    console.log("Hoy es lunes");
    break;
  case "martes":
    console.log("Hoy es martes");
    break;
  case "miercoles":
    console.log("Hoy es miercoles");
    break;
  case "jueves":
    console.log("Hoy es jueves");
    break;
  case "viernes":
    console.log("Hoy es viernes");
    break;
  case "sabado":
    console.log("Hoy es sabado");
    break;
  case "domingo":
    console.log("Hoy es domingo");
    break;
  default:
    console.log("No es un dia valido");
}

/*
  Recibir datos por consola
  - prompt: recibe un dato por consola y lo devuelve como string
  Ejemplo: let nombre = prompt("¿Cual es tu nombre?");

  Realiza un programa que funcione como un semáforo, que reciba un color por consola y devuelva el siguiente mensaje:
  - Si el color es rojo, devuelve "Detenerse"
  - Si el color es amarillo, devuelve "Precaución"
  - Si el color es verde, devuelve "Avanzar"
  - Si es cualquier otro color, devuelve "Color no válido"
  - Si no se recibe ningún color, devuelve "No se recibió ningún color"

  Realiza un programa un programa que reciba un número por y evalúe si es par o impar.
  - Si es par, devuelve "El número es par"
  - Si es impar, devuelve "El número es impar"
  - Si no se recibe ningún número, devuelve "No se recibió ningún número"
  - Si no es un número, devuelve "No es un número"
*/


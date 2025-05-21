//FUNCIONES
/*
  Las funciones son bloques de código que se pueden reutilizar. Se definen con la palabra clave function, seguida del nombre de la función, paréntesis y llaves. Dentro de los paréntesis se pueden definir parámetros que permiten pasar información a la función. 
*/

// declaracion de la funcion
function saludar() {
  console.log("Hola, mundo!"); //Imprime "Hola, mundo!" en la consola
}

// llamada a la funcion
saludar(); //Ejecuta la funcion saludar
saludar(); //Ejecuta la funcion saludar
saludar(); //Ejecuta la funcion saludar

//Ejemplo de funcion con parametros
function saludarConNombre(nombre = "Jhon", apellido = "") {
  if (typeof nombre !== "string" || typeof apellido !== "string") {
    console.log("Error: El nombre y el apellido deben ser cadenas de texto.");
    return;
  }
  console.log("Hola " + nombre + " " + apellido); //Imprime "Hola, nombre!" en la consola
}

saludarConNombre(2, "hola"); //Ejecuta la funcion saludarConNombre con el parametro "Juan"
saludarConNombre("Pedro", "Daza"); //Ejecuta la funcion saludarConNombre con el parametro "Pedro"
saludarConNombre("Maria", "Paloma"); //Ejecuta la funcion saludarConNombre con el parametro "Maria"
saludarConNombre("Luis"); //Ejecuta la funcion saludarConNombre con el parametro "Luis"

/*
  Alcance
  Alcance de las variables:
  - let y const tienen un alcance de bloque, es decir, solo son accesibles dentro del bloque donde se definen.
  - var tiene un alcance de función, es decir, es accesible dentro de la función donde se define, o global si se define fuera de una función.

    let y = 20; // y es accesible dentro del bloque
    const z = 30; // z es accesible dentro del bloque

    if(true) {
      var x = 10; // x es accesible fuera del bloque
      let y = 20; // y no es accesible fuera del bloque
      const z = 30; // z no es accesible fuera del bloque
    }

    if(true) {
      let y = 20; // y no es accesible fuera del bloque
      const z = 30; // z no es accesible fuera del bloque
    }
    console.log(x,y,z) // x es 10, y y z no son accesibles

    //Ejercicio de alcance
    let x = "Hola";
    if(true){
      let y = "Saludos";
      if(y){
        if(x){
          let z = "Bienvenido";
        }
        console.log(x,y,z);
      }
    } else{
      console.log(x,y,z)
    }

    //Alcance de las funciones
    Las funciones tienen su propio alcance, es decir, las variables definidas dentro de una función no son accesibles fuera de ella.

    function saludar() {
      var nombre = "Juan"; // nombre es accesible dentro de la función
      console.log("Hola " + nombre); //Imprime "Hola, Juan!" en la consola
    }

    saludar(); //Ejecuta la funcion saludar
    console.log(nombre); //Error: nombre no es accesible fuera de la función
  */

//funcion sin retorno
function saludarSinRetorno(nombre) {
  console.log("Hola " + nombre); //Imprime "Hola, nombre!" en la consola
}
//Funcion con retorno
function saludarConRetorno(nombre) {
  return "Hola " + nombre; //Devuelve "Hola, nombre!" como resultado de la funcion
}

saludarSinRetorno("Juan"); //Ejecuta la funcion saludarSinRetorno con el parametro "Juan"
saludarConRetorno("Pedro"); //Ejecuta la funcion saludarConRetorno con el parametro "Pedro"

console.log(saludarConRetorno("Pedro"));
console.log(saludarSinRetorno("Pedro"));

/*
  Recursion
  La recursion es una técnica de programación donde una función se llama a sí misma para resolver un problema. 
  Es útil cuando deseas ejecutar una tarea repetitiva o dividir un problema en subproblemas más pequeños.
  Sin embargo, es importante tener cuidado con la recursion, ya que puede llevar a un desbordamiento de pila si 
  no se maneja correctamente.
  Para evitar esto, asegúrate de tener una condición de salida que detenga la recursion en algún momento.
*/

//Ejemplo de recursion, contador de n hasta y de uno en uno de forma ascendente
function contar(inicio = 0, limite = 0) {
  if (inicio > limite) {
    return; //Condicion de salida
  }
  console.log(inicio); //Imprime el valor de n
  contar(inicio + 1, limite); //Llamada recursiva con n + 1
}

contar(1, 10); //Ejecuta la funcion contar desde 1 hasta 10
contar(10, 1); //
contar(5, 5);

//Ejercicio fácil
/*
  Crea una función que cuente desde N hasta 0 de forma descendente y de dos en dos
*/

function contarDescendente(numero) {
  if (numero < 0) {
    return; //Condicion de salida
  }
  console.log(numero); //Imprime el valor de n
  contarDescendente(numero - 2); //Llamada recursiva con n - 2
}

contarDescendente(10); //Ejecuta la funcion contarDescendente desde 10 hasta 0 de dos en dos

//Ejercicio intermedio
/*
  Crea una función que calcule el factorial de un número N. El factorial de un número N es el producto de todos los números enteros desde 1 hasta N.
  Por ejemplo, el factorial de 5 es 5 * 4 * 3 * 2 * 1 = 120.
*/

function factorial(numero, contador = 1, acumulado = 0) {
  if (contador == numero) {
    return acumulado;
  }
  if (contador == 1) {
    acumulado = numero * (numero - contador);
  } else {
    acumulado = acumulado * (numero - contador);
  }
  console.log(acumulado, contador, numero);
  return factorial(numero, contador + 1, acumulado);
}

console.log(factorial(15));

factorial(5); //Ejecuta la funcion factorial desde 5 hasta 1

//Ejercicio avanzado
/*
  Crea una función que calcule la serie de Fibonacci hasta el número N. La serie de Fibonacci es una secuencia de números donde cada número es la suma de los dos anteriores. 
  Por ejemplo, la serie de Fibonacci hasta 10 es: 0, 1, 1, 2, 3, 5, 8.
  La serie comienza con 0 y 1, y luego cada número es la suma de los dos anteriores.
*/

/**
 * @function fibonacci
 * @description Calcula la serie de Fibonacci hasta un número límite.
 * @param {*} limite - Límite hasta donde se calculará la serie de Fibonacci.
 * @param {*} resultado_anterior - Valor anterior en la serie de Fibonacci.
 * @param {*} resultado_actual - Valor actual en la serie de Fibonacci.
 * @example fibonacci(10) // 0, 1, 1, 2, 3, 5, 8
 * @returns {void} - No devuelve nada, solo imprime la serie de Fibonacci en la consola.
 * @author Juan Rodriguez
 * @date 2025-05-02
 * @version 1.0.0
 * @see {@link https://es.wikipedia.org/wiki/Sucesi%C3%B3n_de_Fibonacci} para más información sobre la serie de Fibonacci.
 * @see {@link https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Function} para más información sobre funciones en JavaScript.
 */
function fibonacci(limite, resultado_anterior = 0, resultado_actual = 1) {
  if (resultado_actual > limite) {
    return;
  }
  console.log(resultado_actual);
  fibonacci(limite, resultado_actual, resultado_anterior + resultado_actual);
}

fibonacci(10); //Ejecuta la funcion fibonacci hasta el limite 10

/**
 * Convenciones de nombres
 * - Usa camelCase para nombres de variables y funciones (ejemplo: miVariable, calcularSuma).
 * - Usa PascalCase para nombres de clases (ejemplo: MiClase).
 * - Usa snake_case para nombres de archivos (ejemplo: mi_archivo.js).
 * - Usa UPPER_SNAKE_CASE para constantes (ejemplo: PI, MAX_VALUE).
 * - Usa nombres descriptivos y significativos para variables y funciones.
 * - Evita abreviaciones innecesarias y nombres confusos.
 * - Usa nombres en inglés para variables y funciones, a menos que estés trabajando en un proyecto específico en otro idioma.
 */

/*
  En javascript los datos tienen metodos y propiedades, por lo que se pueden manipular de diferentes maneras.
  Por ejemplo, los strings tienen metodos como .toUpperCase(), .toLowerCase(), .length, .charAt(), .indexOf(), .substring(), .slice(), .split(), .replace(), entre otros.
*/

const nombre = "Juan Rodriguez";
console.log(nombre.length); //Imprime la longitud del string
//Metodos
console.log(nombre.toUpperCase()); //Imprime el string en mayusculas
console.log(nombre.toLowerCase()); //Imprime el string en minusculas
console.log(nombre.charAt(0)); //Imprime el primer caracter del string
console.log(nombre.indexOf("Rodriguez")); //Imprime la posicion de la palabra Rodriguez en el string
console.log(nombre.substring(0, 4)); //Imprime los primeros 4 caracteres del string
console.log(nombre.slice(0, 4)); //Imprime los primeros 4 caracteres del string
console.log(nombre.split(" ")); //Imprime el string separado por espacios
console.log(nombre.replace("Rodriguez", "Daza")); //Reemplaza Rodriguez por Daza en el string
console.log(nombre.replaceAll("Juan", "Pedro")); //Reemplaza todas las ocurrencias de Juan por Pedro en el string
console.log(nombre.trim()); //Elimina los espacios en blanco al inicio y al final del string

/*
  Ejercicio
  Realiza un programa que cuenta la cantidad de palabras y un vocales que tiene un string.
  Por ejemplo, el string "Hola, soy Juan Rodriguez" tiene 4 palabras y 9 vocales.
*/

//Calcular la cantidad de palabras
const texto = "Hola, soy Juan Rodriguez"; //String a analizar
const cantidadPalabras = texto.split(" ").length; //Cantidad de palabras
let cantidadDeVocales = 0; //Contador de vocales

function contarVocales(texto, contador = 0) {
  if (contador >= texto.length) {
    return;
  }
  const letra = texto.charAt(contador).toLowerCase(); //Letra actual
  if (
    letra === "a" ||
    letra === "e" ||
    letra === "i" ||
    letra === "o" ||
    letra === "u" ||
    letra === "á" ||
    letra === "é" ||
    letra === "í" ||
    letra === "ó" ||
    letra === "ú"
  ) {
    cantidadDeVocales++; //Aumenta el contador de vocales
  }
  contarVocales(texto, contador + 1); //Llamada recursiva con el siguiente caracter
}

contarVocales(texto); //Ejecuta la funcion contarVocales desde el primer caracter

console.log("Cantidad de palabras: " + cantidadPalabras); //Imprime la cantidad de palabras
console.log("Cantidad de vocales: " + cantidadDeVocales); //Imprime la cantidad de vocales

/*
  Ejercicios de metodos de string para estudiantes
  // sin investigar
  - Facil: Crea un programa que lea un string, lo limpie de espacios en blanco al inicio y al final y en caso de tener una longitud
  superior a 20, imprima solo los primeros 20 caracteres y tres puntos suspensivos al final.

  //sin investigar
  - Intermedio: Crea un programa que tome un string y cambie todas las vocales por el caracter "X".

  //sin investigar
  - Avanzado: Crea un programa que tome un string y lo invierta. Por ejemplo, el string "Hola" se convierte en "aloH".

  //opcional, pueden investigar
  - Experto: Crea un programa que tome un string y cuente la cantidad de veces que aparece cada letra en el string. Por ejemplo, el string "Hola" tiene 1 "H", 1 "o", 1 "l" y 1 "a".
*/

/**
 * @function recortar_texto
 * @param {*} texto - Texto a recortar.
 * @description Recorta un texto a 20 caracteres y agrega "..." al final si es necesario.
 * @example recortar_texto("Hola a todos en la clase, este es un texto bastate largo e interesante que bueno, hara muchas cosas") // "Hola a todos en la c..."
 * @returns {string} - Texto recortado.
 * @author Juan Rodriguez
 */
function recortar_texto(texto) {
  if (validar_string(texto)) {
    return;
  }
  let texto_limpio = texto.trim();
  if (texto_limpio.length > 20) {
    return texto_limpio.slice(0, 20) + "...";
  }
}

console.log(
  recortar_texto(
    "  Hola a todos en la clase, este es un texto bastate largo e interesante que bueno, hara muchas cosas                                              "
  )
);

/**
 * @function remplazar_vocales
 * @param {*} texto  - Texto a modificar.
 * @description Reemplaza todas las vocales de un string por "x".
 * @example remplazar_vocales("Hola") // "Hxlx"
 * @returns {string} - Texto modificado.
 * @author Juan Rodriguez
 */
function remplazar_vocales(texto) {
  if (validar_string(texto)) {
    return;
  }
  return texto
    .toLowerCase()
    .replaceAll("a", "x")
    .replaceAll("á", "x")
    .replaceAll("e", "x")
    .replaceAll("é", "x")
    .replaceAll("i", "x")
    .replaceAll("í", "x")
    .replaceAll("o", "x")
    .replaceAll("ó", "x")
    .replaceAll("u", "x")
    .replaceAll("ú", "x");
}

console.log(remplazar_vocales("Este es un string"));

/**
 * @function validar_string
 * @param {*} texto - Texto a validar.
 * @description Valida si el texto es un string.
 * @example validar_string("Hola") // false
 * @returns {boolean} - true si no es un string, false si es un string.
 * @author Juan Rodriguez
 */
function validar_string(texto) {
  if (typeof texto !== "string") {
    console.error("Debes ingresar un string");
    return true;
  }
  return false;
}

/**
 * @function revertir_string
 * @param {*} texto - Texto a invertir.
 * @param {*} limite - Limite de caracteres a invertir.
 * @param {*} palabra_invertida - Texto invertido.
 * @param {*} contador - Contador de caracteres.
 * @description Invierte un string de forma recursiva.
 * @example revertir_string("Hola") // "aloH"
 * @returns {string} - Texto invertido.
 * @author Juan Rodriguez
 */
function revertir_string(
  texto = "",
  limite = 0,
  palabra_invertida = "",
  contador = 0
) {
  if (validar_string(texto) || contador >= limite) {
    console.log("error");
    return "error";
  }
  /*
  utilizando metodos de strings y arrays
  return texto.split("").reverse().join("")
  */
  let ultimo_caracter = texto.at(-1);
  let texto_restante = texto.slice(0, texto.length - 1);
  palabra_invertida = palabra_invertida + ultimo_caracter;
  console.log(
    "ultimo caracter " + ultimo_caracter + "\n",
    "caracter eliminado " + texto_restante + "\n",
    "palabra invertida " + palabra_invertida + "\n",
    "contador " + contador + "\n"
  );
  if (contador == limite - 1) {
    return palabra_invertida;
  }

  return revertir_string(
    texto_restante,
    limite,
    palabra_invertida,
    contador + 1
  );
}

let frase = "hola";
console.log(revertir_string(frase, frase.length));

//hola
//aloh

/*
  Arrays y sus metodos
  los arrays son elementos o listas que permiten almacenar una coleccion de datos.
  Se definen con corchetes [] y los elementos se separan por comas.
  Los arrays pueden contener cualquier tipo de dato, incluyendo otros arrays y objetos.
*/

const array = [1, 2, 3, 4, 5]; //Array de numeros
const array2 = ["Juan", "Pedro", "Maria"]; //Array de strings
const array3 = [1, "Juan", true, null]; //Array de diferentes tipos de datos

lista_de_compras = [
  {
    nombre: "Leche",
    precio: 2.5,
    cantidad: 1,
  },
  {
    nombre: "Pan",
    precio: 1.5,
    cantidad: 2,
  },
  {
    nombre: "Huevos",
    precio: 3.0,
    cantidad: 12,
  },
  {
    nombre: "Carne",
    precio: 10.0,
    cantidad: 1,
  },
  {
    nombre: "Frutas",
    precio: 5.0,
    cantidad: 3,
  },
];

console.log(lista_de_compras[0].nombre); //Imprime el primer elemento del array

let lista_de_facturas = [
  {
    id: 1,
    nombre_cliente: "Juan",
    apellido_cliente: "Rodriguez",
    fecha: "2023-10-01",
    direccion: "Calle 123",
    ciudad: "Bogota",
    telefono: "123456789",
    email: "ejemplo@hola.com",
    productos: [
      {
        id: 1,
        nombre: "Leche",
        precio: 2.5,
        cantidad: 1,
      },
      {
        id: 2,
        nombre: "Pan",
        precio: 1.5,
        cantidad: 2,
      },
    ],
    total: 5.5,
  },
  {
    id: 2,
    nombre_cliente: "Pedro",
    apellido_cliente: "Daza",
    fecha: "2023-10-02",
    direccion: "Calle 456",
    ciudad: "Medellin",
    telefono: "987654321",
    email: "holahola@ejemplo.com",
    productos: [
      {
        id: 3,
        nombre: "Huevos",
        precio: 3.0,
        cantidad: 12,
      },
      {
        id: 4,
        nombre: "Carne",
        precio: 10.0,
        cantidad: 1,
      },
    ],
    total: 13.0,
  },
];

let ejemplo = [
  [
    {
      categoria: "Charcuteria",
      productos: [
        {
          nombre: "Salchichon",
          precio: 2.5,
          cantidad: 1,
          tipos: [
            {
              nombre: "Salchichon de cerdo",
              precio: 2.5,
              cantidad: 1,
            },
            {
              nombre: "Salchichon de pollo",
              precio: 3.0,
              cantidad: 1,
            },
          ],
        },
        {
          nombre: "Jamon",
          precio: 3.0,
          cantidad: 1,
          tipos: [
            {
              nombre: "Jamon de cerdo",
              precio: 3.0,
              cantidad: 1,
            },
            {
              nombre: "Jamon de pavo",
              precio: 3.5,
              cantidad: 1,
            },
          ],
        },
      ],
    },
  ],
];

ejemplo[0][0].productos[0].tipos[1].nombre;

//Metodos de arrays
const frutas = ["manzana", "banana", "naranja", "uva", "pera"];
//Propiedad
//length
console.log(frutas.length); //Imprime la longitud del array
//metodos
frutas.push("kiwi"); //Agrega un elemento al final del array
console.log(frutas);
frutas.pop(); //Elimina el ultimo elemento del array
console.log(frutas); //Imprime el array sin el ultimo elemento
frutas.unshift("fresa"); //Agrega un elemento al inicio del array
console.log(frutas); //Imprime el array con el nuevo elemento al inicio
frutas.shift(); //Elimina el primer elemento del array
console.log(frutas); //Imprime el array sin el primer elemento
frutas.at(1); //Accede a una posicion del array
console.log(frutas.toString()); //Convierte el array a string
frutas.join(", "); //Convierte el array a string con un separador
console.log(frutas.join("/")); //Convierte el array a string con un separador
console.log(frutas.includes("banana")); //Verifica si el array contiene un elemento
console.log(frutas.slice(1, 3)); //Corta el array desde la posicion 1 hasta la 3
//console.log(frutas.splice(1, 2)); //Elimina dos elementos desde la posicion 1 (afecta el array original)
console.log(frutas.sort()); //Ordena el array alfabéticamente
console.log(frutas.reverse()); //Invierte el array

//Funciones con nombre
function ejemplo() {
  console.log("Hola"); //Imprime "Hola" en la consola
}
//Funciones anonimas
let ejemplo2 = function () {
  console.log("Hola"); //Imprime "Hola" en la consola
};

ejemplo2();

//Funciones flecha
const ejemplo3 = () => {
  console.log("Hola"); //Imprime "Hola" en la consola
};

ejemplo3();

let frutas_5_letras = frutas.filter((fruta) => fruta.length > 5); //Filtra el array por longitud de la fruta

console.log(frutas_5_letras); //Imprime el array filtrado

frutas.map((fruta) => {
  console.log(fruta); //Imprime cada fruta del array
});

//Ciclos o blucles
/*
  Los ciclos son estructuras de control que permiten ejecutar un bloque de código varias veces. 
  Existen diferentes tipos de ciclos en JavaScript, como for, while y do while.
*/
//Ciclo for
let carros = ["Mazda", "Toyota", "Chevrolet", "Renault", "Kia"]; //Array de carros
for (let i = 0; i < carros.length; i++) {
  console.log(carros[i]); //Imprime los numeros del 0 al 9
}

//ciclo for of (ciclo para recorrer arrays)
for (let carro of carros) {
  console.log(carro); //Imprime los nombres de los carros
}

//ciclo for in (ciclo para recorrer objetos)
let persona = {
  nombre: "Juan",
  apellido: "Rodriguez",
  edad: 30,
  ciudad: "Bogota",
};

for (let propiedad in persona) {
  console.log(persona[propiedad]); //Imprime las propiedades del objeto
}

//Ciclo while
let contador = 20; //Contador
while (contador < 10) {
  console.log(contador); //Imprime los numeros del 0 al 9
  contador++; //Aumenta el contador
}

//Ciclo do while
let contador2 = 0; //Contador
do {
  console.log(contador2); //Imprime los numeros del 0 al 9
  contador2++; //Aumenta el contador
} while (contador2 < 10); //Condicion del ciclo

//Ciclos dentro de ciclos
let lista_de_compras = [
  {
    nombre: "Leche",
    precio: 2.5,
    cantidad: 1,
  },
  {
    nombre: "Pan",
    precio: 1.5,
    cantidad: 2,
  },
  {
    nombre: "Huevos",
    precio: 3.0,
    cantidad: 12,
  },
];

for (let compra of lista_de_compras) {
  console.log(compra); //Imprime el objeto de la compra
  for (let propiedad in compra) {
    console.log(compra[propiedad]); //Imprime las propiedades del objeto
  }
}

// Pequeño ejercicio de arrrays dentro de arrays
/*
  Recorre el siguiente array
  [{
    categoria: "juegos de mesa"
    juegos: ["monopoly", "ajedrez", "damas"]
  },
  {
    categoria: "juegos de cartas"
    juegos: ["poker", "uno", "baraja"]
  },
  {
    categoria: "juegos de video"
    juegos: ["fortnite", "call of duty", "fifa"]
  }]
*/

/*
  La POO (Programación Orientada a Objetos) es un paradigma de programación que se basa en la creación de objetos 
  que contienen datos y métodos.
*/

let carro = {
  marca: "Mazda",
  modelo: "CX-5",
  año: 2020,
  color: "Rojo",
  encender: function () {
    console.log("El carro está encendido");
  },
  apagar: (dia) => {
    console.log(`El carro está apagado el dia ${dia}`);
  },
};

carro.apagar("miercoles"); //Ejecuta el metodo encender del objeto carro

/* Clases,
  Las clases son moldes de objetos.
*/

class Vehiculo {
  constructor(
    marca = "Mazda",
    modelo,
    anio,
    color,
    transmision = "automatico"
  ) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.color = color;
    if (transmision == "automatico" || transmision == "manual") {
      this.transmision = transmision;
    } else {
      this.transmision = "automatico";
    }
  }

  informacion() {
    console.log(
      `El carro es de marca: ${this.marca}, modelo: ${this.modelo}, año: ${this.anio}, color: ${this.color}`
    );
  }

  encender() {
    console.log(`El carro ${this.marca} está encendido`);
  }

  apagar() {
    console.log(`El carro ${this.marca} está apagado`);
  }
}

let carro1 = new Vehiculo("Mazda", "CX-5", 2020, "Rojo", "automatico"); //Crea un nuevo objeto de la clase Carro

carro1.informacion(); //Ejecuta el metodo informacion del objeto carro1
carro1.encender(); //Ejecuta el metodo encender del objeto carro1
carro1.apagar(); //Ejecuta el metodo apagar del objeto carro1

let carro2 = new Vehiculo("Toyota", "Corolla", 2021, "Azul", "manual");
carro2.informacion(); //Ejecuta el metodo informacion del objeto carro2
carro2.encender(); //Ejecuta el metodo encender del objeto carro2
carro2.apagar(); //Ejecuta el metodo apagar del objeto carro2

/*
  Herencia
  La herencia es un mecanismo que permite crear nuevas clases a partir de clases existentes. 
  Esto permite reutilizar código y crear jerarquías de clases.
*/
class Moto extends Vehiculo {
  constructor(
    marca,
    modelo,
    anio,
    color,
    transmision = "automatico",
    cilindrada = 0
  ) {
    super(marca, modelo, anio, color, transmision);
    this.cilindrada = cilindrada;
  }

  motopirueta() {
    console.log(`La moto ${this.marca} está haciendo una pirueta`);
  }
}

let moto1 = new Moto("Bera", "SBR", 2020, "Negra", "automatico"); //Crea un nuevo objeto de la clase Carro
moto1.informacion(); //Ejecuta el metodo informacion del objeto carro1
moto1.encender(); //Ejecuta el metodo encender del objeto carro1
moto1.motopirueta(); //Ejecuta el metodo encender del objeto carro1
moto1.apagar(); //Ejecuta el metodo apagar del objeto carro1

/*
  Realiza un videojuego utilizando clases y herencia.
  Este videojuego debe tener las siguientes clases:
  - Personaje
    - Propiedades: nombre, vida, ataque, defensa, velocidad
    - Metodos: Atacar, Saludar
  - Mago
    - Propiedades: hechizos (array de hechizos, cada hechizo tiene un nombre y un daño)
    ejemplo de hechizo: {nombre: "Fuego", daño: 50}
    - Metodos: Lanzar hechizo (seleccionar un hechizo aleatoriamente)
  - Guerrero
    - Propiedades: armas (array de armas, cada arma tiene un nombre y un daño)
    - Metodos: Atacar con arma (seleccionar un arma aleatoriamente)
    ejemplo de arma: {nombre: "Espada", daño: 30}
  - Arquero
    - Propiedades: flechas (array de flechas)
    - Metodos: Disparar flecha

  Debes de crear 5 personajes, 2 magos, 2 guerreros y 1 arquero.
  Cada personaje debe de tener una vida, un ataque diferente, una defensa, velocidad aleatoria.

  Crea un loop que permita a cada personaje atacar a otro personaje.
  Al momento de realizar un ataque, el personaje que fue atacado debe de defenderse.

  Cada vez que un personaje ataque a otro, se debe de imprimir el nombre del personaje que ataca,

  Para calcular el daño que un personaje recibe se debe utilizar la siguiente formula:
  Daño = (%Ataque del atacante) - (%Defensa del atacado)

  Nota: El daño no puede ser menor a 0, y el ataque y defensa es un numero aleatorio entre
  0 y el valor de ataque o defensa del personaje.

  Cada vez que un personaje ataque a otro, se debe de imprimir el daño que recibe el personaje atacado
  y quien ataca y quien es el atacado.
  
  Cuando un personaje ataca a otro, cada personaje debe atacar una vez al menos (Rondas),
  sin embargo, el orden de cada ronda se determina aleatoriamente imprimiendo un numero
  entre 0 y su velocidad.

  Cuando la vida de un personaje llega a 0, se debe de imprimir que el personaje ha muerto.
  y no puede seguir atacando.

  Al final solo debe de quedar un personaje en pie.

  Y debes imprimir un mensaje diciendo quien ha ganado.

  Cada personaje realizara una acción aleatoria, es decir. Aleatoriamente puede atacar (de forma normal),
  atacar con un hechizo o atacar con un arma. (Según el tipo de personaje).

  Además, a quien ataca también se debe de seleccionar aleatoriamente.

  Puedes utilizar metodos como Math.random() para seleccionar aleatoriamente un numero.

  Math.random devuelve un numero entre 0 y 1, si quieres un numero entre 0 y 10, debes de multiplicar
  el resultado por 11.

  Math.floor() redondea un numero decimal hacia abajo. Es importante porque Math.random() devuelve
  numeros decimales.

  Ejemplo:
  Math.floor(Math.random() * 10) //Devuelve un numero entre 0 y 9

  Opcional:
  - Que cada personaje tenga una habilidad especial que se pueda activar una vez por juego.
  - Que cada personaje tenga una probabilidad de esquivar un ataque.
  - Que cada personaje pueda tener items, estos pueden aumentar sus estadisticas o incluso curar al personaje


  Fecha de entrega: 19/05/2025
*/

/*
  Realiza el juego de buscaminas utilizando clases y herencia.
  Este videojuego debe tener las siguientes clases:

*/

class Jugar {
  constructor(nombre) {
    this.nombre = nombre;
    this.tablero = [];
    this.tablero_jugador = [];
    this.vidas = 2;
    this.numero_de_movimientos = 0;
  }

  crearTablero() {
    // Crear un tablero de 3x3
    for (let i = 0; i < 3; i++) {
      // Crear una fila
      this.tablero[i] = [];
      for (let j = 0; j < 3; j++) {
        // Crear una celda
        // 0 = celda vacia, 1 = celda con mina
        this.tablero[i][j] = Math.floor(Math.random() * 2); // 0 o 1
      }
    }
  }

  crearTableroJugador() {
    // Crear un tablero de 3x3
    for (let i = 0; i < 3; i++) {
      // Crear una fila
      this.tablero_jugador[i] = [];
      for (let j = 0; j < 3; j++) {
        // Crear una celda
        this.tablero_jugador[i][j] = " "; // 0 o 1
      }
    }
  }

  elegirCelda() {
    let fila = prompt("Elige una fila (0, 1 o 2): ");
    let columna = prompt("Elige una columna (0, 1 o 2): ");
    // Validar que la fila y columna sean números entre 0 y 2
    if (isNaN(fila) || isNaN(columna)) {
      console.log("Error: Debes ingresar un número.");
      this.elegirCelda();
    } else if (fila < 0 || fila > 2 || columna < 0 || columna > 2) {
      console.log("Error: Debes ingresar un número entre 0 y 2.");
      this.elegirCelda();
    }
    return [fila, columna];
  }

  resultado(fila, columna) {
    if (this.tablero[fila][columna] == 1) {
      console.log("Has perdido una vida");
      this.vidas--;
      this.numero_de_movimientos++;
      this.tablero_jugador[fila][columna] = "X";
      if(this.morir()) {
        console.log("Has perdido el juego");
        return true;
      }
    } else {
      console.log("No has muerto, aún tienes " + this.vidas + " vidas");
      this.numero_de_movimientos++;
      this.tablero_jugador[fila][columna] = "O";
    }
  }

  morir() {
    if (this.vidas == 0) {
      console.log("Has muerto");
      return true;
    }
    return false;
  }

  contarMinas() {
    let contador = 0;
    for (let i = 0; i < this.tablero.length; i++) {
      for (let j = 0; j < this.tablero[i].length; j++) {
        if (this.tablero[i][j] == 1) {
          contador++;
        }
      }
    }
    return contador;
  }

  ganar() {
    let numero_de_minas = this.contarMinas();
    if (this.numero_de_movimientos == 9 - numero_de_minas) {
      console.log("Has ganado");
      return true;
    }
  }
}

let jugador1 = new Jugar("Juan"); //Crea un nuevo objeto de la clase Jugar
jugador1.crearTablero(); //Ejecuta el metodo crearTablero del objeto jugador1
jugador1.crearTableroJugador(); //Ejecuta el metodo crearTableroJugador del objeto jugador1
console.log("Bienvenido al juego de buscaminas");
console.log("El tablero tiene " + jugador1.contarMinas() + " minas");
while (jugador1.vidas > 0){
  let [fila, columna] = jugador1.elegirCelda(); //Ejecuta el metodo elegirCelda del objeto jugador1
  jugador1.resultado(fila, columna); //Ejecuta el metodo resultado del objeto jugador1
  console.log("Tablero jugador");
  console.table(jugador1.tablero_jugador); //Imprime el tablero del jugador
  console.log("Has hecho " + jugador1.numero_de_movimientos + " movimientos");
}

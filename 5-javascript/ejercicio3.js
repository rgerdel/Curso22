//Ejercicio fácil
/*
  Crea una función que cuente desde N hasta 0 de forma descendente y de dos en dos
*/

function contarDesc(a) {
    if (a < 0) {
      return; 
    }
    console.log(a); 
    contarDesc(a - 2); 
  }
  
  contarDesc(14); 
  
  //Ejercicio intermedio
  /*
    Crea una función que calcule el factorial de un número N. El factorial de un número N es el producto 
    de todos los números enteros desde 1 hasta N.
    Por ejemplo, el factorial de 5 es 5 * 4 * 3 * 2 * 1 = 120.
  */
  
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    console.log(n)
    return n * factorial(n - 1);
  }
  
  console.log(factorial(15));
  
  
  //Ejercicio avanzado
  /*
    Crea una función que calcule la serie de Fibonacci hasta el número N. La serie de Fibonacci es una secuencia 
    de números donde cada número es la suma de los dos anteriores. 
    Por ejemplo, la serie de Fibonacci hasta 10 es: 0, 1, 1, 2, 3, 5, 8.
    La serie comienza con 0 y 1, y luego cada número es la suma de los dos anteriores.
  */

let a = 0; 
let b = 1; 
let c;

  function Fibonacci(n){
    if (a <= n){
      console.log(a) // Imprimo valor de a
      c = a + b // Realizo la suma segun los valores
      a = b //Hago el intercambio de valores con las variables
      b = c //Hago el intercambio de valores con las variables
      Fibonacci(n);
    } 
  }
  Fibonacci(10);

/*
  function Fibonacci(n){
    if (n > 0){
      console.log(a)
      c = a + b
      a = b
      b = c 
      Fibonacci(n-1);
    } 
  }
  
  Fibonacci(10);
*/
/*
  function fibonacci(limite, a = 0, b = 1) {
    if (a > limite) return;
    console.log(a);
    fibonacci(limite, b, a + b); 
  }
  
  fibonacci(5);
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
 * @date 2023-10-01
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
//spread operator
const persona = {
  nombre: "Juan",
  edad: 30,
  profesion: "Desarrollador",
};

const persona2 = {
  ...persona,
  nombre: "Pedro",
}

const frutas = ["manzana", "banana", "naranja"];
const frutas2 = ["fresa", "kiwi", ...frutas];

//destructuracion de arreglos
const numeros = [1, 2, 3, 4, 5];
const [uno, dos, tres] = numeros;
console.log(uno); // 1
console.log(dos); // 2
console.log(tres); // 3

//destructuracion de objetos
const persona3 = {
  nombre: "Juan",
  edad: 30,
  profesion: "Desarrollador",
};
const { nombre, edad, profesion } = persona3;

console.log(nombre);

console.log(persona3);
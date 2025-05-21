// Pequeño ejercicio de arrrays dentro de arrays

  //Recorre el siguiente array
  
const juegos = [
  {
    categoria: "juegos de mesa",
    juegos: ["monopoly", "ajedrez", "damas"]
  },
  {
    categoria: "juegos de cartas",
    juegos: ["poker", "uno", "baraja"]
  },
  {
    categoria: "juegos de video",
    juegos: ["fortnite", "call of duty", "fifa"]
  }
];

for (let tipos_de_juegos of juegos) {
  console.log(tipos_de_juegos); //Imprime el objeto de la compra
    for (let categorias in tipos_de_juegos) {
    console.log(tipos_de_juegos[categorias]); //Imprime las propiedades del objeto
  }
}


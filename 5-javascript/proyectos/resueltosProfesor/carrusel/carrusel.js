let imagenes = [
  "https://picsum.photos/id/1015/800/600",
  "https://picsum.photos/id/1016/800/600",
  "https://picsum.photos/id/1018/800/600",
  "https://picsum.photos/id/1020/800/600",
];

let indiceActual = 0;

function verificarIndice() {
  if (indiceActual >= imagenes.length) {
    indiceActual = 0; // Reiniciar al primer índice si está fuera de rango
  } else if (indiceActual < 0) {
    indiceActual = imagenes.length - 1; // Actualizar el índice actual
  }
  return indiceActual; // Retornar el índice si está dentro del rango
}

function mostrarImagen() {
  const carrusel = document.getElementById("carrusel");
  indiceActual = verificarIndice(indiceActual); // Verificar y actualizar el índice actual
  console.log(`Mostrando imagen en el índice: ${indiceActual}`);
  carrusel.style.backgroundImage = `url(${imagenes[indiceActual]})`;
}

document.getElementById("anterior").addEventListener("click", function () {
  indiceActual--;
  mostrarImagen(indiceActual);
});

document.getElementById("siguiente").addEventListener("click", function () {
  indiceActual++;
  mostrarImagen(indiceActual);
});

//Verificar que la página se haya cargado completamente antes de mostrar la primera imagen
mostrarImagen(indiceActual); // Mostrar la primera imagen al cargar

fetch("https://rickandmortyapi.com/api/character").then((texto) => {
  return texto.json();
}).then((informacion) => {
  document.getElementById("personajes").innerHTML = informacion.results.map(character => `
    <div class="flex flex-col items-center justify-center gap-2">
      <img src="${character.image}" alt="${character.name}">
      <h2>${character.name}</h2>
      <p>Status: ${character.status}</p>
    </div>
  `).join("");
  }).catch((error) => {
  console.error("Error al obtener los datos:", error);
  }
)

//traer personajes de rick and morty api
async function traerPersonajes() {
  const apiUrl = "https://rickandmortyapi.com/api/character";
  const charactersContainer = document.getElementById("characters");
  await fetch(apiUrl)
    .then((data) => data.json())
    .then((data) => {
      data.results.forEach((character) => {
        var characterCard = document.createElement("div");
        characterCard.innerHTML = `
        <img src="${character.image}" alt="${character.name}">
        <h3>${character.name}</h3>
        <p>Especie: ${character.species}</p>
        <p>Estado: ${character.status}</p>
        <button onclick="agregarFavorito(${character.id})">❣️</button>
        `;
        charactersContainer.appendChild(characterCard);
      });
    })
    .catch((error) => {
      console.error("Error fetching characters:", error);
    });
}

traerPersonajes();

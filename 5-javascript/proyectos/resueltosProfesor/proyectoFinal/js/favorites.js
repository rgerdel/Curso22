function agregarFavorito(id) {
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  if (!favoritos.some((fav) => fav === id)) {
    favoritos.push(id);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    alert(`El personaje ha sido agregado a tus favoritos.`);
  } else {
    alert(`El personaje ya está en tus favoritos.`);
  }
}

async function mostrarFavoritos() {
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  const apiUrl = "https://rickandmortyapi.com/api/character";
  const favoritesContainer = document.getElementById("favorites");
  favoritesContainer.innerHTML = ""; // Limpiar el contenedor
  await fetch(apiUrl)
    .then((data) => data.json())
    .then((data) => {
      const personajesFavoritos = data.results.filter((character) =>
        favoritos.includes(character.id)
      );
      personajesFavoritos.forEach((personaje) => {
        const characterCard = document.createElement("div");
        characterCard.innerHTML = `
          <img src="${personaje.image}" alt="${personaje.name}">
          <h3>${personaje.name}</h3>
          <p>Especie: ${personaje.species}</p>
          <p>Estado: ${personaje.status}</p>
          <button onclick="eliminarFavorito(${personaje.id})">❌</button>
        `;
        favoritesContainer.appendChild(characterCard);
      });
    })
    .catch((error) => {
      console.error("Error fetching characters:", error);
    });

  if (favoritos.length === 0) {
    favoritesContainer.innerHTML = "<p>No tienes personajes favoritos.</p>";
    return;
  }
}

function eliminarFavorito(id) {
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  favoritos = favoritos.filter((fav) => fav !== id);
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
  mostrarFavoritos();
  alert("Personaje eliminado de tus favoritos.");
}

mostrarFavoritos();

/*
  useEffect es un hook de React que permite realizar efectos secundarios en componentes
*/
import { useState, useEffect } from "react";

function ShowingApi() {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  /*
  abstraccion
  let [nombre, apellido] = ["juan", "rodriguez"];
  console.log(nombre); // "juan"
  */

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((error) => console.error("Error fetching data:", error));
  }, [page]);

  return (
    <div>
      <h1>Personajes de Rick y Morty</h1>
      {data ? (
        <ul>
          {data.results.map((character) => (
            <li key={character.id}>{character.name}</li>
          ))}
        </ul>
      ) : (
        <p>Cargando...</p>
      )}
      <button onClick={() => setPage(page - 1)} disabled={page <= 1}>
        Página anterior
      </button>
      <p>Página actual: {page}</p>
      <button onClick={() => setPage(page + 1)}>Siguiente página</button>
    </div>
  );
}

export { ShowingApi };

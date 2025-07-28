/*
  El hook useState es un hook de React que permite manejar el estado en componentes
  funcionales.
*/
//Primero importamos useState desde React

import { useState } from "react";

function ButtonUseState() {
  // useState devuelve un array con dos elementos: el estado actual y una función para actualizarlo
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}

export { ButtonUseState };
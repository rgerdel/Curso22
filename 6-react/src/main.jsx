import { Button } from "./components/general/Button.jsx";
import { Container } from "./components/general/Container.jsx";
import { StrictMode } from "react";
import { Title } from "./components/general/Title.jsx";
import { ButtonUseState } from "./components/hooks/UseState.jsx";
import { ShowingApi } from "./components/hooks/UseEffect.jsx";
import { createRoot } from "react-dom/client";
import { Tablero } from "./components/tresEnRaya/Tablero.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Tablero />
    <Container direction="col" extraClasses="bg-gray-100 h-screen gap-4">
      <Title text="Bienvenido a mi aplicación" />
      <Button
        text="Hazme click"
        color="orange-600"
        textColor="white"
        extraClasses="mx-4 my-4"
      />
      <Button />
      <Button />
      <ButtonUseState />
    </Container>
    <ShowingApi />
  </StrictMode>
);

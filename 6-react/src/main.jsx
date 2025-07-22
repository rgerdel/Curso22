import Button from './components/Button.jsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Button text="Hazme click" color="orange-600" textColor="white" extraClasses="mx-4 my-4"></Button>
    <Button></Button>
    <Button></Button>
  </StrictMode>
);

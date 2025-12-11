// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { AsignaturaProvider } from './AsignaturaContext';
import App from './App';

ReactDOM.render(
  <AsignaturaProvider>
    <App />
  </AsignaturaProvider>,
  document.getElementById('root')
);
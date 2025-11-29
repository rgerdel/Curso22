import express, { json } from 'express';
import connection from './config/dbConnection.js';
import usuarioRoutes from './routes/usuario.routes.js';
import tareaRoutes from './routes/tarea.routes.js';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(json());
connection; // Ejecutar la conexión a la base de datos

// Configurar CORS
const whitelist = ['http://localhost:3000', 'http://localhost:5173'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('No permitido por CORS'));
    }
  }
};
app.use(cors(corsOptions));

// Ruta principal
app.get('/', (req, res) => {
  res.send('Bienvenido a la API con Express');
});

// Registrar las rutas de usuario y tarea
app.use('/api', usuarioRoutes);
app.use('/api', tareaRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
import express, { json } from 'express'; //importamos express
import connection from './config/dbConnection.js';  //importamos la conexion a la base de datos
import userRoutes from './routes/users.routes.js'; //importamos las rutas de usuarios++
import cors from 'cors';

const app = express(); // Crear el servidor ejecutando express
const port = 3001;//crear un puerto
app.use(json());// Middleware para parsear JSON
connection; // Ejecutar la conexión a la base de datos

//configurar cors
const whitelist = ['http://localhost:3001', 'http://localhost:5173']; // Lista blanca de dominios permitidos
//Opcion privada
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


// Opcion publica
//app.use(cors());


// Usar las rutas de usuarios
app.use('/', userRoutes);

//iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

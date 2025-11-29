import express, { json } from 'express'; //importamos express
import connection from './config/dbConnection.js';  //importamos la conexion a la base de datos
import clienteRoutes from './routes/cliente.routes.js'; //importamos las rutas de clientes
const app = express(); // Crear el servidor ejecutando express
const port = 3002;//crear un puerto
app.use(json());// Middleware para parsear JSON
connection; // Ejecutar la conexión a la base de datos

// Usar las rutas de clientes
app.use('/', clienteRoutes); // Usar las rutas de clientes

//iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

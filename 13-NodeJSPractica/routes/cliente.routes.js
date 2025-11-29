import { Router } from 'express';
import { saldoCliente, crearCliente } from '../controllers/clientes.controllers.js';

const router = Router();    

// Ruta para traer el saldo de un cliente por cédula
router.get('/clientes/:cedula', saldoCliente);

// Ruta para crear un nuevo cliente 
router.post('/clientes', crearCliente);

export default router;

import { Router } from 'express';
import { createAsignatura, getAllAsignaturas, updateAsignatura } from '../controllers/asignatura.controller.js';

const router = Router();    

// Ruta para traer todas las Asignaturas
router.get('/asignaturas', getAllAsignaturas);

// Ruta para crear una nueva Asignatura
router.post('/asignatura', createAsignatura);

// Ruta para actualizar una Asignatura
router.patch('/asignatura/:id', updateAsignatura);

export default router;


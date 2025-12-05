import { Router } from 'express';
import { createAsignatura, getAllAsignaturas, updateAsignatura, getAsignaturaByQuery, deleteAsignatura } from '../controllers/asignatura.controller.js';

const router = Router();    

// Ruta para traer todas las Asignaturas
router.get('/asignaturas', getAllAsignaturas);

// Ruta para crear una nueva Asignatura
router.post('/asignatura', createAsignatura);

// Ruta para actualizar una Asignatura
router.patch('/asignatura/:id', updateAsignatura);

// Ruta para traer una Asignatura por periodo, nombre o codigo
router.get('/asignatura', getAsignaturaByQuery);

// ruta para eliminar una Asignatura (soft delete)
router.delete('/asignatura/:id', deleteAsignatura);

export default router;


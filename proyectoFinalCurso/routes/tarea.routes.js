import { Router } from 'express';
import { createTarea, getAllTareas, updateTarea } from '../controllers/tarea.controller.js';

const router = Router();

// Ruta para traer todos las Tareas
router.get('/tareas', getAllTareas);

// Ruta para crear un nuevo Tareas
router.post('/tarea', createTarea); 

// Ruta para actualizar una Tareas
router.patch('/tarea/:id', updateTarea);

export default router;
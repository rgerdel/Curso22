import { Router } from 'express';
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/users.controller.js';

const router = Router();

// Ruta para traer todos los usuarios
router.get('/users', getAllUsers);

//Ruta para traer un usuario por ID
router.get('/users/:id', getUserById);

// Ruta para crear un nuevo usuario
router.post('/users', createUser);

// Ruta para actualizar un usuario
router.patch('/users/:id', updateUser);

// Ruta para eliminar un usuario (soft delete)
router.delete('/users/:id', deleteUser);

export default router;
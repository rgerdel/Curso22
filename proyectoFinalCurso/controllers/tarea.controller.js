import { Tarea } from '../models/tarea.model.js';

// crear una nueva tarea
export const createTarea = async (req, res) => {
  try {
    const { titulo, descripcion, estado, fecha_vencimiento, usuario } = req.body;

    // Validación básica de campos obligatorios
    if (!titulo || !descripcion || !estado || !fecha_vencimiento || !usuario) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    const nuevaTarea = new Tarea({ titulo, descripcion, estado, fecha_vencimiento, usuario });
    await nuevaTarea.save();

    res.status(201).json(nuevaTarea);
  } catch (error) {
    // Proporcionar detalles del error en la respuesta
    console.error('Error al crear la tarea:', error);
    res.status(400).json({ error: 'Error al crear la tarea', details: error.message });
  }
};

// obtener todas las tareas
export const getAllTareas = async (req, res) => {
  try {
    const tareas = await Tarea.find();
    res.status(200).json(tareas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las tareas', details: error.message });
  }
};

// editar una tarea
export const updateTarea = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const tareaActualizada = await Tarea.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
    if (!tareaActualizada) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    res.status(200).json(tareaActualizada);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar la tarea', details: error.message });
  }
};


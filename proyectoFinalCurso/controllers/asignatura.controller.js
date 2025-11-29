import { Asignatura } from '../models/asignatura.model.js';

// crear una nueva asignatura
export const createAsignatura = async (req, res) => {
  try {
    const { nombre, descripcion, id_profesor, grado, periodo_escolar}  = req.body;

    // Validación básica de campos obligatorios
    if (!nombre || !descripcion || !id_profesor || !grado || !periodo_escolar) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    const nuevaAsignatura = new Asignatura({ nombre, descripcion, id_profesor, grado, periodo_escolar });
    await nuevaAsignatura.save();
    res.status(201).json(nuevaAsignatura);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear la asignatura', details: error.message });
  }
};

// obtener todas las asignaturas
export const getAllAsignaturas = async (req, res) => {
  try {
    const asignaturas = await Asignatura.find();
    res.status(200).json(asignaturas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las asignaturas', details: error.message });
  }
};  

// editar una asignatura
export const updateAsignatura = async (req, res) => {
  try { 
    const { id } = req.params;
    const updates = req.body;
    const asignaturaActualizada = await Asignatura.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
    if (!asignaturaActualizada) {
      return res.status(404).json({ error: 'Asignatura no encontrada' });
    }
    res.status(200).json(asignaturaActualizada);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar la asignatura', details: error.message });
  }
};  

// eliminar una asignatura
export const deleteAsignatura = async (req, res) => {
  try {
    const { id } = req.params;
    const asignaturaEliminada = await Asignatura.findByIdAndDelete(id);
    if (!asignaturaEliminada) {
      return res.status(404).json({ error: 'Asignatura no encontrada' });
    }
    res.status(200).json({ message: 'Asignatura eliminada correctamente' });
  } catch (error) {
    res.status(400).json({ error: 'Error al eliminar la asignatura', details: error.message });
  }
};


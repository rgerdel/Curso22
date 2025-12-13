import { estudiantesGrados  } from '../models/estudiantesGrados.model.js';
import { Asignatura } from '../models/asignatura.model.js';
import { Usuario } from '../models/usuario.model.js';


// obtener el Grado inscrito a cada estudiante
export const getAllEstudiantesGrados = async (req, res) => {
  try {
    const estudiantesGradosData = await estudiantesGrados.find();
    res.status(200).json(estudiantesGradosData);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los grados', details: error.message });
  }
};

// crear una nueva inscripción de grado para un estudiante
export const createEstudianteGrado = async (req, res) => {
  try {
    const { id_estudiante, id_grado } = req.body; 
    const nuevoEstudianteGrado = new estudiantesGrados({ id_estudiante, id_grado });
    await nuevoEstudianteGrado.save();
    res.status(201).json(nuevoEstudianteGrado);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la inscripción de grado', details: error.message });
  }
};

// mostrar todos los grados con detalles del estudiante
export const getEstudiantesConGrados = async (req, res) => {
    try {
        const estudiantesGradosData = await estudiantesGrados.find()
            .populate('id_estudiante', 'nombre apellido') // Poblamos los detalles del estudiante
            .populate('id_grado', 'nombre');             // Poblamos los detalles del grado
        res.status(200).json(estudiantesGradosData);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los estudiantes con grados', details: error.message });
    }
};

export const getAsignaturasByGrado = async (req, res) => {
    try {
        const { id_grado } = req.params;
        const asignaturas = await Asignatura.find({ grado: id_grado })
            .populate('id_profesor', 'nombre apellido')
            .populate('grado', 'nombre');

        if (asignaturas.length === 0) {
            return res.status(404).json({ error: 'No se encontraron asignaturas para el grado proporcionado' });
        }

        res.status(200).json(asignaturas);
    } catch (error) {
        console.error("Error al obtener las asignaturas del grado:", error);
        res.status(500).json({ error: 'Error al obtener las asignaturas', details: error.message });
    }
};
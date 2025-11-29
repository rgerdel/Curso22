import { Usuario } from '../models/user.model.js';

/**
 * Traer todos los usuarios, con opción de filtrar por nombre y apellido.
 * - req.query.name - Filtro opcional por nombre.
 * - req.query.apellido - Filtro opcional por apellido.
 * - Responde con un array de usuarios.
 */
export const getAllUsers = async (req, res) => {
  const { nombre, apellido } = req.query; // Obtener el parámetro de consulta 'nombre'
  let filter = { eliminado: false }; // Filtro base para excluir usuarios eliminados
  if (nombre) {
    filter.nombre = new RegExp(nombre, 'i'); // Filtro por nombre si se proporciona
  }
  if (apellido) {
    filter.apellido = new RegExp(apellido, 'i'); // Filtro por apellido si se proporciona
  }
  //Traer datos paginados
  const options = {
    page: parseInt(req.query.page) || 1,
    limit: 10,
    sort: { createdAt: -1 },
  };
  await Usuario.paginate(filter, options)
    .then(result => res.json(result))
    .catch(err => res.status(400).json({ error: 'Error al obtener los usuarios' }));
}

/**
 * Traer un usuario por su ID.
 * - req.params.id - ID del usuario a buscar.
 * - Responde con el usuario encontrado o un error 404 si no existe.
 */
export const getUserById = async (req, res) => {
  const { id } = req.params; // Obtener el ID de los parámetros de la URL
  await Usuario.findById(id)
    .then(usuario => {
      if (!usuario || usuario.eliminado) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      res.json(usuario);
    })
    .catch(err => res.status(400).json({ error: 'Error al obtener el usuario' }));
}

/**
 * Crear un nuevo usuario.
 * - req.body.nombre - Nombre del usuario.
 * - req.body.apellido - Apellido del usuario.
 * - req.body.email - Email del usuario.
 * - req.body.password - Contraseña del usuario.
 * - req.body.fecha_nacimiento - Fecha de nacimiento del usuario (opcional).
 * - req.body.rol - Rol del usuario (opcional, por defecto 'user').
 * - req.body.eliminado - Estado de eliminación (opcional, por defecto false).
 * - Responde con el usuario creado o un error 400 si hay problemas de validación.
 */
export const createUser = async (req, res) => {
  const { nombre, apellido, email, password, fecha_nacimiento, rol } = req.body;
  const nuevoUsuario = new Usuario({ nombre, apellido, email, password, fecha_nacimiento, rol });
  await nuevoUsuario.save()
    .then(usuario => res.status(201).json(usuario))
    .catch(err => res.status(400).json({ error: 'Error al crear el usuario', details: err.message }));
}

/**
 * Actualizar un usuario existente.
 * - req.params.id - ID del usuario a actualizar.
 * - req.body - Campos a actualizar (nombre, apellido, email, password, fecha_nacimiento, rol).
 * - Responde con el usuario actualizado o un error 404 si no existe.
 * - Valida los datos antes de actualizar.
 */
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  await Usuario.findByIdAndUpdate(id, updates, { new: true, runValidators: true })
    .then(usuario => {
      if (!usuario || usuario.eliminado) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      res.json(usuario);
    })
    .catch(err => res.status(400).json({ error: 'Error al actualizar el usuario', details: err.message }));
}

/**
 * Eliminar (soft delete) un usuario.
 * - req.params.id - ID del usuario a eliminar.
 * - Responde con un mensaje de éxito o un error 404 si no existe.
 * - Marca el campo 'eliminado' como true en lugar de borrar el registro.
 */
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  await Usuario.findByIdAndUpdate(id, { eliminado: true }, { new: true })
    .then(usuario => {
      if (!usuario) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      res.json({ message: 'Usuario eliminado correctamente' });
    })
    .catch(err => res.status(400).json({ error: 'Error al eliminar el usuario' }));
}
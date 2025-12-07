import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ActualizarUsuario = ({ isOpen, onRequestClose, usuario, onUpdate }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    rol: '',
  });

useEffect(() => {
  if (usuario) {
    setFormData({
      nombre: usuario.nombre || '',
      apellido: usuario.apellido || '',
      email: usuario.email || '',
      password: usuario.password || '',
      rol: usuario.rol || '',
    });
  } else {
    console.error("Usuario no definido");
  }
}, [usuario]);

if (!usuario) {
  return null;
}

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch(`http://localhost:3000/api/usuario/${usuario.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json(); // Obtener los detalles del error
      console.error("Error de la API:", errorData);
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log("Datos actualizados desde la API:", data); // Verificar la respuesta de la API
    onUpdate(data); // Llamar a la función de actualización del padre
    onRequestClose(); // Cerrar el modal
  } catch (error) {
    console.error("Error al actualizar el usuario:", error);
  }
};

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2 text-sm" htmlFor="nombre">
              Nombre:
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded text-sm"
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              placeholder="Nombre"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2 text-sm" htmlFor="apellido">
              Apellido:
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded text-sm"
              type="text"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleInputChange}
              placeholder="Apellido"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2 text-sm" htmlFor="email">
              Email:
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded text-sm"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2 text-sm" htmlFor="password">
              Contraseña:
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded text-sm"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Contraseña"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2 text-sm" htmlFor="rol">
              Rol:
            </label>
            <select
              className="w-full p-2 border border-gray-300 rounded text-sm"
              id="rol"
              name="rol"
              value={formData.rol}
              onChange={handleInputChange}
            >
              <option value="estudiante">Estudiante</option>
              <option value="profesor">Profesor</option>
              <option value="admin">Administrador</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 align-center"
              type="submit"
            >
              <i className="fa-solid fa-user-plus mr-2"></i> Actualizar
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-2"
              onClick={onRequestClose}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ActualizarUsuario;
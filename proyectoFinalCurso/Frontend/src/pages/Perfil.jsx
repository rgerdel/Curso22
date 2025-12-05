// src/pages/Perfil.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Perfil() {
  const { id } = useParams();
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/usuario/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsuario(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    if (id) {
      fetchUser();
    }
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la actualización del usuario
    console.log('Actualizar usuario:', usuario);
    navigate(`/estudianteDashboard/${id}`);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="px-4 py-5 border border-gray-200 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold">PERFIL DE USUARIO</span>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2 text-sm" htmlFor="nombre">
            Nombre:
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded text-sm"
            type="text"
            id="nombre"
            value={usuario?.nombre || ''}
            onChange={(e) => setUsuario({ ...usuario, nombre: e.target.value })}
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
            value={usuario?.apellido || ''}
            onChange={(e) => setUsuario({ ...usuario, apellido: e.target.value })}
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
            value={usuario?.email || ''}
            onChange={(e) => setUsuario({ ...usuario, email: e.target.value })}
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2 text-sm" htmlFor="rol">
            Rol:
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded text-sm"
            type="text"
            id="rol"
            value={usuario?.rol || ''}
            onChange={(e) => setUsuario({ ...usuario, rol: e.target.value })}
            placeholder="Rol"
          />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mr-2 h-10"
            type="submit">
            <i className="fas fa-save mr-2"></i>Guardar Cambios
          </button>
        </div>
      </form>
    </div>
  );
}

export { Perfil };
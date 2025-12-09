import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../utils/auth';
import Modal from '../components/Modal';
import Header from '../components/Header';
import '../components/styles.css';

function ListarAsignaturas() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [asignaturas, setAsignaturas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [usuarioActual, setUsuarioActual] = useState(null); // Estado para el usuario actual

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/usuario/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsuarioActual(data); // Actualizar el estado del usuario actual
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  useEffect(() => {
    const fetchAsignaturas = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/asignaturas/detalles");
        if (!response.ok) {
          throw new Error(`Network response was not ok. Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Asignaturas con detalles:', data);
        setAsignaturas(data);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener las asignaturas con detalles:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchAsignaturas();
  }, []);

  const handleToggleUser = (userId) => {
    // Aquí puedes implementar la lógica para activar/desactivar un usuario
    console.log(`Toggle user with ID: ${userId}`);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-0">
      <Header usuario={usuarioActual} id={id} />
      <div className="px-4 py-5 border border-gray-300 bg-gray-300 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <p className="text-xs font-bold ">PANEL DEL {usuarioActual?.rol.toUpperCase() || '' }</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-800 font-bold hover:text-gray-800 text-xs" onClick={() => navigate(`/administradorDashboard/${id}`)}>
            INICIO
          </button>
          <a href={`/usuarios/${id}`} className="text-gray-800 font-bold hover:text-gray-800 text-xs">USUARIO</a>
          <a href={`/asignaturas/${id}`} className="text-gray-800 font-bold hover:text-gray-800 text-xs">MATERIAS</a>
          <a href="/grados" className="text-gray-800 font-bold hover:text-gray-800 text-xs">GRADOS</a>
        </div>
      </div>
      <div className="bg-white shadow-md rounded my-0 bg-gray-400">
        <div className="px-4 py-5 border border-gray-400 bg-gray-400">
          <div className="flex items-center justify-between">
            <button
              className="bg-green-500 text-xs text-white px-4 py-2 rounded hover:bg-green-600 align-center w-24 h-8"
            >
              <i className="fa-solid fa-user-plus"></i> Agregar
            </button>
            <h2 className="text-3xl font-bold text-white">Lista de Asignaturas</h2>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-left font-bold tracking-wide text-white uppercase bg-gray-400 border-b border-gray-400">
                <th className="px-4 py-3 text-xs">Nombre</th>
                <th className="px-4 py-3 text-xs">Descripción</th>
                <th className="px-4 py-3 text-xs">Profesor</th>
                <th className="px-4 py-3 text-xs">Grado</th>
                <th className="px-4 py-3 text-xs"></th>
              </tr>
            </thead>
            <tbody className="bg-gray-200 divide-y divide-gray-200">
              {asignaturas.map((asignatura, index) => (
                <tr key={index} className="text-gray-700">
                  <td className={`px-4 py-1 text-xs ${asignatura.eliminado ? 'line-through' : ''}`}>{asignatura.nombre.toUpperCase()}</td>
                  <td className={`px-4 py-1 text-xs ${asignatura.eliminado ? 'line-through' : ''}`}>{asignatura.descripcion.toUpperCase()}</td>
                  <td className={`px-4 py-1 text-xs ${asignatura.eliminado ? 'line-through' : ''}`}>{`${asignatura.profesorNombre.toUpperCase()} ${asignatura.profesorApellido.toUpperCase()}`}</td>
                  <td className={`px-4 py-1 text-xs ${asignatura.eliminado ? 'line-through' : ''}`}>{asignatura.gradoNombre.toUpperCase()}</td>
                  <td className="px-4 py-1 text-right">
                    <button className="bg-blue-500 text-xs text-white px-2 py-1 rounded hover:bg-blue-600 mr-2 w-24 h-8 " onClick={() => navigate(`/ActualizarAsignatura/${asignatura._id}?currentUserId=${id}`)}><i className="fa-solid fa-file-pen"></i> Actualizar</button>
                    <button
                      className={`bg-${asignatura.eliminado ? 'green' : 'red'}-500 text-xs text-white px-2 py-1 rounded hover:bg-${asignatura.eliminado ? 'green' : 'red'}-600 w-24 h-8`}
                      onClick={() => handleToggleUser(asignatura._id)}
                    >
                      <i className={`fa-solid ${asignatura.eliminado ? 'fa-check' : 'fa-eraser'}`}></i> {asignatura.eliminado ? 'Activar' : 'Eliminar'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export { ListarAsignaturas };
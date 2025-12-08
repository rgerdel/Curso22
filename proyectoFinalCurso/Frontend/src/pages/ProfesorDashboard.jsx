import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../utils/auth';
import Header from '../components/Header.jsx';

function ProfesorDashboard() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [usuario, setUsuario] = useState(null);
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


  const handleLogout = () => {
    logout();
    navigate('/login');
  };

    const handleViewProfile = () => {
    // Almacenar la URL actual antes de redirigir
    const currentPath = window.location.pathname;
    navigate(`/perfil/${id}?from=${encodeURIComponent(currentPath)}`);
    };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
<div class="max-w-5xl mx-auto px-4 py-8">
    <div class="px-4 py-5 border border-gray-200 flex items-center justify-between">
        <div class="flex items-center">
            <span class="text-2xl font-bold">SISTEMA DE GESTION ESTUDIANTIL</span>
        </div>
        <div class="flex flex-col items-end space-y-2">
            <span class="font-semibold text-lg">{usuarioActual?.nombre.toUpperCase() || ''} {usuarioActual?.apellido.toUpperCase() || ''}</span>
            <button
            className="text-blue-500 hover:text-blue-700 text-xs font-bold"
            onClick={handleViewProfile}
          >
            <i className="fa-regular fa-address-card"></i> VER PERFIL
          </button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs" onClick={handleLogout}>
                <i class="fa-solid fa-xmark"></i> CERRAR SESION
            </button>
        </div>
    </div>
    <div class="px-4 py-5 border border-gray-200 flex items-center justify-between">
        <div class="flex items-center space-x-2 text-sm font-bold">
            Panel del  {usuarioActual?.rol.toUpperCase() || ''}
        </div>
        <div class="flex items-center space-x-4 font-bold text-sm">
            BIENVENIDO 
        </div>
    </div>
    <div class="bg-gray-200 px-0 py-5 border border-gray-200">
        <div class="flex flex-wrap justify-center gap-10">
            <div class="bg-white border border-gray-400 p-4 text-left w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded">
                <span class="text-sm font-semibold">Materias Asignadas:</span>
            </div>
            <div class="bg-white border border-gray-400 p-4 text-left w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded">
                <span class="text-sm font-semibold">Tareas Creadas:</span>
            </div>
            <div class="bg-white border border-gray-400 p-4 text-left w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded">
                <span class="text-sm font-semibold ">Tareas Por Evaluar:</span>
            </div>
         </div>
    
    <div class="bg-gray-200 flex flex-wrap justify-center gap-40 px-2 py-8 ">
        <div class="bg-gray-200 h-36 rounded-2xl border border-gray-400 p-4 text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 relative">
            <p className="text-1xl font-bold text-gray-800 uppercase">Gestion de Tareas</p>
            <p className="text-sm text-justify">Profesores pueden crear y administrar sus tareas de forma sencilla.</p>
            <p class="mb-20 relative">
                <a href="/login" class="bg-blue-500 hover:bg-blue-700 text-white  py-1 px-2 rounded text-xs absolute bottom--10 right-0 mb-4 mr-4">
                    <i class="fa-solid fa-file-circle-plus"></i> Nueva Tarea
                </a>
            </p>
        </div>
        <div class="bg-gray-200 h-36 rounded-2xl border border-gray-400 p-4 text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <p className="text-1xl font-bold text-gray-800 uppercase">Tareas Por Evaluar</p>
            <p className="text-sm text-justify">Evalue las tareas de los estudiantes y otorgue una calificacion.</p>
            <p class="mb-20 relative">
                <a href="/login" class="bg-blue-500 hover:bg-blue-700 text-white  py-1 px-2 rounded text-xs absolute bottom--10 right-0 mb-4 mr-4">
                    <i class="fa-solid fa-eye"></i> Ver
                </a>
            </p>
        </div>
    </div>
    </div>
    
</div>

 
  );
}

export { ProfesorDashboard }
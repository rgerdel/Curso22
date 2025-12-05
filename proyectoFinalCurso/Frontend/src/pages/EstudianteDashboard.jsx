// src/pages/EstudianteDashboard.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function EstudianteDashboard() {

  const { id } = useParams();
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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


  return (
 <div class="max-w-5xl mx-auto px-4 py-8">
  <div class="px-4 py-5 border border-gray-200 flex items-center justify-between">
    <div class="flex items-center">
      <span class="text-2xl font-bold">SISTEMA DE GESTION ESTUDIANTIL</span>
    </div>
    <div class="flex flex-col items-end space-y-2">
      <span class="font-semibold text-sm">{usuario?.nombre.toUpperCase() || ''} {usuario?.apellido.toUpperCase() || ''}</span>
      <a href={`/estudianteDashboard/${usuario._id}/perfil`} class="text-blue-500 hover:text-blue-700 text-xs"><i class="fa-regular fa-address-card"></i> VER PERFIL</a>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs">
        <i class="fa-solid fa-xmark"></i> CERRAR SESION
      </button>

    </div>
  </div>
  <div class="px-4 py-5 border border-gray-200 flex items-center justify-between">
    <div class="flex items-center space-x-2 text-sm font-bold">
      Panel del {usuario?.rol.toUpperCase() || ''}
    </div>
    <div class="flex items-center space-x-4 font-bold text-sm">
      BIENVENIDO 
    </div>
  </div>
  <div class="bg-gray-200 px-0 py-5 border border-gray-200">
    <div class="flex flex-wrap justify-center gap-10">
      <div class="bg-white border border-gray-400 p-4 text-left w-full sm:w-1/2 md:w-1/3 lg:w-1/5 ">
        <span class="text-sm font-semibold">Tareas Totales:</span>
      </div>
      <div class="bg-white border border-gray-400 p-4 text-left w-full sm:w-1/2 md:w-1/3 lg:w-1/5 ">
        <span class="text-sm font-semibold">Pendientes:</span>
      </div>
      <div class="bg-white border border-gray-400 p-4 text-left w-full sm:w-1/2 md:w-1/3 lg:w-1/5 ">
        <span class="text-sm font-semibold ">Entregadas:</span>
      </div>
        <div class="bg-white border border-gray-400 p-4 text-left w-full sm:w-1/2 md:w-1/3 lg:w-1/5 ">
        <span class="text-sm font-semibold ">Evaluadas:</span>
      </div>
    </div>
  </div>

<div class="bg-gray-200 px-4 py-5 border border-gray-200">
    <div class="flex flex-col md:flex-row md:items-center md:justify-between p-4 bg-white shadow-md rounded-md">
      <div class="flex flex-col md:w-3/4">
        <div class="flex items-center justify-between mb-2">
          <span class="text-sm font-bold">Materia:</span>
        </div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-sm font-bold">Título de la Tarea:</span>
        </div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-sm">Descripción:</span>
        </div>
         <div class="flex items-center justify-between mb-2">
          <span class="text-sm font-bold text-red-600">PENDIENTE</span>
        </div>
      </div>
      <div class="flex items-center justify-center md:w-1/6">
        <a href="#" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><i class="fa-solid fa-list-check"></i> Entregar</a>
      </div>
    </div>
  </div>
  
</div>

    
  );
}

export { EstudianteDashboard }
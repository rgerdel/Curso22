import { useState, useEffect } from "react";

function ListarUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/usuarios")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log("Datos recibidos:", data); // Verifica los datos recibidos
        setUsuarios(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los usuarios:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center text-gray-600">Cargando...</div>;
  if (error) return <div className="text-center text-red-600">Error al cargar los usuarios: {error.message}</div>;

  return (

<div className="max-w-5xl mx-auto px-4 py-8">
<div class="px-4 py-5 border border-gray-200 flex items-center justify-between">
  <div class="flex items-center">

    <i class="fa-brands fa-app-store-ios"></i>&nbsp;&nbsp;
    <span class="text-lg font-semibold">SISTEMA DE GESTION ESTUDIANTIL</span>
  </div>
  <div class="flex flex-col items-end space-y-2">
  
    <span class="font-semibold text-sm">NOMBRE Y APELLIDO</span>
   
    <a href="#" class="text-blue-500 hover:text-blue-700 text-xs">VER PERFIL</a>
    
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs">
      CERRAR SESION
    </button>
  </div>
</div>
<div className="px-4 py-5 border border-gray-200 flex items-center justify-between">
  <div className="flex items-center space-x-2">
    <a href="/regresar" className="text-blue-500 hover:text-blue-700 text-xs">REGRESAR</a>
  </div>
  <div className="flex items-center space-x-4">
    <a href="/inicio" className="text-gray-600 hover:text-gray-800 text-xs">INICIO</a>
    <a href="/usuario" className="text-gray-600 hover:text-gray-800 text-xs">USUARIO</a>
    <a href="/materias" className="text-gray-600 hover:text-gray-800 text-xs">MATERIAS</a>
    <a href="/grados" className="text-gray-600 hover:text-gray-800 text-xs">GRADOS</a>
  </div>
</div>
  <div className="bg-white shadow-md rounded my-6">
    <div className="px-4 py-5 border border-gray-200">
      <div className="flex items-center justify-between">
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 align-center">
          <i class="fa-solid fa-user-plus"></i> Agregar
        </button>
        <h2 className="text-3xl font-bold text-gray-800">Lista de Usuarios</h2>
        
      </div>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full whitespace-no-wrap">
        <thead>
          <tr className="text-left font-semibold tracking-wide text-gray-700 uppercase bg-gray-50">
            <th className="px-4 py-3 text-xs">Rol</th>
            <th className="px-4 py-3 text-xs">Nombre</th>
            <th className="px-4 py-3 text-xs">Apellido</th>
            <th className="px-4 py-3 text-xs">correo electrónico</th>
            <th className="px-4 py-3 text-xs"></th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {usuarios.map((usuario, index) => (
            <tr key={index} className="text-gray-700">
              <td className="px-4 py-1 place-content-center text-sm flex items-center justify-center w-10 h-10 rounded-full bg-gray-600 text-white text-center">{getRolInitial(usuario.rol)}</td>
              <td className="px-4 py-1 text-xs">{usuario.nombre.toUpperCase()}</td>
              <td className="px-4 py-1 text-xs">{usuario.apellido.toUpperCase()}</td>
              <td className="px-4 py-1 text-xs">{usuario.email.toUpperCase()}</td>
              <td className="px-4 py-1 text-right">
                <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mr-2 w-24 h-10 "><i class="fa-regular fa-pen-to-square"></i> Editar</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 w-24 h-10"><i class="fa-solid fa-eraser"></i> Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="px-4 py-5 border-t border-gray-200 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <p className="place-content-center text-sm flex items-center justify-center w-10 h-10 rounded-full bg-gray-600 text-white text-center">P</p>
        <p className="text-xs text-gray-600">= PROFESOR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p>
        <p className="place-content-center text-sm flex items-center justify-center w-10 h-10 rounded-full bg-gray-600 text-white text-center">E</p>
        <p className="text-xs text-gray-600">= ESTUDIANTE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p className="place-content-center text-sm flex items-center justify-center w-10 h-10 rounded-full bg-gray-600 text-white text-center">A</p>
        <p className="text-xs text-gray-600">= ADMINISTRADOR</p>
      </div>
      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 align-center">
          <i class="fa-solid fa-user-plus"></i> Agregar
        </button>
    </div>
  </div>
</div>
  );
}

function getRolInitial(rol) {
  switch (rol) {
    case 'estudiante':
      return 'E';
    case 'profesor':
      return 'P';
    case 'admin':
      return 'A';
    default:
      return '';
  }
}

export { ListarUsuarios };
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../utils/auth';
import Modal from '../components/Modal';
import Header from '../components/Header.jsx';

function ListarUsuarios() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({ nombre: '', apellido: '', email: '', password: '', rol: 'estudiante' });
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
    fetch("http://localhost:3000/api/usuarios")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setUsuarios(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los usuarios:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleAddUser = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setNewUser({ nombre: '', apellido: '', email: '', password: '', rol: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setUsuarios([...usuarios, data]);
      setIsModalOpen(false);
      setNewUser({ nombre: '', apellido: '', email: '', password: '', rol: '' });
    } catch (error) {
      console.error("Error al agregar el usuario:", error);
      setError(error);
    }
  };

    const handleInicioClick = () => {
    navigate(`/administradorDashboard/${id}`);
  };

  if (loading) return <div className="text-center text-gray-600">Cargando...</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Header usuario={usuarioActual} id={id} />
      <div className="px-4 py-5 border border-gray-200 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-bold">Panel del {usuarioActual?.rol.toUpperCase() || ''}</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-800 text-xs" onClick={handleInicioClick}>
          INICIO
        </button>
          <a href={`/usuarios/${id}`}  className="text-gray-600 hover:text-gray-800 text-xs">USUARIO</a>
          <a href="/materias" className="text-gray-600 hover:text-gray-800 text-xs">MATERIAS</a>
          <a href="/grados" className="text-gray-600 hover:text-gray-800 text-xs">GRADOS</a>
        </div>
      </div>
      <div className="bg-white shadow-md rounded my-6">
        <div className="px-4 py-5 border border-gray-200">
          <div className="flex items-center justify-between">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 align-center"
              onClick={handleAddUser}
            >
              <i className="fa-solid fa-user-plus"></i> Agregar
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
                    <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mr-2 w-24 h-10 "><i className="fa-regular fa-pen-to-square"></i> Editar</button>
                    <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 w-24 h-10"><i className="fa-solid fa-eraser"></i> Eliminar</button>
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
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 align-center"
            onClick={handleAddUser}
          >
            <i className="fa-solid fa-user-plus"></i> Agregar
          </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onRequestClose={handleModalClose}>
        <div className="max-w-sm mx-auto px-4 py-8">
          <form onSubmit={handleSubmit}>
            <div className="px-0 py-3 flex items-center justify-between">
              <div className="flex items-center justify-center w-full">
                <span className="text-2xl font-bold font-center">REGISTRO DE USUARIO</span>
              </div>
            </div>
            <div className="mb-1">
              <label className="block text-gray-700 font-bold mb-2 text-xs" htmlFor="nombre">
                Nombre:
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded text-xs"
                type="text"
                id="nombre"
                name="nombre"
                value={newUser.nombre.toUpperCase()}
                onChange={handleInputChange}
                placeholder="Nombre"
                
              />
            </div>
            <div className="mb-1">
              <label className="block text-gray-700 font-bold mb-2 text-xs" htmlFor="apellido">
                Apellido:
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded text-xs"
                type="text"
                id="apellido"
                name="apellido"
                value={newUser.apellido.toUpperCase()}
                onChange={handleInputChange}
                placeholder="Apellido"
                
              />
            </div>
            <div className="mb-1">
              <label className="block text-gray-700 font-bold mb-2 text-xs" htmlFor="email">
                Correo Electronico:
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded text-xs"
                type="email"
                id="email"
                name="email"
                value={newUser.email.toUpperCase()}
                onChange={handleInputChange}
                placeholder="Email"
                
              />
            </div>
            <div className="mb-1">
              <label className="block text-gray-700 font-bold mb-2 text-xs" htmlFor="password">
                Contraseña:
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded text-xs"
                type=""
                id="password"
                name="password"
                value={newUser.password}
                onChange={handleInputChange}
                placeholder="Contraseña"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2 text-xs" htmlFor="rol">
                Rol:
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded text-xs"
                id="rol"
                name="rol"
                value={newUser.rol}
                onChange={handleInputChange}
              >
                <option value="estudiante">Estudiante</option>
                <option value="profesor">Profesor</option>
                <option value="admin">Administrador</option>
              </select>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 align-center"
                type="submit">
                <i className="fa-solid fa-user-plus"></i>Agregar
              </button>
            </div>
          </form>
        </div>
      </Modal>
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
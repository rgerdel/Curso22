import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../utils/auth';
import Modal from '../components/Modal';
import Header from '../components/Header.jsx';
import '../components/styles.css'


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

  const handleToggleUser = async (userId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/usuario/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eliminado: !usuarios.find(user => user._id === userId).eliminado,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const updatedUser = await response.json();
      setUsuarios(usuarios.map(user => user._id === userId ? updatedUser : user));
    } catch (error) {
      console.error("Error al actualizar el usuario:", error);
      setError(error);
    }
  };

  if (loading) return <div className="text-center text-gray-600">Cargando...</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-0">
      <Header usuario={usuarioActual} id={id} />
      <div className="px-4 py-5 border border-gray-300 bg-gray-300 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <p className="text-xs font-bold ">PANEL DEL {usuarioActual?.rol.toUpperCase() || '' }</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-800 font-bold hover:text-gray-800 text-xs">
            INICIO
          </button>
          <a href={`/usuarios/${id}`} className="text-gray-800 font-bold hover:text-gray-800 text-xs">USUARIO</a>
          <a href="/materias" className="text-gray-800 font-bold hover:text-gray-800 text-xs">MATERIAS</a>
          <a href="/grados" className="text-gray-800 font-bold hover:text-gray-800 text-xs">GRADOS</a>
        </div>
      </div>
      <div className="bg-white shadow-md rounded my- bg-gray-400">
        <div className="px-4 py-5 border border-gray-400 bg-gray-400">
          <div className="flex items-center justify-between">
            <button
              className="bg-green-500 text-xs text-white px-4 py-2 rounded hover:bg-green-600 align-center w-24 h-8"
              onClick={handleAddUser}
            >
              <i className="fa-solid fa-user-plus"></i> Agregar
            </button>
            <h2 className="text-3xl font-bold text-white">Lista de Usuarios</h2>
          </div>
        </div>
        <div className="overflow-x-auto ">
          <table className="w-full whitespace-no-wrap ">
            <thead>
              <tr className="text-left font-bold tracking-wide text-white uppercase bg-gray-400 border-b border-gray-400">
                <th className="px-4 py-3 text-xs">Rol</th>
                <th className="px-4 py-3 text-xs">Nombre</th>
                <th className="px-4 py-3 text-xs">Apellido</th>
                <th className="px-4 py-3 text-xs">correo electrónico</th>
                <th className="px-4 py-3 text-xs"></th>
              </tr>
            </thead>
            <tbody className="bg-gray-200 divide-y divide-gray-200">
              {usuarios.map((usuario, index) => (
                <tr key={index} className="text-gray-700">
                  <td className="px-4 py-1 place-content-center text-sm flex items-center justify-center w-8 h-8 rounded-full bg-gray-600 text-white text-center">{getRolInitial(usuario.rol)}</td>
                  <td className={`px-4 py-1 text-xs ${usuario.eliminado ? 'thick-line-through' : ''}`}>{usuario.nombre.toUpperCase()}</td>
                  <td className={`px-4 py-1 text-xs ${usuario.eliminado ? 'thick-line-through' : ''}`}>{usuario.apellido.toUpperCase()}</td>
                  <td className={`px-4 py-1 text-xs ${usuario.eliminado ? 'thick-line-through' : ''}`}>{usuario.email.toUpperCase()}</td>
                  <td className="px-4 py-1 text-right">
                    <button className="bg-blue-500 text-xs text-white px-2 py-1 rounded hover:bg-blue-600 mr-2 w-20 h-8 " onClick={() => navigate(`/ActualizarUsuario/${usuario._id}?currentUserId=${id}`)}><i className="fa-regular fa-pen-to-square"></i> Editar</button>
                    <button
                      className={`bg-${usuario.eliminado ? 'green' : 'red'}-500 text-xs text-white px-2 py-1 rounded hover:bg-${usuario.eliminado ? 'green' : 'red'}-600 w-20 h-8`}
                      onClick={() => handleToggleUser(usuario._id)}
                    >
                      <i className={`fa-solid ${usuario.eliminado ? 'fa-check' : 'fa-eraser'}`}></i> {usuario.eliminado ? 'Activar' : 'Eliminar'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-4 py-5 border-t border-gray-200 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <p className="place-content-center text-sm flex items-center justify-center w-8 h-8 rounded-full bg-gray-600 text-white text-center font-bold">P</p>
            <p className="text-xs text-white font-bold">= PROFESOR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p>
            <p className="place-content-center text-sm flex items-center justify-center w-8 h-8 rounded-full bg-gray-600 text-white text-center font-bold">E</p>
            <p className="text-xs text-white font-bold">= ESTUDIANTE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p className="place-content-center text-sm flex items-center justify-center w-8 h-8 rounded-full bg-gray-600 text-white text-center font-bold">A</p>
            <p className="text-xs text-white font-bold">= ADMINISTRADOR</p>
          </div>
          <button
            className="bg-green-500 text-xs text-white px-4 py-2 rounded hover:bg-green-600 align-center w-24 h-8"
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
                type="password"
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
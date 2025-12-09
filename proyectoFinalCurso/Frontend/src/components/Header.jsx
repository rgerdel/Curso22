import { useNavigate } from 'react-router-dom';

const Header = ({ usuario, id }) => {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    const currentPath = window.location.pathname;
    navigate(`/perfil/${id}?from=${encodeURIComponent(currentPath)}`);
  };

  const handleLogout = () => {
    // Lógica para cerrar sesión
    // Por ejemplo, puedes llamar a una función de logout desde un contexto o un servicio
    console.log('Cerrar sesión');
    navigate('/login');
  };

  return (
    <div className="px-4 py-5 border border-gray-300 flex items-center justify-between bg-gray-300">
      <div className="flex items-center">
        <span className="text-4xl font-bold ">Sistema de Gestion Estudiantil (SGE)</span>
      </div>
      <div className="flex flex-col items-end space-y-2">
        <span className="font-bold text-sm">
          {usuario?.nombre.toUpperCase() || ''} {usuario?.apellido.toUpperCase() || ''}
        </span>
        <button
          className="text-blue-500 hover:text-blue-700 text-xs font-bold"
          onClick={handleViewProfile}
        >
          <i className="fa-regular fa-address-card"></i> VER PERFIL
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs"
          onClick={handleLogout}
        >
          <i className="fa-solid fa-xmark"></i> CERRAR SESION
        </button>
      </div>
    </div>
  );
};

export default Header;
// src/pages/Login.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setError(null); // Limpiar errores al montar el componente
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      setLoading(false);
      // Redirigir según el rol
      switch (data.rol) {
        case 'admin':
          navigate(`/adminDashboard/${data._id}`);
          break;
        case 'estudiante':
          navigate(`/estudianteDashboard/${data._id}`);
          break;
        case 'profesor':
          navigate(`/profesorDashboard/${data._id}`);
          break;
        default:
          setError('Rol no válido');
      }
    })
    .catch((error) => {
      console.error('Error al iniciar sesión:', error);
      setError('Credenciales incorrectas');
      setLoading(false);
    });
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="max-w-lg mx-auto mt-0 p-6 border border-gray-300 rounded-2xl bg-white">
        <p className="text-2xl font-bold text-gray-800 text-center">SISTEMA DE GESTION ESTUDIANTIL</p>
        <p className="text-sm mb-6 text-center">Gestión de tareas y actividades escolares</p>
        <p className="text-2xl font-bold text-gray-800 text-center mb-4 py-2">Iniciar Sesión</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2 text-sm" htmlFor="email">
              Email:
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded text-sm"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Introduzca su Email"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Introduzca su Contraseña"
            />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mr-2 h-10"
              type="submit">
              <i className="fas fa-sign-in-alt mr-2"></i>Iniciar Sesión
            </button>
          </div>
        </form>
        <p className="text-center mt-4 text-xs">¿Olvidaste tu contraseña?</p>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </div>
      <footer className="w-full bg-gray-800 text-white text-center py-2 mt-10 text-xs">
        <p>&copy; 2025 - Proyecto Final Lexpin&nbsp;&nbsp;<i className="fa-brands fa-creative-commons-by"></i> Rafael Gerdel</p>
      </footer>
    </div>
  );
}

export { Login };
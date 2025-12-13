import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../components/styles.css';

function VerAsignaturas() {
  const { id_grado } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [asignaturas, setAsignaturas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAsignaturasByGrado = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/estudiantesgrados/grado/${id_grado}`);
      if (!response.ok) {
        throw new Error(`Network response was not ok. Status: ${response.status}`);
      }
      const data = await response.json();
      setAsignaturas(data);
      setLoading(false);
    } catch (error) {
      console.error("Error al obtener las asignaturas del grado:", error);
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAsignaturasByGrado();
  }, [id_grado]);

  const handleGoBack = () => {
    const from = new URLSearchParams(location.search).get('from');
    if (from) {
      navigate(decodeURIComponent(from));
    } else {
      navigate('/estudiantesGrados/$id'); // Redirigir a la página principal si no hay página anterior
    }
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-0">
      <div className="bg-white shadow-md rounded my-0 bg-gray-400">
        <div className="px-4 py-5 border border-gray-400 bg-gray-400 flex items-center justify-between">
          
          <h2 className="text-3xl font-bold text-white">Asignaturas del Grado</h2>
          <div className="flex items-center space-x-4">
            <button
              className="bg-blue-500 text-white text-xs px-2 py-1 rounded hover:bg-blue-600"
              onClick={handleGoBack}
            >
              <i className="fa-solid fa-xmark"></i> Cerrar
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-left font-bold tracking-wide text-white uppercase bg-gray-400 border-b border-gray-400">
                <th className="px-4 py-3 text-xs">Nombre de la Asignatura</th>
                <th className="px-4 py-3 text-xs">Profesor</th>
              </tr>
            </thead>
            <tbody className="bg-gray-200 divide-y divide-gray-200">
              {asignaturas.map((asignatura, index) => (
                <tr key={index} className="text-gray-700 ">
                  <td className="px-4 py-1 text-xs">
                    {asignatura.nombre.toUpperCase()}
                  </td>
                  <td className="px-4 py-1 text-xs">
                    {asignatura.id_profesor ? `${asignatura.id_profesor.nombre.toUpperCase()} ${asignatura.id_profesor.apellido.toUpperCase()}` : 'Sin profesor'}
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

export { VerAsignaturas };
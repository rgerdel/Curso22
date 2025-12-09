import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ListarUsuarios } from './pages/Pages.jsx'
import { Login } from './pages/Pages.jsx'
import { EstudianteDashboard } from './pages/Pages.jsx'
import { Home } from './pages/Pages.jsx'
import { ProfesorDashboard } from './pages/Pages.jsx'
import { AdministradorDashboard } from './pages/Pages.jsx'
import { Perfil } from './pages/Pages.jsx'
import { ActualizarUsuario } from './pages/Pages.jsx'
import { ListarGrados } from './pages/Pages.jsx'
import { ListarAsignaturas } from './pages/Pages.jsx'

         

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={< Home />} />
        <Route path="/login" element={< Login />} />
        <Route path="/perfil" element={< Perfil />} /> 
        <Route path="/administradorDashboard/:id" element={< AdministradorDashboard />} />
        <Route path="/administradorDashboard/:id/perfil" element={< Perfil />} /> 
        <Route path="/ActualizarUsuario/:id" element={< ActualizarUsuario />} /> 
        <Route path="/estudianteDashboard/:id" element={<EstudianteDashboard />} />
        <Route path="/estudianteDashboard/:id/perfil" element={<Perfil />} />
        <Route path="/profesorDashboard/:id" element={< ProfesorDashboard />} />
        <Route path="/profesorDashboard/:id/perfil" element={< Perfil />} /> 
        <Route path="/usuarios/:id" element={< ListarUsuarios />} />
        <Route path="/perfil/:id" element={<Perfil />} />
        <Route path="/asignaturas/:id" element={< ListarAsignaturas />} />
        <Route path="/grados/:id" element={< ListarGrados />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

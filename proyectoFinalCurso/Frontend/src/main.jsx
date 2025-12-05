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

         

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
         <Route path="/home" element={< Home />} />
       <Route path="/login" element={< Login />} />
       <Route path="/perfil" element={< Perfil />} /> 
        <Route path="/adminDashboard" element={< AdministradorDashboard />} /> 
        <Route path="/estudianteDashboard/:id" element={<EstudianteDashboard />} />
        <Route path="/estudianteDashboard/:id/perfil" element={<Perfil />} />
        <Route path="/profesorDashboard/:id" element={< ProfesorDashboard />} />
        <Route path="/profesorDashboard/:id/perfil" element={< ProfesorDashboard />} /> 
        <Route path="/usuarios" element={< ListarUsuarios />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CreateUser, ModifyUser, UsersList } from './pages/pages.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/usuarios" element={<UsersList />} />
        <Route path="/usuarios/nuevo" element={<CreateUser />} />
        <Route path="/usuarios/:id" element={<ModifyUser />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

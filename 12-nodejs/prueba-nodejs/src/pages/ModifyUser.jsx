import { useParams } from "react-router-dom"
import { useEffect, useState  } from "react"
function ModifyUser() {
  const { id } = useParams()
  const [user, setUser] = useState()
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
  })

  /* Obtener el usuario de la base de datos */
  useEffect(() => {
    if(id !== undefined){
      fetch("http://localhost:3001/users/" + id, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => setUser(data))
        .then(() => {
          setFormData({
            nombre: user !== undefined ? user.nombre : "",
            apellido: user !== undefined ? user.apellido : "",
            email: user !== undefined ? user.email : "",
            password: user !== undefined ? user.password : "",
          })
        })
    }
  }, [id,user])

  /* Actualizar los datos con el formulario */
  const handleChange = (event) => {
    const { name, value } = event.target
    console.log(name, value)
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3001/users/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
  }
  return <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-gray-200 p-4 rounded">
    <h1 className="text-2xl font-bold text-center">Modificar usuario {user !== undefined ? user.nombre : "Extraño"}</h1>
    <div className="flex flex-col p-3">
      <label htmlFor="nombre">Nombre</label>
      <input className="p-2 border rounded outline-none" type="text" name="nombre" id="nombre"
      placeholder={formData.nombre}
      onChange={handleChange}
      />
    </div>
    <div className="flex flex-col p-3">
      <label htmlFor="apellido">Apellido</label>
      <input className="p-2 border rounded outline-none" type="text" name="apellido" id="apellido" 
      placeholder={formData.apellido}
      onChange={handleChange}
      />
    </div>
    <div className="flex flex-col p-3">
      <label htmlFor="email">Correo</label>
      <input className="p-2 border rounded outline-none" type="email" name="email" id="email" 
      placeholder={formData.email }
      onChange={handleChange}
      />
    </div>
    <div className="flex flex-col p-3">
      <label htmlFor="password">Contraseña</label>
      <input className="p-2 border rounded outline-none" type="password" name="password" id="password" 
      onChange={handleChange}
      />
    </div>
    <button type="submit" className="bg-blue-500 text-white p-2 rounded">Actualizar</button>
  </form>
}

export { ModifyUser }
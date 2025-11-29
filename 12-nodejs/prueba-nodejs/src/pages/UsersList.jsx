import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


//INSTALAR DAYJS PARA FORMATEAR FECHAS (npm i dayjs)
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);


function UsersList() {
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetch("http://localhost:3001/users?page=" + page)
      .then((response) => response.json())
      .then((data) => setUsers(data))
  }, [page])

  const deleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      fetch("http://localhost:3001/users/" + id, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then(() => {
          // Refresh the list
          fetch("http://localhost:3001/users?page=" + page)
            .then((response) => response.json())
            .then((data) => setUsers(data))
        })
    }
  }

  return (
    <div className="p-8 flex flex-col gap-4">
      <h1 className="text-center font-bold">Users List</h1>
      <div className="flex justify-end my-4">
        <Link to="/usuarios/nuevo">
          <button className="flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create user</button>
        </Link>
      </div>
      <table className="table-auto border-collapse border border-slate-400 w-full">
        <thead className="bg-gray-300">
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal text-center">
            <th>ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Creation date</th>
            <th>Last update</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light text-center">
          {users && users.docs?.map((user) => (
            <tr key={user.id}>
              <td>{user._id}</td>
              <td>{user.nombre}</td>
              <td>{user.apellido}</td>
              <td>{user.email}</td>
              <td>{user.rol}</td>
              <td>{dayjs.utc(user.createdAt).local().format('DD-MM-YYYY HH:mm:ss')}</td>
              <td>{dayjs.utc(user.updatedAt).local().format('DD-MM-YYYY HH:mm:ss')}</td>
              
              
              
              <td className="flex justify-center items-center gap-2">
                <button className="flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>
                <button className="flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => { deleteUser(user._id) }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center items-center gap-4 mt-4">
        <button
          onClick={() => setPage(page - 1)}
          disabled={!users.hasPrevPage}
          className={!users.hasPrevPage ? "flex justify-center items-center bg-gray-300 text-white font-bold py-2 px-4 rounded cursor-not-allowed" : "flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}
        >Previous</button>
        <p className="font-light">Page: {users?.page}</p>
        <button
          onClick={() => setPage(page + 1)}
          disabled={!users.hasNextPage}
          className={!users.hasNextPage ? "flex justify-center items-center bg-gray-300 text-white font-bold py-2 px-4 rounded cursor-not-allowed" : "flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}>Next</button>
      </div>
    </div>
  )
}

export { UsersList }
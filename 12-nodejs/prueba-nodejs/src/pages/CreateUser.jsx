import { useState, useEffect, useRef } from "react"

function CreateUser() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const birthDateRef = useRef();
  const [errors, setErrors] = useState([]);

  const sendData = (event) => {
    event.preventDefault()
    setErrors([])
    let nameRegex = /^[A-Za-záéíóúÁÉÍÓÚñÑ' ]+$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let newUser = {
      nombre: firstNameRef.current.value,
      apellido: lastNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      fecha_nacimiento: birthDateRef.current.value,
      rol: "user",
    }
    let newErrors = [];
    if (!newUser.nombre) newErrors.push("First name is required");
    if (!newUser.apellido) newErrors.push("Last name is required");
    if (!newUser.email) newErrors.push("Email is required");
    if (!newUser.password) newErrors.push("Password is required");
    if (!newUser.fecha_nacimiento) newErrors.push("Birth date is required");

    if (!nameRegex.test(newUser.nombre)) newErrors.push("First name is not valid");
    if (!nameRegex.test(newUser.apellido)) newErrors.push("Last name is not valid");
    if (!emailRegex.test(newUser.email)) newErrors.push("Email is not valid");
    if (!passwordRegex.test(newUser.password)) newErrors.push("Password is not valid. It must have at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character");

    if (newErrors.length === 0) {
      fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
      })
        .then((data) => {
          if (data.ok) {
            alert("User created successfully")
          }
          else {
            data.json().then((errorData) => {
              console.log(errorData);
              if (errorData.details) {
                if (errorData.details.includes("duplicate key error")) {
                  setErrors(["Email already exists"]);
                }
              }
              else {
                setErrors([errorData.error])
              }
            })
          }
        })
        .catch((error) => {
          alert("Error creating user")
        })
    }
    else {
      setErrors(newErrors);
    }

  }

  return (
    <div className="p-8 flex flex-col gap-4">
      <h1 className="text-center font-bold">Create User</h1>
      <form className="flex flex-col gap-4" onSubmit={sendData}>
        <input ref={firstNameRef} required type="text" placeholder="First name" className="border border-gray-300 p-2 rounded" />
        <input ref={lastNameRef} required type="text" placeholder="Last name" className="border border-gray-300 p-2 rounded" />
        <input ref={emailRef} required type="email" placeholder="Email" className="border border-gray-300 p-2 rounded" />
        <input ref={passwordRef} required type="password" placeholder="Password" className="border border-gray-300 p-2 rounded" />
        <input ref={birthDateRef} required type="date" placeholder="Birth date" className="border border-gray-300 p-2 rounded" />
        <input type="submit" value="Create" />
        {errors.length > 0 && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <ul>
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}
      </form>
    </div>
  )
}

export { CreateUser }
import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Swal from "sweetalert2"

const AccountCreationForm = () => {
  const { genres } = useLoaderData()

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    genreList: []
  })
  const {username, email, password, genreList} = user

  const handleChange = (e) => {
    const {name, value} = e.target
      setUser({
        ...user,
        [name]: value
      })
  }

  const handleCheck = (id) => {
      console.log(genreList.includes(id))
      setUser({
        ...user,
        genreList: genreList.includes(id)? 
          genreList.filter((genreId) => genreId !== id):
          [...genreList, id]
      })
      console.log(genreList)
    }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username.trim() === "" || !validateEmail(email) || password.trim() === "") {
      return Swal.fire({
          icon: "error",
          title: "ERROR",
          text: "Un dato no se ha rellenado corretamente",
      })
  }
    console.log('Nombre de usuario:', username)
    console.log('Correo electrónico:', email)
    console.log('Contraseña:', password)
    console.log('Generos:', genreList)
    // Pendiente de igresar datos a indexeddb
  }

  const validateEmail = (email) => {
    // Expresión regular para validar el formato de correo electrónico
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return re.test(email)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Nombre de usuario:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <label htmlFor="genres">Favorites Genres:</label>
      <div className="d-flex flex-wrap row-cols-md-5">
        {
          genres.length > 0 ? (
              genres.map((genre) => (
                <div key={genre.id} className="form-checked mb-2">
                    <input type="checkbox" 
                    id = {genre.id}
                    name = {genre.name}
                    onChange={() => handleCheck(genre.id)}
                    checked = {genreList.includes(genre.id)}/>
                    {console.log(genreList.includes(genre.id))}
                    <label htmlFor={genre.id} className="form-checked-label">{genre.name}</label>
                </div>
              ))
          ) : (<div className="col"> <h2>No data found</h2> </div>)
        }
      </div>
      <button type="submit">Crear cuenta</button>
    </form>
  )
}

export default AccountCreationForm

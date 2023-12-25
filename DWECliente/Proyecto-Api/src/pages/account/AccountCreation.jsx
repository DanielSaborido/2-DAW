import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

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
    const {name, type, checked, value, id} = e.target
    setUser({
      ...user,
      [type === "checkbox"? genreList:name]: type === "checkbox"? 
      (checked? id : genreList.filter(!id)) : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Nombre de usuario:', username)
    console.log('Correo electrónico:', email)
    console.log('Contraseña:', password)
    console.log('Generos:', genreList)
    // Pendiente de igresar datos
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
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      {
        genres.length > 0 ? (
            genres.map((genre) => (
                <div key={genre.id} className="form-checked mb-2">
                    <input type="checkbox" 
                    id = {genre.id}
                    name = {genre.name}
                    onChange={handleChange}
                    checked = {genreList.contains(genre.id)? "true" : ""}/>
                    <label htmlFor="prioridad" className="form-checked-label">Prioridad</label>
                </div>
            ))
        ) : (<div className="col"> <h2>No hay datos</h2> </div>)
      }
      <button type="submit">Crear cuenta</button>
    </form>
  )
}

export default AccountCreationForm

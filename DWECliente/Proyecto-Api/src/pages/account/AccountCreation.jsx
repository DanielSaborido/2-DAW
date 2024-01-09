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
          [...genreList, id]:
          genreList.filter((genreId) => genreId !== id)
      })
      console.log(genreList)
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
      <div>
        <label htmlFor="genres">Generos favoritos:</label>
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
          ) : (<div className="col"> <h2>No hay datos</h2> </div>)
        }
      </div>
      <button type="submit">Crear cuenta</button>
    </form>
  )
}

export default AccountCreationForm

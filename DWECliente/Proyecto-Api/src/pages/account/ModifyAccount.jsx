import { useContext, useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import Swal from "sweetalert2"
import { deleteUser, modifyUser } from '../../dataBase/IndexDB'
import { UserContext } from '../../context/UserContext'

const ModifyAccount = () => {
  const {log ,setLog} = useContext(UserContext)
  const { genres } = useLoaderData()
  const navigate = useNavigate()

  const [user, setUser] = useState({
    ...log
  })
  const {id, username, email, phone, password, genreList} = user

  const handleChange = (e) => {
    const {name, value} = e.target
      setUser({
        ...user,
        [name]: value
      })
  }

  const handleCheck = (id) => {
      setUser({
        ...user,
        genreList: genreList.includes(id)? 
          genreList.filter((genreId) => genreId !== id):
          [...genreList, id]
      })
    }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username.trim() === "" || !validateEmail(email) || password.trim() === "" || password.length < 8) {
      return Swal.fire({
          icon: "error",
          title: "ERROR",
          text: "Un dato no se ha rellenado corretamente",
      })
    }

    modifyUser(user, id)
    setLog({
      ...user,
      validation:true
    })
    navigate("/")
  }

  const validateEmail = (email) => {
    // Expresión regular para validar el formato de correo electrónico
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return re.test(email)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className='form-label' htmlFor="username">User:</label>
          <input className='form-control'
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleChange}
          />
          {username.trim() === '' && (
            <span  className="form-text text-danger">User name is missing</span>
          )}
        </div>
        <div className="mb-3">
          <label className='form-label' htmlFor="email">Email:</label>
          <input className='form-control'
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          {!validateEmail(email) && (
            <span  className="form-text text-danger">Email is missing</span>
          )}
        </div>
        <div className="mb-3">
          <label className='form-label' htmlFor="phone">Phone:</label>
          <input
            className='form-control'
            type="number"
            id="phone"
            name="phone"
            value={phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className='form-label' htmlFor="password">Password:</label>
          <input className='form-control'
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          {(password.trim() === '' || password.length < 8) && (
            <span className='form-text text-danger'>Your password must be at least 8 characters long</span>
          )}
        </div>
        <label className='form-label' htmlFor="genres">Favorites Genres:</label>
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
                      <label htmlFor={genre.id} className="form-checked-label">{genre.name}</label>
                  </div>
                ))
            ) : (<div className="col"> <h2>No data found</h2> </div>)
          }
        </div>
        <button type="submit">Save Changes</button>
      </form>
      <button onClick={() => {
        deleteUser(id)
        setLog({
            validation: false
          })
        navigate("/loggin")
        }}>Delete Account</button>
    </>
  )
}

export default ModifyAccount
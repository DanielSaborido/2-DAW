import { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import { validateAccount } from '../../dataBase/IndexDB'
import { UserContext } from '../../context/UserContext'

const LoginForm = () => {
  const { setLog } = useContext(UserContext)
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentialsValid = await validateAccount(user.email, user.password)
  
    if (!validateEmail(user.email) || !credentialsValid.isValid) {
      return Swal.fire({
        icon: "error",
        title: "ERROR",
        text: "Invalid credentials.",
      })
    }

    const {username, email, password, genreList, favorites} = credentialsValid.user

    setLog({
      id: credentialsValid.id,
      username: username,
      email: email,
      password: password,
      genreList: genreList,
      favorites: favorites,
      validation: true
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
          <label className='form-label' htmlFor="email">Email:</label>
          <input className='form-control'
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          {!validateEmail(user.email) && (
            <span  className="form-text text-danger">Email is missing</span>
          )}
        </div>
        <div className="mb-3">
          <label className='form-label' htmlFor="password">Password:</label>
          <input className='form-control'
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          {(user.password.trim() === '' || user.password.length < 8) && (
            <span className='form-text text-danger'>The password must be at least 8 characters long</span>
          )}
        </div>
        <button type="submit">Log in</button>
      </form>
      <button onClick={() => navigate("./create-account")}>Create Account</button>
    </>
  )
}

export default LoginForm
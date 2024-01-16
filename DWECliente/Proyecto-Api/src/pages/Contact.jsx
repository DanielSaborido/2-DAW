import { useContext, useState } from 'react'
import Swal from "sweetalert2"
import { UserContext } from '../context/UserContext'

const Contact = () => {
    const {log} = useContext(UserContext)
    const [formData, setFormData] = useState({
        name: log.username,
        email: log.email,
        phone: log.phone,
        message: ''
    })
    const {name, email, phone, message} = formData

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (name.trim() === "" || message.trim() === "" || !validateEmail(email)) {
            return Swal.fire({
                icon: "error",
                title: "ERROR",
                text: "Un dato no se ha rellenado corretamente",
            })
        }
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        })
    }

    const validateEmail = (email) => {
      // Expresión regular para validar el formato de correo electrónico
      const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      return re.test(email)
    }

  return (
    <div>
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className='form-label' htmlFor="name">User:</label>
                <input className='form-control'
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleChange}
                />
                {name.trim() === '' && (
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
                <label htmlFor="message">Message:</label>
                <textarea
                id="message"
                name="message"
                className="form-control mb-2" 
                value={message}
                onChange={handleChange}
                ></textarea>
            </div>
            
            <button type="submit" className='btn btn-primary'>Sent</button>
        </form>
    </div>
  )
}

export default Contact
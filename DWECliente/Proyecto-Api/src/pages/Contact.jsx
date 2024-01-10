import { useState } from 'react'
import Swal from "sweetalert2"

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const {name, email, message} = formData

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
        console.log('Datos del formulario:', formData)
        setFormData({
            name: '',
            email: '',
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
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                className="form-control mb-2" 
                value={name}
                onChange={handleChange}
            />
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                className="form-control mb-2" 
                value={email}
                onChange={handleChange}
            />
            <label htmlFor="message">Message:</label>
            <textarea
                id="message"
                name="message"
                className="form-control mb-2" 
                value={message}
                onChange={handleChange}
            ></textarea>
            <button type="submit" className='btn btn-primary'>Enviar</button>
        </form>
    </div>
  )
}

export default Contact
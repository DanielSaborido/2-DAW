import { useState } from "react"
import Actividades from './actividades.jsx'

let listaActividades = []
document.addEventListener("DOMContentLoaded", () => {
    const actividades = JSON.parse(localStorage.getItem("Actividades"));
    if (actividades && actividades.length) {
        listaActividades = actividades;
        Actividades(actividades);
    }
});

function almacenLocal(actividad) {
    localStorage.setItem("Actividades", JSON.stringify(actividad))
    Actividades(listaActividades)
}

const FormControlado = () => {
    
    const [todo, setTodo] = useState({
            nombre: "",
            descripcion: "",
            estado: "Pendiente",
            prioridad: false
        })

    const handleSubmit = e => {
        e.preventDefault()
        listaActividades.push(todo);
        almacenLocal(listaActividades)
    }

    const handleChange = e => {
        const {name, type, checked, value} = e.target
        setTodo({
            ...todo,
            [name]: type === "checkbox"? (checked) : value
        })
    }

    return(
        <>
            <h1>Formulario con React</h1>
            <form onSubmit={handleSubmit}>
                <input name="nombre" 
                    placeholder="Nombre tarea" 
                    type="text" className="form-control mb-2" 
                    value={todo.nombre} 
                    onChange={handleChange}/>
                <textarea name="descripcion" 
                    placeholder="Descripcion tarea"  
                    className="form-control mb-2" 
                    value={todo.descripcion} 
                    onChange={handleChange}/>
                <select name="estado"  
                    className="form-control mb-2" 
                    value={todo.estado} 
                    onChange={handleChange}>
                    <option value="Pendiente">Pendiente</option>
                    <option value="Procesando">Procesando</option>
                    <option value="Completado">Completado</option>
                </select>
                <div className="form-checked mb-2">
                    <input type="checkbox" 
                    id = "prioridad"
                    name="prioridad" 
                    value={todo.prioridad} 
                    onChange={handleChange}/>
                    <label htmlFor="prioridad" className="form-checked-label">Prioridad</label>
                </div>
                
                <button type="submit" className="btn btn-primary">Añadir</button>
            </form>
        </>
    )
}

export default FormControlado
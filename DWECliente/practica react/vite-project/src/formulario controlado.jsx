import { useState } from "react"

const FormControlado = ({addTarea}) => {
    const [todo, setTodo] = useState({
            id:"",
            nombre: "",
            descripcion: "",
            estado: "Pendiente",
            prioridad: false
        })

    const {id, nombre, descripcion, estado, prioridad} = todo

    const handleSubmit = e => {
        e.preventDefault()
        if (nombre.trim() === "" || descripcion.trim() === "") {
            return
        }
        addTarea({
            ...todo,
            id: Date.now(),
            estado: estado==="Completado"
        })
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
                    value={nombre} 
                    onChange={handleChange}/>
                <textarea name="descripcion" 
                    placeholder="Descripcion tarea"  
                    className="form-control mb-2" 
                    value={descripcion} 
                    onChange={handleChange}/>
                <select name="estado"  
                    className="form-control mb-2" 
                    value={estado} 
                    onChange={handleChange}>
                    <option value="Pendiente">Pendiente</option>
                    <option value="Procesando">Procesando</option>
                    <option value="Completado">Completado</option>
                </select>
                <div className="form-checked mb-2">
                    <input type="checkbox" 
                    id = "prioridad"
                    name="prioridad" 
                    value={prioridad} 
                    onChange={handleChange}/>
                    <label htmlFor="prioridad" className="form-checked-label">Prioridad</label>
                </div>
                
                <button type="submit" className="btn btn-primary">Añadir</button>
            </form>
        </>
    )
}

export default FormControlado
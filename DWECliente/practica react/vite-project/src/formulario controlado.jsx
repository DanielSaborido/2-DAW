import { useState, useEffect } from "react"

const FormControlado = ({tareas, tareaEditando, actualizarTareaEditada}) => {
    const [todo, setTodo] = useState({
            nombre: "",
            descripcion: "",
            estado: "Pendiente",
            prioridad: false
        })

    const {nombre, descripcion, estado, prioridad} = todo
    useEffect(() => {
        if (tareaEditando) {
          setTodo(tareaEditando);
        }
      }, [tareaEditando])

    const handleSubmit = e => {
        e.preventDefault()
        if (nombre.trim() === "" || descripcion.trim() === "") {
            return
        }
        
        tareaEditando ? actualizarTareaEditada(todo.id, todo) :
            tareas({
                ...todo,
                id: Date.now()
            })

        setTodo({
        nombre: "",
        descripcion: "",
        estado: "Pendiente",
        prioridad: false
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
                    onChange={handleChange}
                    checked = {prioridad? "true" : ""}/>
                    <label htmlFor="prioridad" className="form-checked-label">Prioridad</label>
                </div>
                
                <button type="submit" className={tareaEditando ? 'btn btn-warning' : 'btn btn-primary'}>{tareaEditando? "Guardar" : "Añadir"}</button>
            </form>
        </>
    )
}

export default FormControlado
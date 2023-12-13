import { useState } from "react"

let listaActividades = []
document.addEventListener("DOMContentLoaded", () => {
    const actividades = JSON.parse(localStorage.getItem("Actividades"));
    if (actividades && actividades.length) {
        listaActividades = actividades;
        mostrarActividades(listaActividades)
    }
});

function almacenLocal(actividad) {
    localStorage.setItem("Actividades", JSON.stringify(actividad))
}
function mostrarActividades(actividades){
    return actividades.map(actividad => (
        <div key={actividad.id}>
            <h3>{actividad.nombre}</h3>
            <p>{actividad.descripcion}  {actividad.estado}   {actividad.prioridad ? 'Prioridad máxima' : 'No es prioritario'}</p>
            <a data-id={actividad.id}>X</a>
        </div>
    ));
}

const FormControlado = () => {
    
    const [todo, setTodo] = useState({
            id:"",
            nombre: "",
            descripcion: "",
            estado: "Pendiente",
            prioridad: false
        })

    const handleSubmit = e => {
        e.preventDefault()
        setTodo({
            ...todo,
            id: Date.now()
        })
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
            <h2>Actividades guardadas</h2>
            {mostrarActividades(listaActividades)}
        </>
    )
}

export default FormControlado
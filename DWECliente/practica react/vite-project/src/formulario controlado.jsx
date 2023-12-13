import { useState } from "react"

function almacenLocal(actividad) {
    localStorage.setItem("Actividades", JSON.stringify(actividad))
}

const FormControlado = () => {
    const [listaActividades, setListaActividades] = useState([])
    const [todo, setTodo] = useState({
            id:"",
            nombre: "",
            descripcion: "",
            estado: "Pendiente",
            prioridad: false
        })
    const [actualizarActividades, setActualizarActividades] = useState(false)

    useEffect(() => {
        const actividades = JSON.parse(localStorage.getItem("Actividades")) || [];
        setListaActividades(actividades);
    }, [])

    const handleSubmit = e => {
        e.preventDefault()
        setTodo({
            ...todo,
            id: Date.now()
        })
        setListaActividades([...listaActividades, todo])
        almacenLocal([...listaActividades, todo])
        setActualizarActividades(true)
    }

    const handleChange = e => {
        const {name, type, checked, value} = e.target
        setTodo({
            ...todo,
            [name]: type === "checkbox"? (checked) : value
        })
    }

    const eliminarActividad = (id) => {
        const actividades = listaActividades.filter((actividad) => actividad.id !== id);
        setListaActividades(actividades);
        almacenLocal(actividades);
        setActualizarActividades(true)
    };

    const handleClickEliminar = (e) => {
        const id = parseInt(e.target.dataset.id)
        eliminarActividad(id);
    };

    useEffect(() => {
        if (actualizarActividades) {
            setActualizarActividades(false)
        }
    }, [actualizarActividades])

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
            {actualizarActividades && (
                <>
                {listaActividades.length > 0 ? (
                    <>
                        <h2>Actividades guardadas</h2>
                        {listaActividades.map((actividad) => (
                            <div key={actividad.id}>
                                <h3>{actividad.nombre}</h3>
                                <p>{actividad.descripcion}  {actividad.estado}   {actividad.prioridad ? 'Prioridad máxima' : 'No es prioritario'}</p>
                                <a data-id={actividad.id} onClick={handleClickEliminar}>X</a>
                            </div>
                        ))}
                    </>
                ) : (<h2>No hay actividades</h2>)}
                </>
            )}
        </>
    )
}

export default FormControlado
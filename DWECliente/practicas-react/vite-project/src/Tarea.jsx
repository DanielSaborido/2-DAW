const Tarea = ({actividad, eliminar, actualizar, editar, changePrioridad}) =>{
    const {id, nombre, descripcion, prioridad, estado} = actividad

    return (
        <li className="list-group-item mt-1">
            <div className="d-flex justify-content-between align-items-start">
                <div key={id}>
                    <h4 className={estado === "Completado" ? "completada text-success" : estado === "Procesando" ? "text-warning" : "text-danger"}>{nombre}</h4>
                    <p className={estado === "Completado" ? "completada text-success" : estado === "Procesando" ? "text-warning" : "text-danger"}>{descripcion}</p>
                    <div className="d-flex">
                        <button className="btn btn-sm btn-danger mr-2" onClick={() => eliminar(id)}>Eliminar</button>
                        <button className="btn btn-sm btn-primary mr-2" onClick={() => editar(id)}>Editar</button>
                        <button className="btn btn-sm btn-primary" onClick={() => actualizar(id)}>Actualizar</button>
                    </div>
                </div>
                <span className={prioridad ? 'badge badge-success' : 'badge badge-warning'} onClick={() => changePrioridad(id)}>{prioridad ? 'Prioridad máxima' : 'No es prioritario'}</span>
            </div>
        </li>
    )
}

export default Tarea
const Tarea = ({actividad, deleteTarea, updateTarea}) =>{
    const {id, nombre, descripcion, prioridad, estado} = actividad

    return (
        <li className="list-group-item mt-1">
            <div className="d-flex justify-content-between aling-items-start">
                <div key={id}>
                    <h4 className={estado && "text-decoration-line-through text-success"}>{nombre}</h4>
                    <p>{descripcion}</p>
                    <p>{estado}</p>
                    <div className="d-flex">
                        <button className="btn btn-sm btn-danger mr-2" onClick={() => deleteTarea(id)}>Eliminar</button>
                        <button className="btn btn-sm btn-warning mr-2">Editar</button>
                        <button className="btn btn-sm btn-primary" onClick={() => updateTarea(id)}>Actualizar</button>
                    </div>
                </div>
                <span className="badge badge-success">{prioridad ? 'Prioridad máxima' : 'No es prioritario'}</span>
            </div>
        </li>
    )
}

export default Tarea
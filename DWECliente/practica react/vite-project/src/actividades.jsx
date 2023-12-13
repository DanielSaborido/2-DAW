const Actividades = (actividades) =>{
    return(
        <>
            <h2>Actividades guardadas</h2>
            {actividades.forEach(actividad => 
                <div key={actividad.id}>
                    <h3>{actividad.nombre}</h3>
                    <p>{actividad.descripcion}</p>
                    <p>{actividad.estado}</p>
                    <p>{actividad.prioridad}</p>
                    <a data-id={actividad.id}>X</a>
                </div>
            )}
        </>
    )
}

export default Actividades
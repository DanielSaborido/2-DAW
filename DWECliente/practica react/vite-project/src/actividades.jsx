import Tarea from './Tarea.jsx'

const Actividades = ({actividades, deleteTarea, updateTarea}) =>{
    return(
        <>
            {actividades.length > 0 ? (
                <>
                    <h2 className="mt-2 text-center">Actividades guardadas</h2>
                    {actividades.map((actividad) => (
                        <Tarea key={actividad.id} actividad={actividad} eliminar={deleteTarea} actualizar={updateTarea}/>
                    ))}
                </>
            ) : (<h2 className="mt-2 text-center">No hay actividades</h2>)}
        </>
    )
}

export default Actividades
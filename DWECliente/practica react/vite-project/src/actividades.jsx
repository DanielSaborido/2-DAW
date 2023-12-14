import Tarea from './Tarea.jsx'

const Actividades = ({actividades, deleteTarea, updateTarea, editTarea}) =>{
    const ordenarTareas = (a, b) => {
        if (a.prioridad !== b.prioridad) {
            return b.prioridad - a.prioridad
        } else {
            const estados = {
                Pendiente: 0,
                Procesando: 1,
                Completado: 2
            }
            return estados[a.estado] - estados[b.estado]
        }
    }

    const tareasOrdenadas = [...actividades].sort(ordenarTareas)

    return(
        <>
            {tareasOrdenadas.length > 0 ? (
                <>
                    <h2 className="mt-2 text-center">Actividades guardadas</h2>
                    {tareasOrdenadas.map((actividad) => (
                        <Tarea key={actividad.id} actividad={actividad} eliminar={deleteTarea} actualizar={updateTarea} editar={editTarea}/>
                    ))}
                </>
            ) : (<h2 className="mt-2 text-center">No hay actividades</h2>)}
        </>
    )
}

export default Actividades
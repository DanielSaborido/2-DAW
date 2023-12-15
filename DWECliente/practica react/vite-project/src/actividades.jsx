import Tarea from './Tarea.jsx'

const Actividades = ({actividades, eliminar, actualizar, editar}) =>{
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
            <div className='mt-2'>
                {tareasOrdenadas.length > 0 ? (
                    <>
                        <h2 className="mt-2 text-center">Actividades guardadas</h2>
                        <ul>
                            {tareasOrdenadas.map((actividad) => (
                                <Tarea key={actividad.id} actividad={actividad} eliminar={eliminar} actualizar={actualizar} editar={editar}/>
                            ))}
                        </ul>
                    </>
                ) : (<h2 className="mt-2 text-center">No hay actividades</h2>)}
            </div>
        </>
    )
}

export default Actividades
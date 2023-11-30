import { useRef } from "react"

const FormNoControlado = () => {

    const formulario = useRef(null)


    const handleSubmit = e => {
        e.preventDefault()
        console.log(formulario)
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input name="Nombre" placeholder="Nombre tarea" type="text" className="form-control mb-2"/>
            <textarea name="Descripciom" placeholder="Descripcion tarea"  className="form-control mb-2"/>
            <select name="Estado"  className="form-control mb-2" defaultValue="Pendiente">
                <option value="Pendiente">Pendiente</option>
                <option value="Completado">Completado</option>
            </select>
            <button type="submit" className="btn btn-primary">Añadir</button>
        </form>
        </>
    )
}

export default FormNoControlado
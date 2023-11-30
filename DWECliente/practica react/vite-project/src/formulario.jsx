import { useRef } from "react";
import { useState } from 'react';

const FormNoControlado = () => {

    const formulario = useRef(null)

    let [mensaje, setMensaje] = useState("Todavia no se envio el formulario")

    const handleSubmit = e => {
        e.preventDefault()
        console.log(formulario.current)

        let data = new FormData(formulario.current)
        console.log(...data.entries())

        const objetoDatos = Object.fromEntries([...data.entries()])
        console.log(objetoDatos)

        const {Nombre, Descripcion, Estado} = objetoDatos
        if (!Nombre.trim() && !Descripcion.trim() && Estado === "Pendiente"){
            setMensaje("[Error] Todos los campos estan vacios")
            return
        }
        if (!Nombre.trim()){
            setMensaje("[Error] El campo nombre está vacio")
            return
        }
        if (!Descripcion.trim()){
            setMensaje("[Error] El campo descripcion está vacio")
            return
        }
        if (Estado === "Pendiente"){
            setMensaje("[Error] El campo estado está en Pendiente")
            return
        }
        setMensaje("Datos enviados")
    }

    return(
        <>
            <h1>Formulario con React</h1>
            <form onSubmit={handleSubmit} ref={formulario}>
                <input name="Nombre" placeholder="Nombre tarea" type="text" className="form-control mb-2"/>
                <textarea name="Descripcion" placeholder="Descripcion tarea"  className="form-control mb-2"/>
                <select name="Estado"  className="form-control mb-2" defaultValue="Pendiente">
                    <option value="Pendiente">Pendiente</option>
                    <option value="Completado">Completado</option>
                </select>
                <button type="submit" className="btn btn-primary">Añadir</button>
            </form>
            <h3>{mensaje}</h3>
        </>
    )
}

export default FormNoControlado
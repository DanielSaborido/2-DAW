import { useRef } from "react";
import { useState } from 'react';

const FormNoControlado = () => {

    const formulario = useRef(null)

    let [mensaje, setMensaje] = useState("Todavia no se envio el formulario")
    let [nombre, setNombre] = useState("")
    let [descripcion, setDescripcion] = useState("")
    let [estado, setEstado] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        console.log(formulario.current)

        let data = new FormData(formulario.current)
        console.log(...data.entries())

        const objetoDatos = Object.fromEntries([...data.entries()])
        console.log(objetoDatos)

        const {Nombre, Descripcion, Estado} = objetoDatos
        if (!Nombre.trim() && !Descripcion.trim() && Estado === "Pendiente"){
            setNombre("")
            setDescripcion("")
            setEstado("")
            setMensaje("[Error] Todos los campos estan vacios")
            return
        }
        !Nombre.trim()? (setNombre("[Error] El campo nombre está vacio")) : setNombre("")
        !Descripcion.trim()? (setDescripcion("[Error] El campo nombre está vacio")) : setDescripcion("")
        Estado === "Pendiente"? (setEstado("[Error] El campo nombre está vacio")) : setEstado("")
        if (!Nombre.trim() || !Descripcion.trim() || Estado === "Pendiente"){
            setMensaje("")
            return
        }
        setNombre("")
        setDescripcion("")
        setEstado("")
        setMensaje("Datos enviados")
    }

    return(
        <>
            <h1>Formulario con React</h1>
            <form onSubmit={handleSubmit} ref={formulario}>
                <input name="Nombre" placeholder="Nombre tarea" type="text" className="form-control mb-2"/>
                <p>{nombre}</p>
                <textarea name="Descripcion" placeholder="Descripcion tarea"  className="form-control mb-2"/>
                <p>{descripcion}</p>
                <select name="Estado"  className="form-control mb-2" defaultValue="Pendiente">
                    <option value="Pendiente">Pendiente</option>
                    <option value="Completado">Completado</option>
                </select>
                <p>{estado}</p>
                <button type="submit" className="btn btn-primary">Añadir</button>
            </form>
            <h3>{mensaje}</h3>
        </>
    )
}

export default FormNoControlado
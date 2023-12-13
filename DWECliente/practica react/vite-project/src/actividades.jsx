function mostrarActividades(actividades) {
    const listaActividades = document.createElement("div");
    let index = 0;
    actividades.forEach((actividad) => {
        const {nombre, descripcion, estado, prioridad} = actividad
        const contenedor = document.createElement("div");
        
        const actNombre = document.createElement("h3");
        actNombre.textContent = `${nombre}`;
        const actDescripcion = document.createElement("p");
        actDescripcion.textContent = `${descripcion}`;
        const actEstado = document.createElement("p");
        actEstado.textContent = `${estado}`;
        const actPrioridad = document.createElement("p");
        actPrioridad.textContent = `${prioridad}`;

        const borrado = document.createElement("a");
        borrado.setAttribute("data-id", index);
        borrado.textContent = "X";
        
        contenedor.appendChild(actNombre);
        contenedor.appendChild(actDescripcion);
        contenedor.appendChild(actEstado);
        contenedor.appendChild(actPrioridad);
        contenedor.appendChild(borrado);

        listaActividades.appendChild(contenedor);
        
        index++;
    });
    return listaActividades;
}

const Actividades = (actividades) =>{
    return(
        <>
            <h2>Actividades guardadas</h2>
            {mostrarActividades(actividades)}
        </>
    )
}

export default Actividades
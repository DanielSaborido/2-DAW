const mensajeTextarea = document.querySelector("textarea");
const enviar = document.querySelector("input[value='Agregar']");
const editar = document.querySelector("input[value='Guardar']");
const vaciar = document.querySelector("input[value='Vaciar']");
const listaMensajes = document.querySelector("#lista-mensajes");

let coleccionMensajes = [];

function listeners() {
    document.addEventListener("DOMContentLoaded", () => {
        editar.classList.add("bloqueo");
        const mensajes = JSON.parse(localStorage.getItem("mensajes"));
        if (mensajes && mensajes.length) {
            coleccionMensajes = mensajes;
            mostrarMensajes(mensajes);
        }
    });
    mensajeTextarea.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === "Enter") {
            if (!enviar.classList.contains("bloqueo")){
                anadirMensaje(e)
            } else {
                editarMensaje(e)
            }
        }
    });
    enviar.addEventListener('click', anadirMensaje);
    vaciar.addEventListener('click', eliminarDatos);
    listaMensajes.addEventListener('click', eliminarMensaje);
    listaMensajes.addEventListener('click', editarMensaje);
}
listeners();

function eliminarDatos(e) {
    e.preventDefault();
    coleccionMensajes = [];
    almacenLocal(coleccionMensajes);
}

function anadirMensaje(e) {
    e.preventDefault();
    const mensaje = mensajeTextarea.value;
    coleccionMensajes.push(mensaje);
    almacenLocal(coleccionMensajes);
}

function almacenLocal(lista) {
    localStorage.setItem("mensajes", JSON.stringify(lista));
    mostrarMensajes(lista);
}

function mostrarMensajes(mensajes) {
    limpiarHTML();
    let index = 0;
    mensajes.forEach((mensaje) => {
        const contenedor = document.createElement("div");
        contenedor.classList.add("mensaje");
        
        const texto = document.createElement("p");
        texto.textContent = `Mensaje ${index + 1}: ${mensaje}`;
        
        const editar = document.createElement("a");
        editar.classList.add("editar-mensaje");
        editar.setAttribute("data-id", index);
        editar.textContent = "Editar mensaje";
        
        const borrado = document.createElement("a");
        borrado.classList.add("borrar-mensaje");
        borrado.setAttribute("data-id", index);
        borrado.textContent = "X";
        
        contenedor.appendChild(texto);
        contenedor.appendChild(editar);
        contenedor.appendChild(borrado);
        
        listaMensajes.appendChild(contenedor);
        index++;
    });
    mensajeTextarea.focus();
}

function eliminarMensaje(e) {
    e.preventDefault()
    if (e.target.classList.contains("borrar-mensaje")){
        const mensajeID = e.target.getAttribute("data-id")
        coleccionMensajes = coleccionMensajes.filter((mensaje, index)=> 
            index !== parseInt(mensajeID)
        )
        almacenLocal(coleccionMensajes)
    }
}

function editarMensaje(e) {
    e.preventDefault()
    if (e.target.classList.contains("editar-mensaje")){
        editar.classList.remove("bloqueo")
        enviar.classList.add("bloqueo")
        const mensajeID = e.target.getAttribute("data-id");
        mensajeTextarea.focus();
        editar.addEventListener('click', function(event) {
            guardarCambio(event, mensajeID);
            enviar.classList.remove("bloqueo");
            editar.classList.add("bloqueo");
        });
        mensajeTextarea.addEventListener('keydown', function(event) {
            if (event.ctrlKey && event.key === "Enter") {
                if (!editar.classList.contains("bloqueo")){
                    guardarCambio(event, mensajeID);
                    enviar.classList.remove("bloqueo");
                    editar.classList.add("bloqueo");
                }
            }
        });
    }
}

function guardarCambio(e, id){
    e.preventDefault();
    const mensaje = mensajeTextarea.value;
    coleccionMensajes[id] = mensaje;
    almacenLocal(coleccionMensajes)
    window.location.reload();
}

function limpiarHTML() {
    while (listaMensajes.firstChild) {
        listaMensajes.firstChild.remove();
    }
    mensajeTextarea.value = "";
}

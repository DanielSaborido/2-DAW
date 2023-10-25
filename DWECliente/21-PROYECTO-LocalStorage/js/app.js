const mensajeTextarea = document.querySelector("textarea");
const enviar = document.querySelector("input[value='Agregar']");
const vaciar = document.querySelector("input[value='Vaciar']");
const listaMensajes = document.querySelector("#lista-mensajes");

let coleccionMensajes = [];

function listeners() {
    document.addEventListener("DOMContentLoaded", () => {
        const mensajes = JSON.parse(localStorage.getItem("mensajes"));
        if (mensajes && mensajes.length) {
            coleccionMensajes = mensajes;
            mostrarMensajes(mensajes);
        }
    });

    enviar.addEventListener('click', anadirMensaje);
    vaciar.addEventListener('click', eliminarDatos);
    listaMensajes.addEventListener('click', eliminarMensaje);
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
    console.log("Agregando...", mensaje);
    coleccionMensajes.push(mensaje);
    almacenLocal(coleccionMensajes);
    mensajeTextarea.value = "";
}

function almacenLocal(lista) {
    localStorage.setItem("mensajes", JSON.stringify(lista));
    mostrarMensajes(lista);
}

function mostrarMensajes(mensajes) {
    limpiarHTML();
    let index = 0;
    mensajes.forEach((mensaje) => {
        const texto = document.createElement("p");
        texto.textContent = `Mensaje ${index + 1}: ${mensaje}`;
        const borrado = document.createElement("a");
        borrado.classList.add("borrar-mensaje");
        borrado.setAttribute("data-id", index);
        borrado.textContent = "X";
        listaMensajes.appendChild(texto);
        listaMensajes.appendChild(borrado);
        index++;
    });
}

function eliminarMensaje(e) {
    e.preventDefault()
    console.log(e.target)
    console.log(e.target.classList.contains("borrar-mensaje"))
    if (e.target.classList.contains("borrar-mensaje")){
        console.log("Borando...")
        const mensajeID = e.target.getAttribute("data-id")
        console.log(mensajeID)

        coleccionMensajes = coleccionMensajes.filter((mensaje, index)=> 
            index !== parseInt(mensajeID )
        )
        console.log(coleccionMensajes)
        almacenLocal(coleccionMensajes)
    }
}

function limpiarHTML() {
    while (listaMensajes.firstChild) {
        listaMensajes.firstChild.remove();
    }
}

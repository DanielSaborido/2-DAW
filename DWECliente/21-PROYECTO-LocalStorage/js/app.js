const mensajeTextarea = document.querySelector("textarea")
const envio = document.querySelector(".button")
const listaMensajes = document.querySelector("#lista-mensajes")

let coleccionMensajes = []

function listeners() {
    document.addEventListener("DOMContentLoaded", () => {
        const mensajes = JSON.parse(localStorage.getItem("mensajes"))
        if (mensajes.length){
            articulosCarrito = mensajes
            mostrarMensajes(mensajes)
        }
    })
    envio.addEventListener('submit', anadirMensaje)
}
listeners()

function anadirMensaje(e){
    e.preventDefault()
    if (e.target.classList.contains("#button")){
        console.log("Agregando...")
        const mensaje = mensajeTextarea.values
        console.log(mensaje)
        coleccionMensajes = [...coleccionMensajes, mensaje]
        almacenLocal(coleccionMensajes)
    }
}

function almacenLocal(lista){
    localStorage.setItem("mensajes", JSON.stringify(lista))
    mostrarMensajes(JSON.parse(localStorage.getItem("mensajes")))
}

function mostrarMensajes(mensajes){
    limpiarHTML()
    let index = 1
    mensajes.forEach((mensaje)=> {
        const texto = document.createElement("p")
        texto.innerHTML = `Mensaje ${index}: ${mensaje}`
        listaMensajes.appendChild(texto)
        index++;
    })
}

function limpiarHTML() {
    while (listaMensajes.firstChild){
        listaMensajes.firstChild.remove()
    }
}
const senda = document.querySelector('#senda')
const habilidades = document.querySelector('#habilidad')
const razas = document.querySelector('#raza')
const contenido = document.querySelector("#contenido")

function listeners() {
    document.addEventListener("DOMContentLoaded", () => {
        crearDB()
        obtenerDB()
    })

    senda.addEventListener('input', () => {
        obtenerDB()
    })
    habilidades.addEventListener('input', () => {
        obtenerDB()
    })
    razas.addEventListener('input', () => {
        obtenerDB()
    })

    formulario.addEventListener('submit', function(e) {
        e.preventDefault()
        const rolOBJ = {
            imagen: "img/" + document.querySelector('#imagen').files[0].name,
            nombreCurso: document.querySelector('#nombreCurso').value,
            autor: document.querySelector('#autor').value,
            puntuacion: "img/estrellas.png",
            precio: document.querySelector('#precio').value
        }
        insertarCurso(rolOBJ)
        obtenerDB()
        formulario.reset()
    })
}

listeners()

function mostrarHTML(roles){
    limpiarHTML(contenido)
    if (senda.value !== ""){
        const busqueda = senda.value
        roles = roles.filter(rol => {
            return rol.dataRol.senda.toString().includes(busqueda)
        })
    }
    if (habilidades.value !== ""){
        const busqueda = habilidades.value
        roles = roles.filter(rol => {
            return rol.dataRol.habilidades.toString().includes(busqueda)
        })
    }
    if (razas.value !== ""){
        const busqueda = razas.value
        roles = roles.filter(rol => {
            return rol.dataRol.razas.toString().includes(busqueda)
        })
    }
    if (roles.length === 0){
        const anuncio = document.createElement('h1')
        anuncio.classList.add('encabezado')
        anuncio.id = 'encabezado'
        anuncio.textContent = 'No hay resultados'
        contenido.appendChild(anuncio)
    } else {
        const titulo = document.createElement('h1')
        titulo.classList.add('encabezado')
        titulo.id = 'encabezado'
        titulo.textContent = 'Roles de Skyrim'
        contenido.appendChild(titulo)
        roles.forEach(rol => {
            const { id, dataRol : {imagen, nombreRol, senda, habilidades, razas} } = rol
                const contenedorRol = document.createElement("div")
                contenedorRol.classList.add('card')

                const imagenRol = document.createElement("img")
                imagenRol.classList.add('imagen-curso', 'u-full-width')
                imagenRol.alt = `Imagen del Rol ${nombreRol}`
                imagenRol.src = imagen

                const infoContainer = document.createElement("div")
                infoContainer.classList.add('info-card')

                const nombre = document.createElement("h4")
                nombre.textContent = nombreRol

                const tituloSenda = document.createElement("h4")
                tituloSenda.textContent = "Senda"
                const listaSendas = document.createElement("ul")
                senda.forEach(senda =>{
                    const elemento = document.createElement("li")
                    elemento.textContent = senda
                    listaSendas.appendChild(elemento)
                })

                const tituloHabilidad = document.createElement("h4")
                tituloHabilidad.textContent = "Habilidades"
                const listaHabilidades = document.createElement("ul")
                habilidades.forEach(habilidad =>{
                    const elemento = document.createElement("li")
                    elemento.textContent = habilidad
                    listaHabilidades.appendChild(elemento)
                })

                const tituloRazas = document.createElement("h4")
                tituloRazas.textContent = "Razas"
                const listaRazas = document.createElement("ul")
                razas.forEach(raza =>{
                    const elemento = document.createElement("li")
                    elemento.textContent = raza
                    listaRazas.appendChild(elemento)
                })
                
                infoContainer.appendChild(nombre)
                infoContainer.appendChild(tituloSenda)
                infoContainer.appendChild(listaSendas)
                infoContainer.appendChild(tituloHabilidad)
                infoContainer.appendChild(listaHabilidades)
                infoContainer.appendChild(tituloRazas)
                infoContainer.appendChild(listaRazas)
                contenedorRol.appendChild(imagenRol)
                contenedorRol.appendChild(infoContainer)
                contenido.appendChild(contenedorRol)
        });
    }
}

function limpiarHTML(selector) {
    while (selector.firstChild) {
        selector.firstChild.remove()
    }
}

function obtenerDatosApi(){
    url = "data/roles.json"
    fetch(url)
        .then(res => res.json())
        .then(data => {
            data.forEach(info => {insertarRol(info)})
            obtenerDB()
        })
        .catch(err => console.log(err))
}

function crearDB() {
    let request = indexedDB.open("CRM", 1)

    request.onerror = function () {
        console.error("Error", openRequest.error)
    }
    request.onsuccess = function (event) {
        const db = event.target.result
        db.close()
    }
    request.onupgradeneeded = (event) => {
        let db = event.target.result
        let store = db.createObjectStore('roles', {
            autoIncrement: true
        })
    }
}

function insertarRol(rolOBJ) {
    let request = indexedDB.open("CRM", 1)

    request.onerror = function () {
        console.error("Error", openRequest.error)
    }
    request.onsuccess = function (event) {   
        const db = event.target.result 
        const txn = db.transaction('roles', 'readwrite')
        const store = txn.objectStore('roles')
        let query = store.put(rolOBJ)

        query.onsuccess = function () {
            console.log("Rol insertado")
        }
        query.onerror = function () {
            console.error("Error", openRequest.error)
        }
        txn.oncomplete = function () {
            db.close()
        }
    }
}

function obtenerDB(){
    let request = indexedDB.open("CRM", 1)
    request.onerror = function () {
        console.error("Error", openRequest.error)
    }

    request.onsuccess = function (event) {
        const db = event.target.result
        const txn = db.transaction("roles", "readonly")
        const objectStore = txn.objectStore("roles")
        const cursorRequest = objectStore.openCursor()
        let roles = []

        cursorRequest.onerror = function () {
            console.error("Error", openRequest.error)
        }
        cursorRequest.onsuccess = (event) => {
            let cursor = event.target.result
            if (cursor) {
                let id = cursor.key
                let dataRol = cursor.value
                roles.push({ id, dataRol })
                cursor.continue()
            } else {
                db.close()
                if (roles.length === 0) {
                    obtenerDatosApi()
                } else {
                    mostrarHTML(roles)
                }
            }
        }
    }
}
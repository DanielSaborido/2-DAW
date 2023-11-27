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
    crearSelects(roles, senda)
    crearSelects(roles, habilidades)
    crearSelects(roles, razas)
    if (senda.value.trim() !== ""){
        const busqueda = senda.value.toLowerCase()
        roles = roles.filter(rol => {
            return rol.dataRol.senda.toLowerCase().includes(busqueda)
        })
    }
    if (habilidades.value.trim() !== ""){
        const busqueda = habilidades.value.toLowerCase()
        roles = roles.filter(rol => {
            return rol.dataRol.habilidades.toLowerCase().includes(busqueda)
        })
    }
    if (razas.value.trim() !== ""){
        const busqueda = razas.value.toLowerCase()
        roles = roles.filter(rol => {
            return rol.dataRol.razas.toLowerCase().includes(busqueda)
        })
    }
    if (roles.length === 0){
        const anuncio = document.createElement('h1')
        anuncio.classList.add('encabezado')
        anuncio.id = 'encabezado'
        anuncio.textContent = 'No hay resultados'
        contenido.appendChild(anuncio)
    } else {
        roles.forEach(rol => {
            const { id, dataRol : {imagen, nombreRol, senda, habilidades, razas} } = rol
                const contenedorRol = document.createElement("div")

                const imagenRol = document.createElement("img")
                imagenRol.alt = `Imagen del Rol ${nombreRol}`
                imagenRol.src = imagen

                const infoContainer = document.createElement("div")

                const nombre = document.createElement("h4")
                nombre.textContent = nombreRol

                const creador = document.createElement("p")
                creador.textContent = senda

                const tituloHabilidad = document.createElement("h5")
                tituloHabilidad.textContent = "Habilidades"
                const listaHabilidades = document.createElement("ul")
                habilidades.forEach(habilidad =>{
                    const elemento = document.createElement("li")
                    elemento.textContent = habilidad
                    listaHabilidades.appendChild(elemento)
                })

                const tituloRazas = document.createElement("h5")
                tituloRazas.textContent = "Razas"
                const listaRazas = document.createElement("ul")
                razas.forEach(raza =>{
                    const elemento = document.createElement("li")
                    elemento.textContent = raza
                    listaRazas.appendChild(elemento)
                })
                
                infoContainer.appendChild(nombre)
                infoContainer.appendChild(creador)
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

function obtenerSelect(roles, info) {
    const selectSet = new Set();
    roles.forEach(rol => {
        selectSet.add(rol.dataRol[info]);
    });
    return Array.from(selectSet);
}

function crearSelects(roles, info) {
    const select = obtenerSelect(roles, info);
    let opciones = Array.from(info.querySelectorAll('option'));

    select.forEach(data => {
        const existe = opciones.some(opcion => opcion.value === data);
        if (!existe) {
            const option = document.createElement("option");
            option.classList.add('text-gray-700');
            option.textContent = data;
            option.value = data;
            info.appendChild(option);
        }
    });
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
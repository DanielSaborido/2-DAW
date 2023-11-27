function listeners() {
    document.addEventListener("DOMContentLoaded", () => {
        crearDB()
        obtenerDB()
    })

    buscador.addEventListener('keydown', () => {
        obtenerDB()
    })
    busqueda.addEventListener('click', function(e) {
        e.preventDefault()
    })
    select.addEventListener('input', () => {
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

function obtenerDatosApi(){
    url = "data/roles.json"
    fetch(url)
        .then(res => res.json())
        .then(data => {
            data.forEach(info => {insertarCurso(info)})
            obtenerDB()
        })
        .catch(err => console.log(err))
}

function mostrarHTML(arrayApi){
    const contenido =document.querySelector("#contenido")
    arrayApi.forEach(rol => {
        const { id, dataRol : {imagen, nombreRol, senda, habilidades, razas} } = rol
            const contenedorCurso = document.createElement("div")

            const imagenCurso = document.createElement("img")
            imagenCurso.alt = `Imagen del curso ${nombreRol}`
            imagenCurso.src = imagen

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
            contenedorCurso.appendChild(imagenCurso)
            contenedorCurso.appendChild(infoContainer)
            contenido.appendChild(contenedorCurso)
    });
}

function obtenerSelect(roles, info) {
    const selectSet = new Set();
    roles.forEach(rol => {
        selectSet.add(rol.dataRol[info]);
    });
    return Array.from(selectSet);
}

function crearSelects(roles) {
    const selectSenda = obtenerSelect(roles, "senda");
    let opciones = Array.from(selectSenda.querySelectorAll('option'));

    selectSenda.forEach(senda => {
        const existe = opciones.some(opcion => opcion.value === senda);
        if (!existe) {
            const option = document.createElement("option");
            option.classList.add('text-gray-700');
            option.textContent = senda;
            option.value = senda;
            select.appendChild(option);
        }
    });

    const selectHabilidad = obtenerSelect(roles, "habilidades");
    opciones = Array.from(selectHabilidad.querySelectorAll('option'));

    selectHabilidad.forEach(habilidad => {
        const existe = opciones.some(opcion => opcion.value === habilidad);
        if (!existe) {
            const option = document.createElement("option");
            option.classList.add('text-gray-700');
            option.textContent = habilidad;
            option.value = habilidad;
            select.appendChild(option);
        }
    });

    const selectRaza = obtenerSelect(roles);
    opciones = Array.from(selectRaza.querySelectorAll('option'));

    selectRaza.forEach(raza => {
        const existe = opciones.some(opcion => opcion.value === raza);
        if (!existe) {
            const option = document.createElement("option");
            option.classList.add('text-gray-700');
            option.textContent = raza;
            option.value = raza;
            select.appendChild(option);
        }
    });
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
                    obtenerDatosArrayJSON()
                } else {
                    mostrarHTML(roles)
                }
            }
        }
    }
}
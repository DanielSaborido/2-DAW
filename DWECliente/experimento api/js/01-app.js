const senda = document.querySelector('#senda')
const habilidades = document.querySelector('#habilidad')
const razas = document.querySelector('#raza')
const contenido = document.querySelector("#contenido")
const filtro = document.querySelector("#filtros")
const modal = new bootstrap.Modal('#modalROL', {})

function listeners() {
    document.addEventListener("DOMContentLoaded", () => {
        crearDB()
        obtenerDB()
        filtro.reset()
    })

    filtro.addEventListener('input', () => {
        obtenerDB()
    })
    filtro.addEventListener('reset', () => {
        obtenerDB()
    })

    formulario.addEventListener('submit', function(e) {
        e.preventDefault()
        const rolOBJ = {
            imagen: "img/" + document.querySelector('#imagen').files[0].name,
            nombreRol: document.querySelector('#nombreCurso').value,
            senda: document.querySelector('#autor').value,
            habilidades: "img/estrellas.png",
            razas: document.querySelector('#precio').value
        }
        insertarRol(rolOBJ)
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
            const { id, dataRol : {imagen, nombreRol, descripcion} } = rol
                const contenedorRol = document.createElement("div")
                contenedorRol.classList.add('card')

                const imagenRol = document.createElement("img")
                imagenRol.classList.add('imagen-curso', 'u-full-width')
                imagenRol.alt = `Imagen del Rol ${nombreRol}`
                imagenRol.src = imagen

                const infoContainer = document.createElement("div")
                infoContainer.classList.add('info-card')

                const nombre = document.createElement("h4")
                nombre.classList.add('u-full-width')
                nombre.textContent = nombreRol

                const descripcionRol = document.createElement("p")
                descripcionRol.textContent = descripcion

                const rolButton = document.createElement('button')
                rolButton.classList.add('btn', 'btn-danger', 'w-100')
                rolButton.textContent = 'Mas informacion'
                rolButton.onclick = function(){
                    console.log(rol)
                    mostrarRolModal(rol)
                }
                
                infoContainer.appendChild(nombre)
                infoContainer.appendChild(descripcionRol)
                infoContainer.appendChild(rolButton)
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

function mostrarRolModal(rol){
    const { id, dataRol : {imagen, nombreRol, senda, habilidades, razas} } = rol
    const modalContent = document.querySelector('#modalROL')
    const modalTitle = document.querySelector('#modalROL .modal-title')
    modalTitle.textContent = nombreRol

    const modalBody = document.querySelector('#modalROL .modal-body')
    limpiarHTML(modalBody)
    const imagenRol = document.createElement("img")
    imagenRol.classList.add('imagen-curso', 'u-full-width')
    imagenRol.alt = `Imagen del Rol ${nombreRol}`
    imagenRol.src = imagen

    const tituloSenda = document.createElement("h6")
    tituloSenda.classList.add('font-bold')
    tituloSenda.textContent = "Senda"
    const listaSendas = document.createElement("ul")
    senda.forEach(senda =>{
        const elemento = document.createElement("li")
        elemento.textContent = senda
        listaSendas.appendChild(elemento)
    })

    const tituloHabilidad = document.createElement("h6")
    tituloHabilidad.classList.add('font-bold')
    tituloHabilidad.textContent = "Habilidades"
    const listaHabilidades = document.createElement("ul")
    habilidades.forEach(habilidad =>{
        const elemento = document.createElement("li")
        elemento.textContent = habilidad
        listaHabilidades.appendChild(elemento)
    })

    const tituloRazas = document.createElement("h6")
    tituloRazas.classList.add('font-bold')
    tituloRazas.textContent = "Razas"
    const listaRazas = document.createElement("ul")
    razas.forEach(raza =>{
        const elemento = document.createElement("li")
        elemento.textContent = raza
        listaRazas.appendChild(elemento)
    })
    
    modalBody.appendChild(imagenRol)
    modalBody.appendChild(tituloSenda)
    modalBody.appendChild(listaSendas)
    modalBody.appendChild(tituloHabilidad)
    modalBody.appendChild(listaHabilidades)
    modalBody.appendChild(tituloRazas)
    modalBody.appendChild(listaRazas)

    const modalFooter = document.querySelector('#modalROL .modal-footer')
    limpiarHTML(modalFooter)

    const btnFavoritos = document.createElement('button')
    btnFavoritos.classList.add('btn', 'col')
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || []
    if (favoritos.includes(id)) {
        btnFavoritos.classList.add('btn-warning')
        btnFavoritos.textContent = 'Borrar Favorito'
    } else {
        btnFavoritos.classList.add('btn-danger')
        btnFavoritos.textContent = 'Guardar Favoritos'
    }

    const btnCerrar = document.createElement('button')
    btnCerrar.classList.add('btn', 'btn-secondary', 'col')
    btnCerrar.textContent = 'Cerrar'

    modalFooter.appendChild(btnFavoritos)
    modalFooter.appendChild(btnCerrar)

    modalContent.addEventListener('click', function(event) {
        const cursor = event.target
        if(cursor === btnFavoritos){
            if (favoritos.includes(id)) {
                removerFavorito(id)
                mostrarToast('Receta eliminada de favoritos')
                btnFavoritos.classList.remove('btn-warning')
                btnFavoritos.classList.add('btn-danger')
                btnFavoritos.textContent = 'Guardar Favoritos'
            } else {
                mostrarToast('Receta añadida a favoritos')
                guardarFavorito(id)
                btnFavoritos.classList.remove('btn-danger')
                btnFavoritos.classList.add('btn-warning')
                btnFavoritos.textContent = 'Borrar Favorito'
            }
        }
        if(cursor === btnCerrar){
            modal.hide()
        }
        if (!modalTitle.contains(cursor) && !modalBody.contains(cursor) && !modalFooter.contains(cursor)) {
            modal.hide()
        }
    })
    modal.show()
}

function guardarFavorito(id) {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || []
    if (!favoritos.includes(id)) {
        favoritos.push(id)
    }
    localStorage.setItem('favoritos', JSON.stringify(favoritos))
}

function removerFavorito(id) {
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || []
    favoritos = favoritos.filter(fav => fav !== id)
    localStorage.setItem('favoritos', JSON.stringify(favoritos))
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
//selectores

const submenu = document.querySelector('.submenu')
const carrito = document.querySelector('#carrito')
const vaciarCarrito = document.querySelector("#vaciar-carrito")
const listaCarrito = document.querySelector("#lista-carrito tbody")
const listaCursos = document.querySelector("#lista-cursos")
const buscador = document.querySelector('#buscador')
const select = document.querySelector('#select')
const busqueda = document.querySelector('#busqueda')
const formulario = document.querySelector('#formulario')

//variables
let articulosCarrito = []

//listeners
function listeners() {
    document.addEventListener("DOMContentLoaded", () => {
        crearDB()
        obtenerDB()
        const productos = JSON.parse(localStorage.getItem("productos"))
        if (productos.length){
            submenu.classList.add("activo")
            articulosCarrito = productos
            carritoHTML(productos)
        }
    })
    listaCursos.addEventListener('click', anadirCurso)
    carrito.addEventListener('click', eliminarCurso)
    vaciarCarrito.addEventListener('click', () => {
        articulosCarrito = []
        almacenLocal(articulosCarrito)
        submenu.classList.remove("activo")
    })
    
    // Añadido de nuevos listeners al proyecto
    carrito.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains("quitar-curso")) {
            quitarCurso(e)
            const interval = setInterval(() => {
                quitarCurso(e)
            }, 250)
            carrito.addEventListener('mouseup', () => {
                clearInterval(interval)
            })
        }
    })

    carrito.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains("añadir-curso")) {
            sumarCurso(e)
            const interval = setInterval(() => {
                sumarCurso(e)
            }, 250)
            carrito.addEventListener('mouseup', () => {
                clearInterval(interval)
            })
        }
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
        const cursoOBJ = {
            imagen: "img/" + document.querySelector('#imagen').files[0].name,
            nombreCurso: document.querySelector('#nombreCurso').value,
            autor: document.querySelector('#autor').value,
            puntuacion: "img/estrellas.png",
            precio: document.querySelector('#precio').value
        }
        insertarCurso(cursoOBJ)
        obtenerDB()
        formulario.reset()
    })
}

listeners()

//funciones
function anadirCurso(e){
    e.preventDefault()
    if (e.target.classList.contains("agregar-carrito")){
        const curso = e.target.parentElement.parentElement
        leerDatosCurso(curso)
        submenu.classList.add("activo")
    }
}

function eliminarCurso(e) {
    e.preventDefault()
    if (e.target.classList.contains("borrar-curso")){
        const cursoID = e.target.getAttribute("data-id")
        articulosCarrito = articulosCarrito.filter((curso)=> 
            curso.id !== cursoID 
        )
        mostrarToast("Curso eliminado con exito")
        almacenLocal(articulosCarrito)
    }
    if (articulosCarrito.length === 0){
        submenu.classList.remove("activo")
    }
}

function leerDatosCurso(curso){
    const infoCurso = {
        imagen: curso.querySelector("img").src,
        titulo: curso.querySelector("h4").textContent,
        precio: obtenerPrecioNumerico(curso.querySelector(".precio span").textContent),
        id: curso.querySelector("a").getAttribute("data-id"),
        cantidad: 1
    }

    const existe = articulosCarrito.some((curso) => curso.id === infoCurso.id)
    if(existe){
        articulosCarrito.map((curso) => {
            if (curso.id === infoCurso.id){
                curso.cantidad++
            }
        })
        mostrarToast("Sumando curso")
    } else {
        mostrarToast("Curso agregado correctamente")
        articulosCarrito = [...articulosCarrito, infoCurso]
    }

    almacenLocal(articulosCarrito)
}

function obtenerPrecioNumerico(precioTexto) {
    const numeros = precioTexto.match(/\d+/)
    return numeros ? parseFloat(numeros[0]) : 0
}

function carritoHTML(productos){
    limpiarHTML(listaCarrito)
    let precioTotal = 0

    productos.forEach((curso)=> {
        const {imagen, titulo, precio, cantidad, id} = curso
        const row = document.createElement("tr")

        row.innerHTML = `
        <td>
            <img src="${imagen}" width="300">
        </td>
        <td>${titulo}</td>
        <td>${precio}€</td>
        <td>${cantidad}</td>
        <td>
            <a herf="#" class="añadir-curso" data-id="${id}">+</a>
        </td>
        <td>
            <a herf="#" class="borrar-curso" data-id="${id}">X</a>
        </td>
        <td>
            <a herf="#" class="quitar-curso" data-id="${id}">-</a>
        </td>
        `
        precioTotal += precio*cantidad
        listaCarrito.appendChild(row)
    })
    const sumatoria = document.createElement("tr")
    sumatoria.innerHTML = `
    <td>Precio total: </td>
    <td>${precioTotal}€</td>
    `
    listaCarrito.appendChild(sumatoria)
}

function limpiarHTML(selector) {
    while (selector.firstChild) {
        selector.firstChild.remove()
    }
}

function almacenLocal(lista){
    localStorage.setItem("productos", JSON.stringify(lista))
    carritoHTML(JSON.parse(localStorage.getItem("productos")))
}

// Nuevas funcionalidades

function quitarCurso(e) {
    e.preventDefault()
    if (e.target.classList.contains("quitar-curso")){
        const cursoID = e.target.getAttribute("data-id")
        articulosCarrito.map((curso) => {
            if (curso.id === cursoID && curso.cantidad > 1){
                curso.cantidad--
            }
        })
        almacenLocal(articulosCarrito)
    }
}

function sumarCurso(e) {
    e.preventDefault()
    if (e.target.classList.contains("añadir-curso")){
        const cursoID = e.target.getAttribute("data-id")
        articulosCarrito.map((curso) => {
            if (curso.id === cursoID){
                curso.cantidad++
            }
        })
        almacenLocal(articulosCarrito)
    }
}

function mostrarToast(mensaje){
    const toastDiv = document.querySelector('.toast')
    const toastDivBody = document.querySelector('.toast-body')
    const toast = new bootstrap.Toast(toastDiv)
    toastDivBody.textContent = mensaje
    toast.show()
}

function mostrarHTML(cursos){
    limpiarHTML(listaCursos)
    crearSelectAutores(cursos)
    if (buscador.value.trim() !== ""){
        const busqueda = buscador.value.toLowerCase()
        cursos = cursos.filter(curso => {
            return curso.curso.nombreCurso.toLowerCase().includes(busqueda) || curso.curso.autor.toLowerCase().includes(busqueda)
        })
    }
    if (select.value.trim() !== ""){
        const busqueda = select.value.toLowerCase()
        cursos = cursos.filter(curso => {
            return curso.curso.autor.toLowerCase().includes(busqueda)
        })
    }
    if (cursos.length === 0){
        const anuncio = document.createElement('h1')
        anuncio.classList.add('encabezado')
        anuncio.id = 'encabezado'
        anuncio.textContent = 'No hay resultados'
        listaCursos.appendChild(anuncio)
    } else {
        const titulo = document.createElement('h1')
        titulo.classList.add('encabezado')
        titulo.id = 'encabezado'
        titulo.textContent = 'Ofertas Black Friday'
        listaCursos.appendChild(titulo)
        cursos.forEach(curso => {
            const { id, curso: { imagen, nombreCurso, autor, puntuacion, precio } } = curso
            const contenedorCurso = document.createElement("div")
            contenedorCurso.classList.add('card')

            const imagenCurso = document.createElement("img")
            imagenCurso.classList.add('imagen-curso', 'u-full-width')
            imagenCurso.alt = `Imagen del curso ${nombreCurso}`
            imagenCurso.src = imagen

            const infoContainer = document.createElement("div")
            infoContainer.classList.add('info-card')

            const nombre = document.createElement("h4")
            nombre.textContent = nombreCurso

            const creador = document.createElement("p")
            creador.textContent = autor

            const puntos = document.createElement("img")
            puntos.alt = `Puntuación del curso ${nombreCurso}`
            puntos.src = puntuacion

            const coste = document.createElement("p")
            coste.classList.add('precio')
            coste.textContent = precio + '€'
            const descuento = document.createElement("span")
            descuento.classList.add('u-pull-right')
            descuento.textContent = 1 + '€'
            
            const comprarCurso = document.createElement("a")
            comprarCurso.href = "#"
            comprarCurso.classList.add('u-full-width', 'button-primary', 'button', 'input', 'agregar-carrito')
            comprarCurso.setAttribute("data-id", id)
            comprarCurso.textContent = 'Añadir al carrito'
            
            coste.appendChild(descuento)
            infoContainer.appendChild(nombre)
            infoContainer.appendChild(creador)
            infoContainer.appendChild(puntos)
            infoContainer.appendChild(coste)
            infoContainer.appendChild(comprarCurso)
            contenedorCurso.appendChild(imagenCurso)
            contenedorCurso.appendChild(infoContainer)
            listaCursos.appendChild(contenedorCurso)
        })
    }
}

function obtenerAutores(cursos) {
    const autoresSet = new Set();
    cursos.forEach(curso => {
        autoresSet.add(curso.curso.autor);
    });
    return Array.from(autoresSet);
}

function crearSelectAutores(cursos) {
    const autores = obtenerAutores(cursos);
    const opciones = Array.from(select.querySelectorAll('option'));

    autores.forEach(autor => {
        const existe = opciones.some(opcion => opcion.value === autor);
        if (!existe) {
            const option = document.createElement("option");
            option.classList.add('text-gray-700');
            option.textContent = autor;
            option.value = autor;
            select.appendChild(option);
        }
    });
}

function obtenerDatosArrayJSON(){
    url = "data/cursos.json"
    fetch(url)
        .then(res => res.json())
        .then(data => {
            data.forEach(info => {insertarCurso(info)})
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
        let store = db.createObjectStore('cursos', {
            autoIncrement: true
        })
    }
}

function insertarCurso(cursoOBJ) {
    let request = indexedDB.open("CRM", 1)

    request.onerror = function () {
        console.error("Error", openRequest.error)
    }
    request.onsuccess = function (event) {   
        const db = event.target.result 
        const txn = db.transaction('cursos', 'readwrite')
        const store = txn.objectStore('cursos')
        let query = store.put(cursoOBJ)

        query.onsuccess = function () {
            console.log("Curso insertado")
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
        const txn = db.transaction("cursos", "readonly")
        const objectStore = txn.objectStore("cursos")
        const cursorRequest = objectStore.openCursor()
        let cursos = []

        cursorRequest.onerror = function () {
            console.error("Error", openRequest.error)
        }
        cursorRequest.onsuccess = (event) => {
            let cursor = event.target.result
            if (cursor) {
                let id = cursor.key
                let curso = cursor.value
                cursos.push({ id, curso })
                cursor.continue()
            } else {
                db.close()
                if (cursos.length === 0) {
                    obtenerDatosArrayJSON()
                } else {
                    mostrarHTML(cursos)
                }
            }
        }
    }
}
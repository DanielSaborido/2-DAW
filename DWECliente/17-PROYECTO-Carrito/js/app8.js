//selectores

const submenu = document.querySelector('.submenu') // modificacion para que solo salga el carrito si tienes algo en él
const carrito = document.querySelector('#carrito')
const vaciarCarrito = document.querySelector("#vaciar-carrito")
const listaCarrito = document.querySelector("#lista-carrito tbody")
const listaCursos = document.querySelector("#lista-cursos")

//variables
let articulosCarrito = []

//listeners
function listeners() {
    document.addEventListener("DOMContentLoaded", () => {
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
    
    // adicion para añadir cursos desde el carrito
    carrito.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains("quitar-curso")) {
            quitarCurso(e);
            const interval = setInterval(() => {
                quitarCurso(e);
            }, 250);
            carrito.addEventListener('mouseup', () => {
                clearInterval(interval);
            });
        }
    });
    carrito.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains("añadir-curso")) {
            sumarCurso(e);
            const interval = setInterval(() => {
                sumarCurso(e);
            }, 250);
            carrito.addEventListener('mouseup', () => {
                clearInterval(interval);
            });
        }
    });
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
        mostrarToast("Agregando un curso más")
    } else {
        mostrarToast("Curso agregado correctamente")
        articulosCarrito = [...articulosCarrito, infoCurso]
    }

    almacenLocal(articulosCarrito)
}

function obtenerPrecioNumerico(precioTexto) {
    const numeros = precioTexto.match(/\d+/);
    return numeros ? parseFloat(numeros[0]) : 0;
}

function carritoHTML(productos){
    limpiarHTML()
    let precioTotal = 0;

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

function limpiarHTML() {
    while (listaCarrito.firstChild){
        listaCarrito.firstChild.remove()
    }
}

function almacenLocal(lista){
    localStorage.setItem("productos", JSON.stringify(lista))
    carritoHTML(JSON.parse(localStorage.getItem("productos")))
}

function mostrarToast(mensaje){
    const toastDiv = document.querySelector('.toast')
    const toastDivBody = document.querySelector('.toast-body')
    const toast = new bootstrap.Toast(toastDiv)
    toastDivBody.textContent = mensaje
    toast.show()
}
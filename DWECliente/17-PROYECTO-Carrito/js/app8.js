//selectores

const submenu = document.querySelector('.submenu')
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
    vaciarCarrito.addEventListener('click', () => {
        articulosCarrito = []
        almacenLocal(articulosCarrito)
        submenu.classList.remove("activo")
    })   
}

listeners()

//funciones
function anadirCurso(e){
    e.preventDefault()
    if (e.target.classList.contains("agregar-carrito")){
        console.log("Agregando...")
        const curso = e.target.parentElement.parentElement
        console.log(curso)
        leerDatosCurso(curso)
        submenu.classList.add("activo")
    }
}

function eliminarCurso(e) {
    e.preventDefault()
    console.log(e.target)
    if (e.target.classList.contains("borrar-curso")){
        console.log("Borando...")
        const cursoID = e.target.getAttribute("data-id")
        console.log(cursoID)

        articulosCarrito = articulosCarrito.filter((curso)=> 
            curso.id !== cursoID 
        )
        console.log(articulosCarrito)
        almacenLocal(articulosCarrito)
    }
    if (articulosCarrito.length === 0){
        submenu.classList.remove("activo")
    }
}

function quitarCurso(e) {
    e.preventDefault()
    console.log(e.target)
    if (e.target.classList.contains("quitar-curso")){
        console.log("Quitando un curso...")
        const cursoID = e.target.getAttribute("data-id")
        console.log(cursoID)

        articulosCarrito.map((curso) => {
            if (curso.id === cursoID && curso.cantidad > 1){
                curso.cantidad--
            }
        })
        console.log(articulosCarrito)
        almacenLocal(articulosCarrito)
    }
}

function sumarCurso(e) {
    e.preventDefault()
    console.log(e.target)
    if (e.target.classList.contains("añadir-curso")){
        console.log("Quitando un curso...")
        const cursoID = e.target.getAttribute("data-id")
        console.log(cursoID)

        articulosCarrito.map((curso) => {
            if (curso.id === cursoID){
                curso.cantidad++
            }
        })
        console.log(articulosCarrito)
        almacenLocal(articulosCarrito)
    }
}

function leerDatosCurso(curso){
    console.log(curso)
    const infoCurso = {
        imagen: curso.querySelector("img").src,
        titulo: curso.querySelector("h4").textContent,
        precio: obtenerPrecioNumerico(curso.querySelector(".precio span").textContent),
        id: curso.querySelector("a").getAttribute("data-id"),
        cantidad: 1
    }

    const existe = articulosCarrito.some((curso) => curso.id === infoCurso.id)
    console.log(existe)

    if(existe){
        articulosCarrito.map((curso) => {
            if (curso.id === infoCurso.id){
                curso.cantidad++
            }
        })
    } else {
        console.log(infoCurso)
        articulosCarrito = [...articulosCarrito, infoCurso]
        console.log(articulosCarrito)
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
        console.log(curso.titulo)
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
    //listaCarrito.innerHTML = '' //ineficiente porque es lento

    while (listaCarrito.firstChild){ //forma rapida, destruccion por nodos
        listaCarrito.firstChild.remove()
    }
}

function almacenLocal(lista){
    localStorage.setItem("productos", JSON.stringify(lista))
    carritoHTML(JSON.parse(localStorage.getItem("productos")))
}

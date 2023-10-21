//selectores

const carrito = document.querySelector('#carrito')
const vaciarCarrito = document.querySelector("#vaciar-carrito")
const listaCarrito = document.querySelector("#lista-carrito tbody")
const listaCursos = document.querySelector("#lista-cursos")

//variables
let articulosCarrito = []

//listeners
function listeners() {
    listaCursos.addEventListener('click', anadirCurso)
    carrito.addEventListener('click', eliminarCurso)
    carrito.addEventListener('click', quitarCurso)
    vaciarCarrito.addEventListener('click', () => {
        limpiarHTML;
        articulosCarrito = []
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
        carritoHTML(articulosCarrito)
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
            if (curso.id === cursoID){
                curso.cantidad--
            }
        })
        console.log(articulosCarrito)
        carritoHTML(articulosCarrito)
    }
}

function leerDatosCurso(curso){
    console.log(curso)
    const infoCurso = {
        imagen: curso.querySelector("img").src,
        titulo: curso.querySelector("h4").textContent,
        precio: curso.querySelector(".precio span").textContent,
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

    carritoHTML(articulosCarrito)
}

function carritoHTML(){
    limpiarHTML()

    articulosCarrito.forEach((curso)=> {
        const {imagen, titulo, precio, cantidad, id} = curso
        console.log(curso.titulo)
        const row = document.createElement("tr")

        row.innerHTML = `
        <td>
            <img src="${imagen}" width="300">
        </td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td>
            <a herf="#" class="borrar-curso" data-id="${id}">X</a>
        </td>
        `
        if (cantidad > 1) {
            row.innerHTML += `
            <td>
                <a herf="#" class="quitar-curso" data-id="${id}">-</a>
            </td>
            `
        }

        listaCarrito.appendChild(row)
    })
}

function limpiarHTML() {
    //listaCarrito.innerHTML = '' //ineficiente porque es lento

    while (listaCarrito.firstChild){ //forma rapida, destruccion por nodos
        listaCarrito.firstChild.remove()
    }
}
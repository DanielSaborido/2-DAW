// selectores
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

const contenedor = document.querySelector("#resultado");

const datosBusqueda =	{
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

//crear años del select
const max = new Date().getFullYear()
const min = max - 10
for (let i = max; i > min; i--) {
    const option = document.createElement("option")
    option.value = i
    option.textContent = i
    year.appendChild(option)
}

//liseners
document.addEventListener("DOMContentLoaded", () => {
    mostrarCoches(coches);
})
marca.addEventListener("input", (e) => {
    datosBusqueda.marca = e.target.value
    console.log(datosBusqueda.marca)
    filtrarCoches();
})
year.addEventListener("input", (e) => {
    datosBusqueda.year = parseInt(e.target.value)
    console.log(datosBusqueda.year)
    filtrarCoches();
})
minimo.addEventListener("input", (e) => {
    datosBusqueda.minimo = parseInt(e.target.value)
    console.log(datosBusqueda.minimo)
    filtrarCoches();
})
maximo.addEventListener("input", (e) => {
    datosBusqueda.maximo = parseInt(e.target.value)
    console.log(datosBusqueda.maximo)
    filtrarCoches();
})
puertas.addEventListener("input", (e) => {
    datosBusqueda.puertas = parseInt(e.target.value)
    console.log(datosBusqueda.puertas)
    filtrarCoches();
})
transmision.addEventListener("input", (e) => {
    datosBusqueda.transmision = e.target.value
    console.log(datosBusqueda.transmision)
    filtrarCoches();
})
color.addEventListener("input", (e) => {
    datosBusqueda.color = e.target.value
    console.log(datosBusqueda.color)
    filtrarCoches();
})

//funciones
function limpiarHTML() {
    while (contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild)
    }
}

function mostrarCoches(coches) {
    limpiarHTML()
    coches.forEach(coche => {
        const cocheHtml = document.createElement("p");
        cocheHtml.innerHTML = `
            <p>${coche.marca} - ${coche.modelo} - ${coche.year} - ${coche.precio} - ${coche.puertas} - ${coche.transmision} - ${coche.color}</p>
        `
        contenedor.appendChild(cocheHtml)
    })
}

function filtrarCoches() {
    const resultado = coches
    .filter(filtrarMarca)
    .filter(filtrarYear)
    .filter(filtrarMinimo)
    .filter(filtrarMaximo)
    .filter(filtrarPuertas)
    .filter(filtrarTrasmision)
    .filter(filtrarColor)

    if (resultado.length){
        mostrarCoches(resultado)
    } else{
        noResultado()
    }

    
}

function noResultado(){
    limpiarHTML()
    const anuncio = document.createElement('div')
    anuncio.classList.add("alerta", "error")
    anuncio.textContent= "No hay resultados"
    contenedor.appendChild(anuncio)
}

function filtrarMarca(coche){
    if (datosBusqueda.marca){
        return coche.marca === datosBusqueda.marca
    }
    return coche
}
function filtrarYear(coche){
    if (datosBusqueda.year){
        return coche.year === datosBusqueda.year
    }
    return coche
}
function filtrarMinimo(coche){
    if (datosBusqueda.minimo){
        return coche.precio >= datosBusqueda.minimo
    }
    return coche
}
function filtrarMaximo(coche){
    if (datosBusqueda.maximo){
        return coche.precio <= datosBusqueda.maximo
    }
    return coche
}
function filtrarPuertas(coche){
    if (datosBusqueda.puertas){
        return coche.puertas === datosBusqueda.puertas
    }
    return coche
}
function filtrarTrasmision(coche){
    if (datosBusqueda.transmision){
        return coche.transmision === datosBusqueda.transmision
    }
    return coche
}
function filtrarColor(coche){
    if (datosBusqueda.color){
        return coche.color === datosBusqueda.color
    }
    return coche
}

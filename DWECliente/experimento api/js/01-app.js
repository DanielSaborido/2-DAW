const cargarApibtn = document.querySelector('#cargarAPI');

cargarApibtn.addEventListener('click', obtenerDatosApi)

function obtenerDatosApi(){
    url = "data/roles.json"
    fetch(url)
        /*.then((respuesta) => {
            console.log(respuesta)
            console.log(respuesta.status)
            console.log(respuesta.url)
            console.log(respuesta.statusText)
            console.log(respuesta.json())
        })*/
        .then(res => res.json())
        .then(data => mostrarApiArrayHTML(data))
        .catch(err => console.log(err))
}

function mostrarApiArrayHTML(arrayApi){
    const contenido =document.querySelector("#contenido")
    arrayApi.forEach(rol => {
        const { imagen, nombreRol, senda } = rol
            const contenedorCurso = document.createElement("div")

            const imagenCurso = document.createElement("img")
            imagenCurso.alt = `Imagen del curso ${nombreRol}`
            imagenCurso.src = imagen

            const infoContainer = document.createElement("div")

            const nombre = document.createElement("h4")
            nombre.textContent = nombreRol

            const creador = document.createElement("p")
            creador.textContent = senda
            
            infoContainer.appendChild(nombre)
            infoContainer.appendChild(creador)
            contenedorCurso.appendChild(imagenCurso)
            contenedorCurso.appendChild(infoContainer)
            contenido.appendChild(contenedorCurso)
    });
}
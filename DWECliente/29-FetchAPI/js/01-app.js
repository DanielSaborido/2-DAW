const cargarTXTbtn = document.querySelector('#cargarTxt');

cargarTXTbtn.addEventListener('click', obtenerDatosTXT)

function obtenerDatosTXT(){
    fetch("data/datos.txt")
        /*.then((respuesta) => {
            console.log(respuesta)
            console.log(respuesta.status)
            console.log(respuesta.url)
            console.log(respuesta.statusText)
            console.log(respuesta.text())
        })*/
        .then(res => res.text())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}

const cargarJSONbtn = document.querySelector('#cargarJSON');

cargarJSONbtn.addEventListener('click', obtenerDatosJSON)

function obtenerDatosJSON(){
    url = "data/empleado.json"
    fetch(url)
        /*.then((respuesta) => {
            console.log(respuesta)
            console.log(respuesta.status)
            console.log(respuesta.url)
            console.log(respuesta.statusText)
            console.log(respuesta.json())
        })*/
        .then(res => res.json())
        .then(data => mostrarHTML(data))
        .catch(err => console.log(err))
}

function mostrarHTML({empresa, nombre, trabajo}){
    const contenido =document.querySelector("#contenido")
    contenido.innerHTML= `
    <p>Nombre: ${nombre}</p>
    <p>Empresa: ${empresa}</p>
    <p>Trabajo: ${trabajo}</p>
    `
}

const cargarArrayJSONbtn = document.querySelector('#cargarJSONArray');

cargarArrayJSONbtn.addEventListener('click', obtenerDatosArrayJSON)

function obtenerDatosArrayJSON(){
    url = "data/empleados.json"
    fetch(url)
        /*.then((respuesta) => {
            console.log(respuesta)
            console.log(respuesta.status)
            console.log(respuesta.url)
            console.log(respuesta.statusText)
            console.log(respuesta.json())
        })*/
        .then(res => res.json())
        .then(data => mostrarArrayHTML(data))
        .catch(err => console.log(err))
}

function mostrarArrayHTML(empleados){
    const contenido =document.querySelector("#contenido")
    let html = ""
    empleados.forEach(empleado => {
        const { nombre, trabajo, empresa} = empleado
        html += `
        <p>Nombre: ${nombre}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>
        </br>
        `
    });
    contenido.innerHTML = html
}

const cargarApibtn = document.querySelector('#cargarAPI');

cargarApibtn.addEventListener('click', obtenerDatosApi)

function obtenerDatosApi(){
    url = "https://picsum.photos/list"
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
    let html = ""
    arrayApi.forEach(perfil => {
        const { author, filename, post_url} = perfil
        html += `
        <p>Autor: ${author}</p>
        <p>Nombre archivo: ${filename}</p>
        <a herf=${post_url}>Ver magen</p>
        </br>
        `
    });
    contenido.innerHTML = html
}
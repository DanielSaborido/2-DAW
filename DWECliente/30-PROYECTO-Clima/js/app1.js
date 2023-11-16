// url = http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}
// api key = 0cb124d9474a6c689a7d8a47747ad257
const formulario = document.querySelector('#formulario');
const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');


window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima)
})

function buscarClima(e) {
    e.preventDefault()
    const ciudad = document.querySelector('#ciudad').value
    const pais = document.querySelector('#pais').value;
    formulario.reset()
    
    if (ciudad === "" && pais === ""){
        mostrarError("Ambos campos están vacios")
        return
    } else if (ciudad === "" || !validarCiudad(ciudad)) {
        mostrarError("El campo \"Ciudad\" no es válido");
        return;
    } else if (pais === "") {
        mostrarError("El campo \"País\" está vacio");
        return;
    }

    consultarAPI(ciudad, pais)
};

const validarCiudad = (ciudad) => {
    const rexg = /^(?=.{1,40}$)[a-zA-ZáéíóúüñÁÉÍÓÚÑ]+(?:[\s][a-zA-ZáéíóúüñÁÉÍÓÚÑ]+)*$/;
    const resultado = rexg.test(ciudad)
    return resultado
}

function mostrarError(mensaje) {
    const alerta = document.createElement('div');
    alerta.classList.add('bg-red-100', "border-red-400", "text-red-700", "px-4", "py-3", "rounded", "relative", "max-w-md", "mx-auto", "mt-6", "text-center" );
    alerta.innerHTML=`
    <strong class='font-bold'>Error!! </strong>
    <span class='block'> ${mensaje}</span>
    `
    container.appendChild(alerta)
    setTimeout(() => { alerta.remove() }, 5000)
}

function consultarAPI(ciudad, pais){
    const API_Key = '0cb124d9474a6c689a7d8a47747ad257'
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${API_Key}`
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            limpiarHTML()
            if (data.cod === '404'){
                mostrarError("Ciudad no existe o no encontrada")
                return
            }
            mostrarClima(data)
        })
}

function mostrarClima(clima){
    const { main: { temp, temp_max, temp_min }, name } = clima
    const actual = kelvinCentigrados(temp)
    const maxima = kelvinCentigrados(temp_max)
    const minima = kelvinCentigrados(temp_min)
    
    const nombreCiudad = document.createElement('p')
    nombreCiudad.innerHTML = `Clima en ${name}`
    nombreCiudad.classList.add('font-bold', 'text-xl')

    const temperatura = document.createElement('p')
    temperatura.innerHTML = `${actual} &#8451`
    temperatura.classList.add('font-bold','text-6xl')

    const tempMax = document.createElement('p')
    tempMax.innerHTML = `Temperatura maxima: ${maxima} &#8451`
    tempMax.classList.add('text-xl')

    const tempMin = document.createElement('p')
    tempMin.innerHTML = `Temperatura minima: ${minima} &#8451`
    tempMin.classList.add('text-xl')

    const resultadoDiv = document.createElement('div')
    resultadoDiv.classList.add('text-center', 'text-white')
    resultadoDiv.appendChild(nombreCiudad)
    resultadoDiv.appendChild(temperatura)
    resultadoDiv.appendChild(tempMax)
    resultadoDiv.appendChild(tempMin)

    resultado.appendChild(resultadoDiv)
}

const kelvinCentigrados = (temperatura) => parseInt(temperatura - 273.15)

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.firstChild.remove();
    }
}
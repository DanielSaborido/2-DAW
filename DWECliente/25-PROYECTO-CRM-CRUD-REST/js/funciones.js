export function validar(clienteOBJ, e) {
    const elemento = e.target
    if (elemento.value.trim() === "") {
        mostrarAlerta(`El campo ${elemento.id} está vacío`, elemento.parentElement)
        clienteOBJ[elemento.name] = ""
        return
    }
    if (elemento.id === "nombre" && !validarNombre(elemento.value)) {
        mostrarAlerta(`El ${elemento.id} no es válido`, elemento.parentElement)
        clienteOBJ[elemento.name] = ""
        return
    }
    if (elemento.id === "email" && !validarEmail(elemento.value)) {
        mostrarAlerta(`El ${elemento.id} no es válido`, elemento.parentElement)
        clienteOBJ[elemento.name] = ""
        return
    }
    if (elemento.id === "telefono" && !validarTelefono(elemento.value)) {
        mostrarAlerta(`El ${elemento.id} no es válido`, elemento.parentElement)
        clienteOBJ[elemento.name] = ""
        return
    }
    limpiarAlerta(elemento.parentElement)

    clienteOBJ[elemento.name] = elemento.value.trim()
}

function validarNombre(nombre) {
    const rexg = /^(?=.{1,40}$)[a-zA-ZáéíóúüñÁÉÍÓÚÑ]+(?:[\s][a-zA-ZáéíóúüñÁÉÍÓÚÑ]+)*$/;
    if (nombre.split(' ').some(a => a.length < 3)) {
        return false
    }
    const resultado = rexg.test(nombre)
    return resultado
}

function validarEmail(email) {
    const rexg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const resultado = rexg.test(email)
    return resultado
}

function validarTelefono(telefono) {
    const rexg = /^(\+34|34)?[ -]*(6|7|9)[ -]*([0-9][ -]*){8}$/;
    const resultado = rexg.test(telefono)
    return resultado
}

function mostrarAlerta(mensaje, referencia) {
    limpiarAlerta(referencia)
    const error = document.createElement("p")
    error.textContent = mensaje
    error.classList.add("bg-red-600", "text-center", "text-white", "p-2")
    referencia.appendChild(error)
}

function limpiarAlerta(referencia) {
    const alerta = referencia.querySelector(".bg-red-600")
    if (alerta) {
        alerta.remove()
    }
}

export function resetForm(clienteOBJ) {
    const formulario = document.querySelector("#formulario");
    clienteOBJ.nombre = ""
    clienteOBJ.email = ""
    clienteOBJ.telefono = ""
    clienteOBJ.empresa = ""
    formulario.reset()
}
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

export function crearDB(clienteOBJ) {
    let request = indexedDB.open("CRM", 1);

    request.onerror = function () {
        console.error("Error", openRequest.error);
    };
    request.onsuccess = function (event) {
        const db = event.target.result;
        insertarCliente(clienteOBJ, db);
    };
    request.onupgradeneeded = (event) => {
        let db = event.target.result;
        let store = db.createObjectStore('Clientes', {
            autoIncrement: true
        });
    };
}

function insertarCliente(clienteOBJ, db) {
    const txn = db.transaction('Clientes', 'readwrite');
    const store = txn.objectStore('Clientes');
    let query = store.put(clienteOBJ);

    query.onsuccess = function (event) {
        console.log(event);
    };
    query.onerror = function (event) {
        console.log(event.target.errorCode);
    }
    txn.oncomplete = function () {
        db.close();
    };
}

export function modificarCliente(clienteOBJ) {
    const urlParams = new URLSearchParams(window.location.search);
    const clientId = parseInt(urlParams.get("id"), 10);
    let request = indexedDB.open("CRM", 1);
    request.onerror = function () {
        console.error("Error al abrir la base de datos");
    };

    request.onsuccess = function (event) {
        const db = event.target.result;
        const txn = db.transaction("Clientes", "readwrite");
        const store = txn.objectStore("Clientes");
        let query = store.get(clientId);

        query.onsuccess = (event) => {
            store.put(clienteOBJ, clientId);
        };

        query.onerror = (event) => {
            console.log(event.target.errorCode);
        }

        txn.oncomplete = function () {
            db.close();
        };
    };
};
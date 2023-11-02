document.addEventListener("DOMContentLoaded", () => {
    const nombre = document.querySelector("#nombre");
    const email = document.querySelector("#email");
    const telefono = document.querySelector("#telefono");
    const empresa = document.querySelector("#empresa");

    const sent = document.querySelector("#formulario input[type='submit']");

    const clienteOBJ = {
        nombre:"",
        email:"",
        telefono:"",
        empresa:""
    }
  
    nombre.addEventListener("blur", validar); 
    email.addEventListener("blur", validar);   
    telefono.addEventListener("blur", validar);
    empresa.addEventListener("blur", validar);
  
    nombre.addEventListener("keyup", validar); 
    email.addEventListener("keyup", validar);   
    telefono.addEventListener("keyup", validar);
    empresa.addEventListener("keyup", validar); 

    sent.addEventListener("click", (e) => {
        e.preventDefault()
        console.log(clienteOBJ)
        comprobarFormulario()
    });

    nombre.addEventListener('keydown', function(e) {
        if (e.key === "Enter") {
            email.focus();
        }
    });
    email.addEventListener('keydown', function(e) {
        if (e.key === "Enter") {
            telefono.focus();
        }
    });
    telefono.addEventListener('keydown', function(e) {
        if (e.key === "Enter") {
            empresa.focus();
        }
    });
    empresa.addEventListener('keydown', function(e) {
        if (e.key === "Enter") {
            empresa.blur();
            comprobarFormulario()
        }
    });

    function validar(e){
        const elemento = e.target
        if (elemento.value.trim() === ""){
            mostrarAlerta(`El campo ${elemento.id} esta vacio`, elemento.parentElement)
            clienteOBJ[elemento.name] = ""
            return
        }
        if (elemento.id === "nombre" && !validarNombre(elemento.value)){
            mostrarAlerta(`El ${elemento.id} no es valido`, elemento.parentElement)
            clienteOBJ[elemento.name] = ""
            return
        }
        if (elemento.id === "email" && !validarEmail(elemento.value)){
            mostrarAlerta(`El ${elemento.id} no es valido`, elemento.parentElement)
            clienteOBJ[elemento.name] = ""
            return
        }
        if (elemento.id === "telefono" && !validarTelefono(elemento.value)){
            mostrarAlerta(`El ${elemento.id} no es valido`, elemento.parentElement)
            clienteOBJ[elemento.name] = ""
            return
        }
        limpiarAlerta(elemento.parentElement)

        clienteOBJ[elemento.name] = elemento.value.trim().toLowerCase()
    }

    function validarNombre(nombre){
        const rexg = /^(?=.{1,40}$)[a-zA-ZáéíóúüñÁÉÍÓÚÑ]+(?:[\s][a-zA-ZáéíóúüñÁÉÍÓÚÑ]+)*$/;
        if (nombre.split(' ').some(a => a.length < 3)){
            return false
        }
        const resultado = rexg.test(nombre)
        return resultado
    }

    function validarEmail(email){
        const rexg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const resultado = rexg.test(email)
        return resultado
    }

    function validarTelefono(telefono){
        const rexg = /^(\+34|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}$/;
        const resultado = rexg.test(telefono)
        return resultado
    }

    function mostrarAlerta(mensaje, referencia){
        limpiarAlerta(referencia)
        const error = document.createElement("p")
        error.textContent = mensaje
        error.classList.add("bg-red-600", "text-center", "text-white", "p-2")
        referencia.appendChild(error)
    }

    function comprobarFormulario(){
        const values = Object.values(clienteOBJ)
        if (values.includes("")){
            return
        }
        modificarCliente()
        setTimeout(() =>{window.location.href = `index.html`;},1000)
    }

    function limpiarAlerta(referencia){
        const alerta = referencia.querySelector(".bg-red-600")
        if (alerta){
            alerta.remove()
        }
    }

    function modificarCliente() {
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
})
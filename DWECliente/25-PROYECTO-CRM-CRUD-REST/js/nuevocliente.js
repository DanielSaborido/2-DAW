document.addEventListener("DOMContentLoaded", () => {
    const nombre = document.querySelector("#nombre");
    const email = document.querySelector("#email");
    const telefono = document.querySelector("#telefono");
    const empresa = document.querySelector("#empresa");
    const formulario = document.querySelector("#formulario");

    const sent = document.querySelector("#formulario input[type='submit']");

    const emailOBJ = {
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

    function resetForm(){
        emailOBJ.nombre=""
        emailOBJ.email=""
        emailOBJ.telefono=""
        emailOBJ.empresa=""
        formulario.reset()
    }

    function validar(e){
        const elemento = e.target
        if (elemento.value.trim() === ""){
            mostrarAlerta(`El campo ${elemento.id} esta vacio`, elemento.parentElement)
            emailOBJ[elemento.name] = ""
            return
        }
        if (elemento.id === "nombre" && !validarNombre(elemento.value)){
            mostrarAlerta(`El ${elemento.id} no es valido`, elemento.parentElement)
            emailOBJ[elemento.name] = ""
            return
        }
        if (elemento.id === "email" && !validarEmail(elemento.value)){
            mostrarAlerta(`El ${elemento.id} no es valido`, elemento.parentElement)
            emailOBJ[elemento.name] = ""
            return
        }
        if (elemento.id === "telefono" && !validarTelefono(elemento.value)){
            mostrarAlerta(`El ${elemento.id} no es valido`, elemento.parentElement)
            emailOBJ[elemento.name] = ""
            return
        }
        limpiarAlerta(elemento.parentElement)

        emailOBJ[elemento.name] = elemento.value.trim().toLowerCase()
    }

    function validarNombre(nombre){
        rexg = /^[A-Za-z]+( [A-Za-z]+)*$/;
        if (nombre.split(' ').some(a => a.length < 3)){
            return false
        }
        resultado = rexg.test(nombre)
        return resultado
    }

    function validarEmail(email){
        rexg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        resultado = rexg.test(email)
        return resultado
    }

    function validarTelefono(telefono){
        rexg = /^(\+34|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}$/;
        resultado = rexg.test(telefono)
        return resultado
    }

    function mostrarAlerta(mensaje, referencia){
        limpiarAlerta(referencia)

        const error = document.createElement("p")
        error.textContent = mensaje
        error.classList.add("bg-red-600", "text-center", "text-white", "p-2")
        referencia.appendChild(error)
    }

    function limpiarAlerta(referencia){
        const alerta = referencia.querySelector(".bg-red-600")
        if (alerta){
            alerta.remove()
        }
    }

    function comprobarFormulario(){
        const values = Object.values(emailOBJ)
        if (values.includes("")){
            console.log("Formulario no enviado")
            return
        }
        resetForm()
        console.log("Formulario enviado")
    }
})

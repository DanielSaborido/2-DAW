document.addEventListener("DOMContentLoaded", () => {
    const nombre = document.querySelector("#nombre");
    const email = document.querySelector("#email");
    const telefono = document.querySelector("#telefono");
    const empresa = document.querySelector("#empresa");

    const sent = document.querySelector("#formulario button[type='submit']");

    const emailOBJ = {
        email:"",
        nombre:"",
        telefono:"",
        empresa:""
    }

    email.addEventListener("blur", validar);    
    nombre.addEventListener("blur", validar);  
    telefono.addEventListener("blur", validar);
    empresa.addEventListener("blur", validar); 
    email.addEventListener("keyup", validar);    
    nombre.addEventListener("keyup", validar);  
    telefono.addEventListener("keyup", validar);
    empresa.addEventListener("keyup", validar);  
    sent.addEventListener("click", (e) => {
        e.preventDefault()
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
        }
    });

    function validar(e){
        const elemento = e.target
        if (elemento.value.trim() === ""){
            mostrarAlerta(`El campo ${elemento.id} esta vacio`, elemento.parentElement)
            emailOBJ[elemento.name] = ""
            comprobarFormulario()
            return
        }
        if (elemento.id === "email" && !validarEmail(elemento.value)){
            mostrarAlerta(`El ${elemento.id} no es valido`, elemento.parentElement)
            emailOBJ[elemento.name] = ""
            comprobarFormulario()
            return
        }
        limpiarAlerta(elemento.parentElement)

        emailOBJ[elemento.name] = elemento.value.trim().toLowerCase()
        comprobarFormulario(emailOBJ)
    }

    function validarEmail(email){
        rexg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        resultado = rexg.test(email)
        return resultado
    }

    function mostrarAlerta(telefono, referencia){
        limpiarAlerta(referencia)

        const error = document.createElement("p")
        error.textContent = telefono
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
            sent.disabled = true;
            sent.classList.add("opacity-50")
            return
        }
        sent.disabled = false;
        sent.classList.remove("opacity-50")
    }
})

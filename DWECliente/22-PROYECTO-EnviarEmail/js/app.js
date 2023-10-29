document.addEventListener("DOMContentLoaded", () => {
    const email = document.querySelector("#email");
    const asunto = document.querySelector("#asunto");
    const mensaje = document.querySelector("#mensaje");
    const formulario = document.querySelector("#formulario");
    const spiner = document.querySelector("#spiner");

    const sent = document.querySelector("#formulario button[type='submit']");
    const reset = document.querySelector("#formulario button[type='reset']");

    const emailOBJ = {
        email:"",
        asunto:"",
        mensaje:""
    }

    email.addEventListener("blur", validar);    
    asunto.addEventListener("blur", validar);  
    mensaje.addEventListener("blur", validar);
    email.addEventListener("keyup", validar);    
    asunto.addEventListener("keyup", validar);  
    mensaje.addEventListener("keyup", validar);
    sent.addEventListener("click", (e) => {
        e.preventDefault()
        activarSpiner()
    });

    reset.addEventListener('click', (e) => {
        e.preventDefault()
        resetForm()
        window.location.reload();
    });

    email.addEventListener('keydown', function(e) {
        if (e.key === "Enter") {
            asunto.focus();
        }
    });
    asunto.addEventListener('keydown', function(e) {
        if (e.key === "Enter") {
            mensaje.focus();
        }
    });
    mensaje.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === "Enter" && !sent.classList.contains("opacity-50")) {
            mensaje.blur();
            activarSpiner()
        }
    });

    function activarSpiner(){
        spiner.classList.remove("hidden")
        setTimeout(() => {
            spiner.classList.add("hidden")
            resetForm()
            const alerta = document.createElement("p")
            alerta.classList.add("bg-green-500", "text-center", "text-white", "rounded-lg", "mt-10", "text-sm")
            alerta.textContent = "Mensaje enviado con exito"
            formulario.appendChild(alerta)
            setTimeout(() =>{formulario.lastChild.remove()},3000)
        },3000)
    }

    function resetForm(){
        emailOBJ.email=""
        emailOBJ.asunto=""
        emailOBJ.mensaje=""
        formulario.reset()
        comprobarFormulario()
    }

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
            sent.disabled = true;
            sent.classList.add("opacity-50")
            return
        }
        sent.disabled = false;
        sent.classList.remove("opacity-50")
    }
})

import { validar, resetForm, crearDB } from "./funciones.js";

document.addEventListener("DOMContentLoaded", () => {
    const nombre = document.querySelector("#nombre");
    const email = document.querySelector("#email");
    const telefono = document.querySelector("#telefono");
    const empresa = document.querySelector("#empresa");

    const sent = document.querySelector("#formulario input[type='submit']");

    const clienteOBJ = {
        nombre: "",
        email: "",
        telefono: "",
        empresa: ""
    }

    function listeners() {
        nombre.addEventListener("blur", (e) => validar(clienteOBJ, e));
        email.addEventListener("blur", (e) => validar(clienteOBJ, e));
        telefono.addEventListener("blur", (e) => validar(clienteOBJ, e));
        empresa.addEventListener("blur", (e) => validar(clienteOBJ, e));

        nombre.addEventListener("input", (e) => validar(clienteOBJ, e));
        email.addEventListener("input", (e) => validar(clienteOBJ, e));
        telefono.addEventListener("input", (e) => validar(clienteOBJ, e));

        sent.addEventListener("click", (e) => {
            e.preventDefault()
            comprobarFormulario()
        });

        nombre.addEventListener('keydown', function (e) {
            if (e.key === "Enter") {
                email.focus();
            }
        });
        email.addEventListener('keydown', function (e) {
            if (e.key === "Enter") {
                telefono.focus();
            }
        });
        telefono.addEventListener('keydown', function (e) {
            if (e.key === "Enter") {
                empresa.focus();
            }
        });
        empresa.addEventListener('keydown', function (e) {
            if (e.key === "Enter") {
                empresa.blur();
                comprobarFormulario()
            }
        });
    }
    listeners()

    function comprobarFormulario() {
        const values = Object.values(clienteOBJ)
        if (values.includes("")) {
            return
        }
        crearDB(clienteOBJ);
        setTimeout(() => { resetForm(clienteOBJ); }, 500)
    }
});
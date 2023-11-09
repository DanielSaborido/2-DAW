import { validar } from "./funciones.js";

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
    
    function listeners(){
        nombre.addEventListener("blur", validar); 
        email.addEventListener("blur", validar);   
        telefono.addEventListener("blur", validar);
        empresa.addEventListener("blur", validar);
    
        nombre.addEventListener("input", validar); 
        email.addEventListener("input", validar);
        telefono.addEventListener("input", validar);

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
    }
    
    listeners()

    function comprobarFormulario(){
        const values = Object.values(clienteOBJ)
        if (values.includes("")){
            return
        }
        modificarCliente()
        setTimeout(() =>{window.location.href = `index.html`;},500)
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
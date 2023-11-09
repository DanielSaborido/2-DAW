import { validar, resetForm } from "./funciones.js";

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
        crearDB()
        setTimeout(() =>{resetForm();},500)
    }

    function crearDB(){
        let request = indexedDB.open("CRM", 1);
    
        request.onerror = function() {
            console.error("Error", openRequest.error);
        };
        request.onsuccess = function(event) {
            const db = event.target.result;
            insertarCliente(db);
        };
        request.onupgradeneeded = (event) => {
            let db = event.target.result;
            let store = db.createObjectStore('Clientes', {
                autoIncrement: true
            });
        };
    }
    
    function insertarCliente(db) {
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
})
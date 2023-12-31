document.addEventListener("DOMContentLoaded", () => {
    const tablaClientes = document.querySelector("tbody")

    async function comprobarDB(nombreDB){
        const databases = await indexedDB.databases();
        return databases.find(db => db.name === nombreDB) !== undefined;
    }

    comprobarDB("CRM")
        .then(databaseExists => {
            if (databaseExists) {
                mostrarDB()
            } else {
                console.log("todavia no mostrar");
            }
        });
    
    function mostrarDB(){
        let request = indexedDB.open("CRM", 1);
        request.onerror = function () {
            console.error("Error al abrir la base de datos");
        };

        request.onsuccess = function (event) {
            const db = event.target.result;
            const txn = db.transaction("Clientes", "readonly");
            const objectStore = txn.objectStore("Clientes");
            const cursorRequest = objectStore.openCursor();

            cursorRequest.onsuccess = (event) => {
                let cursor = event.target.result;
                if (cursor) {
                    let id = cursor.key;
                    let cliente = cursor.value;
                    agregarClienteTabla(id, cliente);
                    cursor.continue();
                }
            };

            tablaClientes.addEventListener("click", (e) => {
                eliminarCliente(e, db)
            });
            tablaClientes.addEventListener("click", (e) => {
                modificarCliente(e)
            });
        };
    }
    

    function agregarClienteTabla(id, cliente) {
        const listadoClientes = document.querySelector("#listado-clientes");
        const row = document.createElement("tr");
        row.innerHTML = `
          <td class="px-6 py-4 whitespace-no-wrap">${cliente.nombre}</td>
          <td class="px-6 py-4 whitespace-no-wrap">${cliente.telefono}</td>
          <td class="px-6 py-4 whitespace-no-wrap">${cliente.empresa}</td>
          <td class="px-6 py-4 whitespace-no-wrap">
              <button class="bg-green-500 text-white py-2 px-3 rounded hover:bg-green-600 edit-button" data-id="${id}">
                  Editar
              </button>
              <button class="bg-red-500 text-white py-2 px-3 rounded hover:bg-red-600 delete-button" data-id="${id}">
                  Borrar
              </button>
          </td>
        `;
      
        listadoClientes.appendChild(row);
    }    

    function eliminarCliente(e, db) {
        e.preventDefault();
        if (e.target.classList.contains("delete-button")) {
            const clienteID = parseInt(e.target.getAttribute("data-id"), 10);
            const txn = db.transaction('Clientes', 'readonly');
            const store = txn.objectStore('Clientes');
            const getRecordsRequest = store.getAll();
    
            getRecordsRequest.onsuccess = function (event) {
                const records = event.target.result;
    
                if (records.length === 0) {
                    db.close();
                    indexedDB.deleteDatabase(db.name);
                } else {
                    const txnDelete = db.transaction('Clientes', 'readwrite');
                    const storeDelete = txnDelete.objectStore('Clientes');
                    let query = storeDelete.delete(clienteID);
    
                    query.onsuccess = function (event) {
                        const cliente = e.target.parentElement.parentElement;
                        cliente.remove();
                    };
                    query.onerror = function (event) {
                        console.log(event.target.errorCode);
                    }
                }
            };
        }
    }

    function modificarCliente(e) {
        e.preventDefault()
        if (e.target.classList.contains("edit-button")){
            const clientId = parseInt(e.target.getAttribute("data-id"), 10)
            window.location.href = `editar-cliente.html?id=${clientId}`;
        }
    }
});
document.addEventListener("DOMContentLoaded", () => {
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
                let cliente = cursor.value;
                agregarClienteTabla(db, cliente);
                cursor.continue();
            }
        };
    };

    function agregarClienteTabla(db, cliente) {
        const listadoClientes = document.querySelector("#listado-clientes");
        const row = document.createElement("tr");
        row.innerHTML = `
          <td class="px-6 py-4 whitespace-no-wrap">${cliente.nombre}</td>
          <td class="px-6 py-4 whitespace-no-wrap">${cliente.telefono}</td>
          <td class="px-6 py-4 whitespace-no-wrap">${cliente.empresa}</td>
          <td class="px-6 py-4 whitespace-no-wrap">
              <a class="bg-red-500 text-white py-2 px-3 rounded hover:bg-red-600 edit-button" data-id="${cliente.id}">
                  Editar
              </a>
              <a class="bg-red-500 text-white py-2 px-3 rounded hover:bg-red-600 delete-button" data-id="${cliente.id}">
                  Borrar
              </a>
          </td>
        `;
      
        listadoClientes.appendChild(row);

        const editButtons = row.querySelector(".edit-button");
        const deleteButtons = row.querySelector(".delete-button");
      
        editButtons.addEventListener("click", (e) => {
            e.preventDefault()
            const clientId = e.target.getAttribute("data-id");
            window.location.href = `editar-cliente.html?id=${clientId}`;
        });
        deleteButtons.addEventListener("click", (e) => {
            e.preventDefault()
            const clientId = e.target.getAttribute("data-id");
            eliminarCliente(db, clientId);
        });
    }
      
    function eliminarCliente(db, id) {
        const txn = db.transaction('Clientes', 'readwrite');
        const store = txn.objectStore('Clientes');
        let query = store.delete(id);

        query.onsuccess = function (event) {
            eliminarFilaCliente(id)
        };
        query.onerror = function (event) {
            console.log(event.target.errorCode);
        }
    }

    function eliminarFilaCliente(id) {
        const row = document.querySelector(`tr[data-id="${id}"]`);
        if (row) {
            row.remove();
        }
    }
});
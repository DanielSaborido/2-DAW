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
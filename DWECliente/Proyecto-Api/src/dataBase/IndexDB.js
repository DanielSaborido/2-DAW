export function createUserDB(userOBJ) {
    let request = indexedDB.open("Users", 1)

    request.onerror = function () {
        console.error("Error", openRequest.error)
    }
    request.onsuccess = function (event) {
        const db = event.target.result
        insertUser(userOBJ, db)
    }
    request.onupgradeneeded = (event) => {
        let db = event.target.result
        const store = db.createObjectStore('User', { autoIncrement: true })
        store.createIndex('email', 'email', { unique: true })
    }
}

function insertUser(userOBJ, db) {
    const txn = db.transaction('User', 'readwrite')
    const store = txn.objectStore('User')
    let query = store.put(userOBJ)

    query.onsuccess = function (event) {
        console.log(event)
    }
    query.onerror = function (event) {
        console.log(event.target.errorCode)
    }
    txn.oncomplete = function () {
        db.close()
    }
}

export function modifyUser(userOBJ) {
    let request = indexedDB.open("Users", 1)

    request.onerror = function () {
        console.error("Error al abrir la base de datos")
    }
    request.onsuccess = function (event) {
        const db = event.target.result
        const txn = db.transaction("User", "readwrite")
        const store = txn.objectStore("User")
        let query = store.get(userOBJ.email)

        query.onsuccess = (event) => {
            store.put(userOBJ, userOBJ.email)
        }

        query.onerror = (event) => {
            console.log(event.target.errorCode)
        }

        txn.oncomplete = function () {
            db.close()
        }
    }
}

export const validateAccount = (email, password) => {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('Users', 1)
  
      request.onerror = function () {
        console.error('Error', request.error)
        reject(request.error)
      }
      request.onsuccess = function (event) {
        const db = event.target.result
        const txn = db.transaction('User', 'readonly')
        const store = txn.objectStore('User')
        const getUserRequest = store.index('email').get(email)
  
        getUserRequest.onsuccess = (event) => {
          const user = event.target.result
          if (user && user.password === password) {
            resolve({ isValid: true, user })
          } else {
            resolve({ isValid: false })
          }
        }
        getUserRequest.onerror = (event) => {
          console.error('Error al obtener usuario', event.target.error)
          reject(event.target.error)
        }
        txn.oncomplete = () => {
          db.close()
        }
      }
    })
  }
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
        const cursorRequest = store.openCursor()/*
        const getUserRequest = store.index('email').get(email)*/
  
        cursorRequest.onsuccess = (event) => {
            let cursor = event.target.result;
            if (cursor.value.email === email && cursor.value.password === password) {
                let id = cursor.key;
                let user = cursor.value;
                resolve({ isValid: true, id, user})
            }
            else{
                cursor.continue()
            }
        }/*
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
        }*/
        txn.oncomplete = () => {
          db.close()
        }
      }
    })
  }

  export function modifyUser(userOBJ, id) {
      let request = indexedDB.open("Users", 1)
  
      request.onerror = function () {
          console.error("Error al abrir la base de datos")
      }
      request.onsuccess = function (event) {
          const db = event.target.result
          const txn = db.transaction("User", "readwrite")
          const store = txn.objectStore("User")
          let query = store.get(id)
  
          query.onsuccess = (event) => {
              store.put(userOBJ, id)
          }
  
          query.onerror = (event) => {
              console.log(event.target.errorCode)
          }
  
          txn.oncomplete = function () {
              db.close()
          }
      }
  }

  export function deleteUser(userOBJ, id) {
      let request = indexedDB.open("Users", 1)
  
      request.onerror = function () {
          console.error("Error al abrir la base de datos")
      }
      request.onsuccess = function (event) {
          const db = event.target.result
          const txn = db.transaction("User", "readonly")
          const store = txn.objectStore("User")
          let query = store.getAll()
  
          query.onsuccess = (event) => {
            const records = event.target.result
    
            if (records.length === 0) {
                db.close()
                indexedDB.deleteDatabase(db.name)
            } else {
                const txnDelete = db.transaction('User', 'readwrite')
                const storeDelete = txnDelete.objectStore('User')
                let query = storeDelete.delete(id)

                query.onsuccess = function (event) {
                  console.log(event)
                }
                query.onerror = function (event) {
                    console.log(event.target.errorCode)
                }
            }
          }
  
          query.onerror = (event) => {
              console.log(event.target.errorCode)
          }
  
          txn.oncomplete = function () {
              db.close()
          }
      }
  }
import { useCallback, useEffect, useState } from "react"

function App() {
  /* const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(0)

  useEffect(() => {  //se ejuta siempre que se haga algun cambio de estado, por ende puede petar
    console.log(counter)
  })

  useEffect(() => { //se especifica en que cambio de estado se ejecuta
    console.log("click en el 2º")
  }, [counter2]) */

  const [users, setUsers] = useState([])

  const fetchData = useCallback( //lo memoriza y no lo vuelve a leer hasta que se modifique
    async () => {
      const res = await fetch("http://jsonplaceholder.typicode.com/users")
      const data = await res.json()
      setUsers(data)
    }, [users])//aqui por ejemplo no se volveria a leer esto hasta que se añada un nuevo usuario
  
  
  useEffect(() => { //si se deja vacio solo se ejecuta una sola vez,al cargarse (perfecto para apis)
    console.log("hola")
    fetchData()
  }, [])

  if (!users) return <div>Cargando...</div>

  return (
    <>
      <div>
        {/* <button onClick={() => setCounter(counter+1)}>Cliks en el 1º {counter}</button>
        <button onClick={() => setCounter2(counter2+1)}>Cliks en el 2º {counter2}</button> */}
        <h1>Usuarios</h1>
        <ul>
          {users.map((user)=>
            <li key={user.id}>{user.name}</li>
          )}
        </ul>
      </div>
    </>
  )
}

export default App

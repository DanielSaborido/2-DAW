function LoginPanel(){
  return(
    <>
      <h1>Login Panel</h1>
    </>
  )
}

function AdminPanel(){
  return(
    <>
      <h1>Admin Panel</h1>
    </>
  )
}

function mostrarArray(value, index){
  return (
    <li key = {index}>{value}</li>
  )
}

function App() {
  let userLogged = true
  const array = [1,2,3,4,5,6,7,8,9]

  return (
    <>
      {
        userLogged? (<AdminPanel/>): <LoginPanel/>
      }
      <ul>
        {array.map(mostrarArray)}
      </ul>
    </>
  )
}

export default App

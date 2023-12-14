/*import Button from './Button.jsx'
import Parrafo from './Parrafo.jsx'

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
    }*/

import Actividades from './actividades.jsx'
import FormControlado from './formulario controlado.jsx'
import { useState } from "react"

/* const actividades = JSON.parse(localStorage.getItem("Actividades")) || [] */
const ejemplos = [{
  id:"111",
  nombre: "aaaaaaaa",
  descripcion: "aaaaaa",
  estado: "Pendiente",
  prioridad: false
},{
  id:"222",
  nombre: "ccc",
  descripcion: "aaaaaa",
  estado: "Completado",
  prioridad: false
},{
  id:"3333",
  nombre: "bbbbb",
  descripcion: "aaaaaa",
  estado: "Pendiente",
  prioridad: true
}]

function App() {
  /*let userLogged = true
  const array = [1,2,3,4,5,6,7,8,9]*/
  const [listaActividades, setListaActividades] = useState([ejemplos])
  const addTarea = todo =>{
    setListaActividades([...listaActividades, todo]);
  }

  const deleteTarea = id =>{
    const newArray = listaActividades.filter((todo) => todo.id !== id)
    setListaActividades(newArray);
  }

  const updateTarea = id =>{
    const newArray = listaActividades.map((todo) => {
      if (todo.id == id){
        todo.estado = !todo.estado
      }
      return todo
    })
    setListaActividades(newArray);
  }

  return (
    <>
      {/*{
        userLogged? (<AdminPanel/>): <LoginPanel/>
      }
      <ul>
        {array.map(mostrarArray)}
      </ul>
      <Button />
      <Parrafo text = "Hola"/>*/}
      <div className='container'>
        <FormControlado tareas={addTarea}/>
        <Actividades actividades={listaActividades} eliminar={deleteTarea} actualizar={updateTarea}/>
      </div>
    </>
  )
}

export default App

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
  id:1,
  nombre: "aaaaaaaa",
  descripcion: "aaaaaa",
  estado: "Pendiente",
  prioridad: false
},{
  id:2,
  nombre: "ccc",
  descripcion: "aaaaaa",
  estado: "Completado",
  prioridad: false
},{
  id:3,
  nombre: "bbbbb",
  descripcion: "aaaaaa",
  estado: "Pendiente",
  prioridad: true
}]

function App() {
  /*let userLogged = true
  const array = [1,2,3,4,5,6,7,8,9]*/
  const [listaActividades, setListaActividades] = useState(ejemplos)
  const [tareaEditando, setTareaEditando] = useState(null)

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

  const editTarea = id => {
    const tareaEditar = listaActividades.find((todo) => todo.id === id);
    setTareaEditando(tareaEditar);
  };

  const actualizarTareaEditada = (id, updatedTarea) => {
    const updatedList = listaActividades.map((todo) => {
      if (todo.id === id) {
        return { ...todo, ...updatedTarea };
      }
      return todo;
    });
    setListaActividades(updatedList);
    setTareaEditando(null);
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
        <FormControlado tareas={addTarea} tareaEditando={tareaEditando} actualizarTareaEditada={actualizarTareaEditada}/>
        <Actividades actividades={listaActividades} eliminar={deleteTarea} actualizar={updateTarea} editar={editTarea}/>
      </div>
    </>
  )
}

export default App

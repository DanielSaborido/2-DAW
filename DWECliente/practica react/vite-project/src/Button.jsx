import PropTypes from 'prop-types';
import { useState } from 'react';

function MyButton({text, edad}){
    const handleClick = () => {
      console.log(`Click en button ${text}`)
    }
    return (
      <button onClick={handleClick}> {text} - {edad} </button>
    )
}

MyButton.propTypes = {
    text: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired
}
  
function Button() {
  let [count, setCount] = useState(0)

  const conteo = () => {
    setCount(count+1)
    console.log(count)
  }
  return (
      <>
      <MyButton text = "Boton 1" edad = {20}/>
      <MyButton text = "Boton 2" edad = {25}/>
      <MyButton text = "Boton 3" edad = {10}/>
      <button onClick={conteo}>Count: {count}</button>
      </>
  )
}

export default Button
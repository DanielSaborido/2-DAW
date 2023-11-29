import PropTypes from 'prop-types';

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
return (
    <>
    <MyButton text = "Boton 1" edad = {20}/>
    <MyButton text = "Boton 2" edad = {25}/>
    <MyButton text = "Boton 3" edad = {10}/>
    </>
)
}

export default Button
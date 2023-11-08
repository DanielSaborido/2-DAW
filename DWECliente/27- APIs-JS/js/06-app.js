// reconocimiento de voz ( peta mucho)

const salida =document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

microfono.addEventListener('click', ejecutarSpeechAPI())

function ejecutarSpeechAPI(){
    const SpeechRecognition = webkitSpeechRecognition
    const recognition = new SpeechRecognition

    recognition.start()

    recognition.onstart = function(){
        salida.classList.remove("ocultar")
        salida.classList.add("mostrar")
        salida.innerHTML="escuchando"
    }

    recognition.onspeechend = function(){
        salida.innerHTML="no ecucho mas"
        recognition.stop()
    }

    recognition.onresult = function(e){
        console.log(e)
        console.log(e.results)
        
        const transcript = e.results[0][0].transcript
        const speechUsuario = document.createElement("p")
        speechUsuario.innerHTML = `Grabado: ${transcript}`

        salida.appendChild(speechUsuario)
    }
}
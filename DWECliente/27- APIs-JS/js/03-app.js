// conectividad a internet

const enLinea = navigator.onLine
console.log(enLinea)

window.addEventListener("online", updateNetState)
window.addEventListener("offline", updateNetState)

function updateNetState(){
    if (enLinea){
        console.log("estas conectado")
    } else {
        console.log("revisa tu wifi")
    }
}
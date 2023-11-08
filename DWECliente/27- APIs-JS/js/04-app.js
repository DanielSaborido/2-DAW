// Pantalla completa

const abrirBTN = document.querySelector("#abrir-pantalla-completa")
const salirBTN = document.querySelector("#salir-pantalla-completa")

abrirBTN.addEventListener("click", pantallaCompleta)
salirBTN.addEventListener("click", cerrarPantallaCompleta)

function pantallaCompleta() {
    document.documentElement.requestFullscreen()
}

function cerrarPantallaCompleta() {
    document.exitFullscreen()
}
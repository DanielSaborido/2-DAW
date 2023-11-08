// api notificaciones (depende el funcionamiento del navegador) ¡esto es solo para ejemplo paso a paso, esto se hace en un unico boton!

const notificarBTN = document.querySelector(`#notificar`)
notificarBTN.addEventListener('click', () =>{
    Notification.requestPermission().then((resultado) =>{
        console.log("El resultado es: ", resultado)
    })
});


const verNotificacionBTN = document.querySelector("#verNotificacion")
verNotificacionBTN.addEventListener('click', () =>{
    if (Notification.permission === "granted"){
        const notificacion = new Notification("Esta es mi notificacion", {//personalizaciones de la notificacion
            icon: "img/lupa.png",
            body: "Lectures"
        })

        //mas personalizaciones
        notificacion.onclick = () => window.open("https://github.com/IES-Rafael-Alberti/DWEC-23-24/tree/main/codigo-clases/Javascript")
    }
})
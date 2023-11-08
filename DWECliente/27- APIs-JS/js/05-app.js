// ejecucion en segundo plano (cambio pestaña)

document.addEventListener("visibilitychange", () => {
    console.log(document.visibilityState)

    if (document.visibilityState === "visible") {
        console.log("reproduciendo")
    } else {
        console.log("parando todo")
    }
})
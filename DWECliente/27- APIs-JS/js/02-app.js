//api intersection observer (este es en viaje.html)

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        console.log(entries)
        if (entries[0].isIntersecting){
            console.log("El elemento comienza a ser visible")
        }
    })

    observer.observe(document.querySelector(".premium"))
})
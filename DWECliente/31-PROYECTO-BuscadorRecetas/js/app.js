//www.themealdb.com
//https://www.themealdb.com/api/json/v1/1/categories.php
//https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}
//https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}

const selectCategorias = document.querySelector("#categorias")
const bodyId = document.body.getAttribute("data-id")
const resultado = document.querySelector("#resultado")
const modal = new bootstrap.Modal("#modal", {})

document.addEventListener("DOMContentLoaded", () => {
    if (bodyId === "index") {
        iniciarApp()
        selectCategorias.addEventListener("change", obtenerRecetas)
    } 
    if (bodyId === "favoritos") {
        mostrarFavoritos()
    }
})

function iniciarApp() {
    obtenerCategorias()
}

function obtenerCategorias() {
    const url = "https://www.themealdb.com/api/json/v1/1/categories.php"
    fetch(url)
        .then((res) => res.json())
        .then((data) => mostrarCategorias(data.categories))
        .catch(error => console.error(error))
}

function mostrarCategorias(categorias) {
    categorias.forEach(categoria => {
        const option = document.createElement("option")
        option.value = categoria.strCategory
        option.textContent = categoria.strCategory
        selectCategorias.appendChild(option)
    })
}

function obtenerRecetas(e) {
    const categoria = e.target.value
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`
    fetch(url)
        .then((res) => res.json())
        .then((data) => mostrarRecetas(data.meals))
        .catch(error => console.error(error))
}

function mostrarRecetas(recetas = []){
    limpiarHTML(resultado)
    recetas.forEach(receta => {
        const { idMeal, strMeal, strMealThumb } = receta

        const divReceta = document.createElement("div")
        divReceta.classList.add("col-md-4")

        const recetaCard = document.createElement("div")
        recetaCard.classList.add("card", "mb-4")

        const recetaImg = document.createElement("img")
        recetaImg.classList.add("card-img-top")
        recetaImg.alt = `Imagen de la receta ${strMeal}`
        recetaImg.src = strMealThumb

        const recetaCardBody = document.createElement("div")
        recetaCardBody.classList.add("card-body")

        const recetaHeading = document.createElement("h2")
        recetaHeading.classList.add("card-title", "mb-3")
        recetaHeading.textContent = strMeal

        const recetaButton = document.createElement("button")
        recetaButton.classList.add("btn", "btn-danger", "w-100")
        recetaButton.textContent = "Ver Receta"
        recetaButton.onclick = function(){
            seleccionarReceta(idMeal)
        }

        recetaCardBody.appendChild(recetaHeading)
        recetaCardBody.appendChild(recetaButton)
        recetaCard.appendChild(recetaImg)
        recetaCard.appendChild(recetaCardBody)
        divReceta.appendChild(recetaCard)
        resultado.appendChild(divReceta)
    })
}

function limpiarHTML(selector) {
    while (selector.firstChild) {
        selector.firstChild.remove()
    }
}

function seleccionarReceta(id) {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
        .then((res) => res.json())
        .then((data) => mostrarRecetaModal(data.meals[0]))
        .catch(error => console.error(error))
}

function mostrarRecetaModal(receta){
    const {idMeal, strInstructions, strMeal, strMealThumb} = receta
    const modalContent = document.querySelector(".modal")
    const modalTitle = document.querySelector(".modal .modal-title")
    modalTitle.textContent = strMeal

    const modalBody = document.querySelector(".modal .modal-body")
    modalBody.innerHTML = `
      <img class="img-fluid" src=${strMealThumb} alt=${strMeal}>
      <h3 class="my-3">Instrucciones</h3>
      <p>${strInstructions}</p>`
    const listGroup = document.createElement("ul")
    listGroup.classList.add("list-group")
    for (let i = 1 ; i <=20 ; i++) {
        if (receta[`strIngredient${i}`]){
            const ingrediente = receta[`strIngredient${i}`]
            const cantidad = receta[`strMeasure${i}`]
            console.log(cantidad)

            const ingredientLi = document.createElement("li")
            ingredientLi.classList.add("list-group-item")
            if (cantidad !== null && cantidad.trim() !== "") {
                ingredientLi.textContent = `${ingrediente} - ${cantidad}`
            } else {
                ingredientLi.textContent = `${ingrediente}`
            }

            listGroup.appendChild(ingredientLi)
        }
    }
    modalBody.appendChild(listGroup)

    const modalFooter = document.querySelector(".modal .modal-footer")
    //modalFooter.innerHTML = ''

    const btnFavoritos = document.createElement("button")
    btnFavoritos.classList.add("btn", "col")
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || []
    if (favoritos.includes(idMeal)) {
        btnFavoritos.classList.add("btn-success")
        btnFavoritos.textContent = "Guardado en Favoritos"
    } else {
        btnFavoritos.classList.add("btn-danger")
        btnFavoritos.textContent = "Guardar Favoritos"
    }

    const btnCerrar = document.createElement("button")
    btnCerrar.classList.add("btn", "btn-secondary", "col")
    btnCerrar.textContent = "Cerrar"

    modalFooter.appendChild(btnFavoritos)
    modalFooter.appendChild(btnCerrar)

    modalContent.addEventListener('click', function(event) {
        const cursor = event.target
        console.log(cursor)
        if(cursor.classList.contains("btn-danger") || cursor.classList.contains("btn-success")){
            if (favoritos.includes(idMeal)) {
                removerFavorito(idMeal)
                if (bodyId === "favoritos") {
                    modal.hide()
                    mostrarFavoritos()
                    return
                }
                btnFavoritos.classList.remove("btn-success")
                btnFavoritos.classList.add("btn-danger")
                btnFavoritos.textContent = "Guardar Favoritos"
            } else {
                guardarFavorito(idMeal)
                btnFavoritos.classList.remove("btn-danger")
                btnFavoritos.classList.add("btn-success")
                btnFavoritos.textContent = "Guardado en Favoritos"
            }
        }
        if(cursor === btnCerrar){
            modal.hide()
        }
        if (!modalTitle.contains(cursor) && !modalBody.contains(cursor) && !modalFooter.contains(cursor)) {
            modal.hide()
        }
    })
    modal.show()
}

function guardarFavorito(id) {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || []
    if (!favoritos.includes(id)) {
        favoritos.push(id)
    }
    localStorage.setItem('favoritos', JSON.stringify(favoritos))
}

function removerFavorito(id) {
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || []
    favoritos = favoritos.filter(fav => fav !== id)
    localStorage.setItem('favoritos', JSON.stringify(favoritos))
}

function almacenFavoritos(ids = []) {
    const promesasRecetas = ids.map(async id => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        const res = await fetch(url)
        const data = await res.json()
        const { idMeal, strMeal, strMealThumb } = data.meals[0]
        return {
            idMeal,
            strMeal,
            strMealThumb
        }
    })
    return Promise.all(promesasRecetas)
}

function mostrarFavoritos(){
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || []
        almacenFavoritos(favoritos)
            .then(recetas => {
                mostrarRecetas(recetas)
                if (recetas.length > 0) {
                    eliminarFavoritosBtn()
                }
            })
            .catch(error => console.error(error))
}

function eliminarFavoritosBtn() {
    const eliminarFavBtn = document.createElement("button")
    eliminarFavBtn.classList.add("btn", "btn-danger", "w-100")
    eliminarFavBtn.textContent = "Eliminar favoritos"
    eliminarFavBtn.onclick = () => {
        localStorage.clear()
        window.location.reload()
    }
    resultado.appendChild(eliminarFavBtn)
}
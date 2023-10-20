function anadirDato(seccion){
    const categoria = document.createElement("p");
    const titulo = document.createElement("p");
    const precio = document.createElement("p");
    const opciones = prompt("Indica la categoría a la que pertenece. (hospedaje, concierto, clase, paseo)").toLowerCase();
    if (opciones !== "hospedaje" || opciones !== "concierto" || opciones !== "clase" || opciones !== "paseo") {
        alert("Error: esa opcion no esta permitida")
        return
    }
    categoria.textContent = prompt("Insertar nombre de la categoría", "Categorizado predeterminadamente")
    titulo.textContent = prompt("Inserta un titulo para los añadido","Titulo por defecto")
    precio.textContent = "$"+parseInt(prompt("Inserta su precio",0))
    categoria.classList.add("categoria", opciones)
    titulo.classList.add("titulo")
    precio.classList.add("precio")

    const imagenNombre = prompt("Indique el nombre del .jpg ubicado en img/");
    const img = new Image();
    img.src = "img/" + imagenNombre + ".jpg";

    img.onload = function() {
        const imagen = document.createElement("img");
        imagen.src = img.src;

        const info = document.createElement("div");
        info.appendChild(categoria);
        info.appendChild(titulo);
        info.appendChild(precio);
        info.classList.add("info");

        const card = document.createElement("div");
        card.appendChild(imagen);
        card.appendChild(info);
        card.classList.add("card");

        const contenedor = document.querySelector(`.${seccion} .contenedor-cards`);
        contenedor.appendChild(card);
    };

    img.onerror = function() {
        alert("La imagen no existe o no se pudo cargar.");
    };  
}

const btnFlotante = document.querySelector(".btn-flotante")
const footer2 = document.querySelector(".footer")

btnFlotante.addEventListener("click", mostrarOcultarFooter)

function mostrarOcultarFooter() {
    if (footer2.classList.contains("activo")) {
        footer2.classList.remove("activo")
        btnFlotante.classList.remove("activo")
        btnFlotante.textContent = "Abrir"
    } else {
        footer2.classList.add("activo")
        btnFlotante.classList.add("activo")
        btnFlotante.textContent = "Cerrar"
    }
    
}

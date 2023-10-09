document.addEventListener("DOMContentLoaded", function () {
    const recetasList = document.getElementById("recetas");
    const eliminarReceta = document.getElementById("eliminarReceta");
    const agregarReceta = document.getElementById("agregarReceta");
    const recetas = [
        { nombre: "Tortilla de Patatas", ingredientes: "Patatas, Huevos, Aceite de oliva, Sal al gusto", explicacion: "Pela y corta las patatas en rodajas finas, " +
                "fríelas en aceite caliente hasta que estén doradas, bate los huevos y añade las patatas fritas y sal, " +
                "vierte la mezcla en una sartén caliente y cocina hasta que esté cuajada por ambos lados." },
        { nombre: "Receta 2", ingredientes: "Ingredientes para la receta número 2", explicacion: "Esta es la receta número 2." },
        { nombre: "Receta 3", ingredientes: "Ingredientes para la receta número 3", explicacion: "Esta es la receta número 3." },
        { nombre: "Receta 4", ingredientes: "Ingredientes para la receta número 4", explicacion: "Esta es la receta número 4." },
        { nombre: "Receta 5", ingredientes: "Ingredientes para la receta número 5", explicacion: "Esta es la receta número 5." },
    ];

    function mostrarRecetas() {
        recetasList.innerHTML = "";
        recetas.forEach((receta) => {
            const li = document.createElement("li");
            li.textContent = `${receta.nombre}:`;
            const ulIngredientes = document.createElement("ul");
                const liIngrediente = document.createElement("li");
                liIngrediente.textContent = `Ingredientes: ${receta.ingredientes}`;
                const liExplicacion = document.createElement("li");
                liExplicacion.textContent = `Receta: ${receta.explicacion}`;
            ulIngredientes.appendChild(liIngrediente);
            ulIngredientes.appendChild(liExplicacion);
            li.appendChild(ulIngredientes);
            recetasList.appendChild(li);
        });
    }

    mostrarRecetas();
    eliminarReceta.addEventListener("click", function () {
        const numeroReceta = prompt("Ingrese el número de la receta a eliminar:");
        if (numeroReceta !== null && numeroReceta !== "") {
            const index = parseInt(numeroReceta) - 1;
            if (index >= 0 && index < recetas.length) {
                recetas.splice(index, 1);
                mostrarRecetas();
            } else {
                alert("Número de receta no válido. Intente nuevamente.");
            }
        }
    });
    agregarReceta.addEventListener("click", function () {
        const nombreReceta = prompt("Ingrese el nombre de la nueva receta:");
        const explicacionReceta = prompt("Ingrese la explicación de la nueva receta:");

        if (nombreReceta && explicacionReceta) {
            const nuevaReceta = { nombre: nombreReceta, explicacion: explicacionReceta };
            recetas.push(nuevaReceta);
            mostrarRecetas();
        } else {
            alert("Debe proporcionar un nombre y una explicación para la nueva receta.");
        }
    });
});

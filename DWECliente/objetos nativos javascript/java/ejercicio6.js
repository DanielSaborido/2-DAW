let posicion = 1;

function agregarEquipo() {
    const equipoInput = document.getElementById("equipo");
    const puntosInput = document.getElementById("puntos");
    const equipo = equipoInput.value.trim();
    const puntos = parseInt(puntosInput.value);

    if (!equipo || isNaN(puntos)) {
        alert("Por favor, ingrese un equipo y puntos válidos.");
        return;
    }
    const tablaEquipos = document.getElementById("tablaEquipos");
    const tbody = tablaEquipos.querySelector("tbody");
    const filas = tbody.getElementsByTagName("tr");
    let equipoExistente = false;
    for (let i = 0; i < filas.length; i++) {
        const celdas = filas[i].getElementsByTagName("td");
        if (celdas[1].textContent === equipo) {
            celdas[2].textContent = puntos;
            equipoExistente = true;
            break;
        }
    }
    if (!equipoExistente) {
        const newRow = tbody.insertRow();
        const posicionCell = newRow.insertCell(0);
        posicionCell.textContent = posicion++;
        const equipoCell = newRow.insertCell(1);
        equipoCell.textContent = equipo;
        const puntosCell = newRow.insertCell(2);
        puntosCell.textContent = puntos;
    }

    ordenarTablaPorPuntos();
    equipoInput.value = "";
    puntosInput.value = "";
}

function ordenarTablaPorPuntos() {
    const tablaEquipos = document.getElementById("tablaEquipos");
    const tbody = tablaEquipos.querySelector("tbody");
    const filas = Array.from(tbody.getElementsByTagName("tr"));

    filas.sort((a, b) => {
        const puntosA = parseInt(a.getElementsByTagName("td")[2].textContent);
        const puntosB = parseInt(b.getElementsByTagName("td")[2].textContent);
        return puntosB - puntosA;
    });
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
    filas.forEach((fila, index) => {
        const celdas = fila.getElementsByTagName("td");
        celdas[0].textContent = index + 1; // Actualizar la posición
        tbody.appendChild(fila);
    });
}
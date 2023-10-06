function actualizarReloj() {
    const fecha = new Date();
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    let ampm = "AM";

    if (horas >= 12) {
        ampm = "PM";
    }
    if (horas > 12) {
        horas -= 12;
    }
    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;
    document.getElementById("Result").innerHTML = `${horas}:${minutos}:${segundos} ${ampm}`;
}

actualizarReloj();
setInterval(actualizarReloj, 1000);
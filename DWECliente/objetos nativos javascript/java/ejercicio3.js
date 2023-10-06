function esBisiesto(anio) {
    return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
}

function obtenerNumeroSemana(fecha) {
    const partes = fecha.split('-');
    const anio = parseInt(partes[0]);
    const mes = parseInt(partes[1]) - 1;
    const dia = parseInt(partes[2]);
    const fechaObj = new Date(anio, mes, dia);
    const primerDiaDelAnio = new Date(anio, 0, 1);

    if (isNaN(fechaObj.getTime())) {
        return 'Fecha inválida';
    }

    const diferencia = fechaObj - primerDiaDelAnio;
    return esBisiesto(anio) ? Math.ceil((diferencia / (7 * 24 * 60 * 60 * 1000)) + 1) : Math.ceil(diferencia / (7 * 24 * 60 * 60 * 1000));
}

const fecha = prompt('Escribe una fecha en formato YYYY-MM-DD. Ejemplo: 2023-10-6');
const numeroDeSemana = obtenerNumeroSemana(fecha);
document.getElementById("Result").innerHTML = `La fecha ${fecha} pertenece a la semana número ${numeroDeSemana}.`;
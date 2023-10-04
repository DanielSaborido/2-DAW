function tiradas(){
    let dado1;
    let dado2;
    let resultados = [];
    var tirada = 0;

    while(tirada!==36000){
        dado1 = Math.floor(Math.random() * 6) + 1;
        dado2 = Math.floor(Math.random() * 6) + 1;
        resultados.push(dado1 + dado2);
        tirada++;
    }

    return resultados
}

function filtrado(resultados){
    resultados.sort((a, b) => a - b)
    const conteo = {};
    let contenidoHTML = "";

    for (const resultado of resultados) {
        if (conteo[resultado]) {
            conteo[resultado]++;
        } else {
            conteo[resultado] = 1;
        }
    }
    for (const numero in conteo) {
        contenidoHTML += `Número ${numero}: ${conteo[numero]} veces<br>`;
    }

    return contenidoHTML;
}

console.log(filtrado(tiradas()));
document.getElementById("Result").innerHTML=filtrado(tiradas());
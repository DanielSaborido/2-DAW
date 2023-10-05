const radio = parseFloat(prompt("Dame el radio de la circunferencia"));
const diametro = 2*radio;
const perimetro = 2 * Math.PI * radio;
const areaC = Math.PI * radio ** 2;
const areaE = 4 * Math.PI * radio ** 2;
const volumen = (4 / 3) * Math.PI * radio ** 3;

document.getElementById("Result").innerHTML = `Radio: ${radio.toFixed(2)}<br>Diametro: ${diametro.toFixed(2)}<br>
Perimetro: ${perimetro.toFixed(2)}<br>Area Circulo: ${areaC.toFixed(2)}<br>Area Esfera: ${areaE.toFixed(2)}<br>Volumen Esfera: ${volumen.toFixed(2)}`;
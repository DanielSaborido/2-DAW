const expresion = prompt("Ingresa una expresión aritmética:");

try {
    const resultado = eval(expresion);
    document.getElementById("Result").innerHTML=`El resultado de la expresión "${expresion}" es: ${resultado}`;
} catch (error) {
    document.getElementById("Result").innerHTML="Ha ocurrido un error en la expresión ingresada.";
}
let numero = prompt("Escribe cuantas veces repetir la palabra \"bauuuba\"");

if (isNaN(parseInt(numero)) || numero < 1){
    document.getElementById("Result").innerHTML = ("No has escrito un número positivo en el prompt.");
} else {
    console.log(recursiva(numero));
    document.getElementById("Result").innerHTML = recursiva(numero);
}

function recursiva(numero){
    if (numero > 1) return "bauuuba " + recursiva(numero-1);
    else return "bauuuba."
}
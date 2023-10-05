var valores = [true, 5, false, "hola", "adios", 2]

var resultadoComparacion = valores[3] > valores[4] ? valores[3] : valores[4];
console.log("El texto mayor es: " + resultadoComparacion);

var resultadoTrue = valores[0] || valores[2];
console.log("Resultado true: " + resultadoTrue);

var resultadoFalse = valores[0] && valores[2];
console.log("Resultado false: " + resultadoFalse);

var suma = valores[1] + valores[5];
var resta = valores[1] - valores[5];
var multiplicacion = valores[1] * valores[5];
var division = valores[1] / valores[5];
var modulo = valores[1] % valores[5];

console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicacion);
console.log("División: " + division);
console.log("Módulo: " + modulo);
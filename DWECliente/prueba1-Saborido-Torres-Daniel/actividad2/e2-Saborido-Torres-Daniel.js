function findPairs(number1, number2) {
    //validación de los elementos insertados
    if (isNaN(number1)|| isNaN(number2)){
        alert("Lo insertado no son números.")
    } else if (number1 < 0 || number2 < 0 || number1 > 100 || number2 > 100){
        alert("Numeros fuera de rango.")
    } else {
        //Insertar solo los pares en el array
        const pairs = [];
        while (number1 <= number2){
            if (number1%2 == 0) {
                pairs.push(number1)
            }
            number1++;
        }
        //mostrar los datos de la forma solicitada.
        let list = "";
        pairs.forEach(number => {list += number+", "});
        alert("Los números pares entre ambos números son: " + list);
    }
}

//Solicitud y conversión a Int de los números
const number1 = parseInt(prompt("Inserta un número del 0 al 100"));
const number2 = parseInt(prompt("Inserta un número del 0 al 100"));

//comprobación de que numero es mas grande para la obtención de los pares
if (number1 < number2){
    findPairs(number1,number2);
} else {
    findPairs(number2,number1);
}
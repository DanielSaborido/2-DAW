function crearArray() {
    const inputText = prompt("Ingrese la matriz bidimensional, (,) para separar elementos de cada matriz y (;) para separar las matrices.\nEjemplo: 1,2;3,4,5,6;7,8,9");
    const filas = inputText.split(";");
    const array = [];

    for (const fila of filas) {
        const elementos = fila.split(",");
        array.push(elementos);
    }

    return array;
}

function aplanamiento(array) {
    const resultado = [];

    for (let fila of array) {
        for (let elemento of fila) {
            resultado.push(elemento);
        }
    }

    return resultado;
}

function ordenanza(array){
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
}

let array = crearArray();
console.log(ordenanza(aplanamiento(array)));
document.getElementById("Result").innerHTML=(ordenanza(aplanamiento(array))).toString();
<!DOCTYPE html>
<html>
<head>
    <title>Operaciones con Array</title>
</head>
<body>

<?php

// Función para mostrar el contenido de un array
function mostrarArray($array) {
    echo "Contenido del Array: ";
    echo implode(", ", $array);
    echo "<br>";
}

// Función para eliminar el último elemento del array
function eliminarUltimoElemento($array) {
    $nuevoArray = [];
    
    foreach ($array as $key => $value) {
        if ($key < count($array) - 1) {
            $nuevoArray[$key] = $value;
        }
    }

    return $nuevoArray;
}

// Array de 8 números enteros aleatorios entre 0 y 10
$miArray = [];
for ($i = 0; $i < 8; $i++) {
    $miArray[] = rand(0, 10);
}

// Ejercicio 1: Mostrar el array
mostrarArray($miArray);

// Ejercicio 2: Eliminar el último elemento del array
echo "Array sin el último elemento (función personalizada): ";
$miArraySinUltimoElemento = eliminarUltimoElemento($miArray);
mostrarArray($miArraySinUltimoElemento);

// Comparar con la función predefinida array_pop
echo "Array sin el último elemento (array_pop): ";
array_pop($miArray);
mostrarArray($miArray);

// Restaurar el array original
$miArray[] = end($miArraySinUltimoElemento);

// Ejercicio 3: Mostrar la longitud del array
echo "Longitud del Array: " . count($miArray) . "<br>";

// Ejercicio 4: Voltear el array
echo "Array volteado: ";
$miArrayVolteado = [];
for ($i = count($miArray) - 1; $i >= 0; $i--) {
    $miArrayVolteado[] = $miArray[$i];
}
mostrarArray($miArrayVolteado);

// Ejercicio 5: Buscar un elemento introducido por URL
if (isset($_GET['elemento'])) {
    $elementoBuscado = $_GET['elemento'];
    $indice = -1;

    for ($i = 0; $i < count($miArray); $i++) {
        if ($miArray[$i] == $elementoBuscado) {
            $indice = $i;
            break;
        }
    }

    if ($indice != -1) {
        echo "Elemento '$elementoBuscado' encontrado en el índice: $indice";
    } else {
        echo "Elemento '$elementoBuscado' no encontrado en el array";
    }
}

?>

</body>
</html>

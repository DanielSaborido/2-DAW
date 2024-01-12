<?php

// Incluye la biblioteca de funciones
include 'biblioteca.php';

// Ejercicio 1: Muestra los números primos que hay entre 1 y 1000.
echo "<h2>Ejercicio 1: Números primos entre 1 y 1000</h2>";
echo "<ul>";
for ($i = 1; $i <= 1000; $i++) {
    if (esPrimo($i)) {
        echo "<li>" . $i . "</li>";
    }
}
echo "</ul>";

// Ejercicio 2: Muestra los números capicúa que hay entre 1 y 99999.
echo "<h2>Ejercicio 2: Números capicúa entre 1 y 99999</h2>";
echo "<ul>";
for ($i = 1; $i <= 99999; $i++) {
    if (esCapicua($i)) {
        echo "<li>" . $i . "</li>";
    }
}
echo "</ul>";

// Ejercicio 3: Escribe un programa que pase de binario a decimal.
$numeroBinario = '1101';
$numeroDecimal = 0;

echo "<h2>Ejercicio 3: Convertir de Binario a Decimal</h2>";
echo "<p>Número binario: " . $numeroBinario . "</p>";

$longitud = digitos($numeroBinario);

for ($i = 0; $i < $longitud; $i++) {
    $digito = digitoN($numeroBinario, $i);
    $peso = potencia(2, $longitud - $i - 1);
    $numeroDecimal += $digito * $peso;
}

echo "<p>Número decimal: " . $numeroDecimal . "</p>";

// Ejercicio 4: Escribe un programa que pase de decimal a binario.
$numeroDecimal = 23;
$numeroBinario = '';

echo "<h2>Ejercicio 4: Convertir de Decimal a Binario</h2>";
echo "<p>Número decimal: " . $numeroDecimal . "</p>";

while ($numeroDecimal > 0) {
    $resto = $numeroDecimal % 2;
    $numeroBinario = $resto . $numeroBinario;
    $numeroDecimal = (int)($numeroDecimal / 2);
}

echo "<p>Número binario: " . $numeroBinario . "</p>";
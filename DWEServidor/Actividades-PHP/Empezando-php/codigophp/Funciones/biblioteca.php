<?php

// 1. esCapicua: Devuelve verdadero si el número que se pasa como parámetro es capicúa y falso en caso contrario.
function esCapicua($numero) {
    return $numero == voltea($numero);
}

// 2. esPrimo: Devuelve verdadero si el número que se pasa como parámetro es primo y falso en caso contrario.
function esPrimo($numero) {
    if ($numero < 2) {
        return false;
    }

    for ($i = 2; $i <= sqrt($numero); $i++) {
        if ($numero % $i == 0) {
            return false;
        }
    }

    return true;
}

// 3. siguientePrimo: Devuelve el menor primo que es mayor al número que se pasa como parámetro.
function siguientePrimo($numero) {
    do {
        $numero++;
    } while (!esPrimo($numero));

    return $numero;
}

// 4. potencia: Dada una base y un exponente devuelve la potencia.
function potencia($base, $exponente) {
    return pow($base, $exponente);
}

// 5. digitos: Cuenta el número de dígitos de un número entero.
function digitos($numero) {
    return strlen((string)$numero);
}

// 6. voltea: Le da la vuelta a un número.
function voltea($numero) {
    return (int)strrev((string)$numero);
}

// 7. digitoN: Devuelve el dígito que está en la posición n de un número entero. Se empieza contando por el 0 y de izquierda a derecha.
function digitoN($numero, $posicion) {
    $numeroInvertido = strrev((string)$numero);
    return (int)$numeroInvertido[$posicion];
}

// 8. posicionDeDigito: Da la posición de la primera ocurrencia de un dígito dentro de un número entero. Si no se encuentra, devuelve -1.
function posicionDeDigito($numero, $digito) {
    $numeroInvertido = strrev((string)$numero);
    $posicion = strpos($numeroInvertido, (string)$digito);
    
    return ($posicion !== false) ? digitos($numero) - $posicion - 1 : -1;
}

// 9. quitaPorDetras: Le quita a un número n dígitos por detrás (por la derecha).
function quitaPorDetras($numero, $n) {
    return (int)substr((string)$numero, 0, digitos($numero) - $n);
}

// 10. quitaPorDelante: Le quita a un número n dígitos por delante (por la izquierda).
function quitaPorDelante($numero, $n) {
    return (int)substr((string)$numero, $n);
}

// 11. pegaPorDetras: Añade un dígito a un número por detrás.
function pegaPorDetras($numero, $digito) {
    return (int)($numero . $digito);
}

// 12. pegaPorDelante: Añade un dígito a un número por delante.
function pegaPorDelante($numero, $digito) {
    return (int)($digito . $numero);
}

// 13. trozoDeNumero: Toma como parámetros las posiciones inicial y final dentro de un número y devuelve el trozo correspondiente.
function trozoDeNumero($numero, $inicio, $fin) {
    $longitud = $fin - $inicio + 1;
    return (int)substr((string)$numero, $inicio, $longitud);
}

// 14. juntaNumeros: Pega dos números para formar uno.
function juntaNumeros($numero1, $numero2) {
    return (int)($numero1 . $numero2);
}
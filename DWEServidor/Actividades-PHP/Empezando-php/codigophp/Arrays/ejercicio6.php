<!DOCTYPE html>
<html>
<head>
    <title>Diccionario Español-Ingles</title>
</head>
<body>
    <?php
    $diccionario = array(
        'casa' => 'house',
        'perro' => 'dog',
        'gato' => 'cat',
        'libro' => 'book',
        'mesa' => 'table',
        'sol' => 'sun',
        'luna' => 'moon',
        'manzana' => 'apple',
        'coche' => 'car',
        'amarillo' => 'yellow'
    );
    $palabraEspanol = strtolower(readline("Introduce una palabra en español: "));

    if (array_key_exists($palabraEspanol, $diccionario)) {
        $traduccion = $diccionario[$palabraEspanol];
        echo "<p>Traduccion al ingles: $traduccion</p>";
    } else {
        echo "<p>La palabra no se encuentra en el diccionario.</p>";
    }
    ?>
</body>
</html>

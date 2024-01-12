<!DOCTYPE html>
<html>
<head>
    <title>Prueba de Traduccion</title>
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
    $palabrasAleatorias = array_rand($diccionario, 5);
    $respuestasCorrectas = 0;
    $respuestasIncorrectas = 0;

    foreach ($palabrasAleatorias as $palabraEspanol) {
        $traduccionCorrecta = $diccionario[$palabraEspanol];
        $respuestaUsuario = strtolower(readline("Traduce '$palabraEspanol' al ingles: "));

        if ($respuestaUsuario == $traduccionCorrecta) {
            echo "<p>¡Correcto! La traduccion de '$palabraEspanol' es '$traduccionCorrecta'.</p>";
            $respuestasCorrectas++;
        } else {
            echo "<p>Incorrecto. La traduccion correcta de '$palabraEspanol' es '$traduccionCorrecta'.</p>";
            $respuestasIncorrectas++;
        }
    }

    echo "<p>Respuestas Correctas: $respuestasCorrectas</p>";
    echo "<p>Respuestas Incorrectas: $respuestasIncorrectas</p>";
    ?>
</body>
</html>

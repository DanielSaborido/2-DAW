<!DOCTYPE html>
<html>
<head>
    <title>Valores Maximo y Minimo</title>
</head>
<body>
    <?php
    $numeros = array();

    for ($i = 1; $i <= 10; $i++) {
        $numero = (int)readline("Introduce el número $i: ");
        $numeros[] = $numero;
    }

    $maximo = max($numeros);
    $minimo = min($numeros);

    echo "<p>Valores Maximo y Minimo:</p>";
    echo "<p>Maximo: $maximo</p>";
    echo "<p>Minimo: $minimo</p>";
    ?>

</body>
</html>

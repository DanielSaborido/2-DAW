<!DOCTYPE html>
<html>
<head>
    <title>Tipos de Variables en Array</title>
</head>
<body>
    <?php
    $miArray = array("Texto", 123, 3.14, true, "Otro texto", false, 42);

    foreach ($miArray as $valor) {
        echo "<p>";
        echo "Valor: $valor - Tipo: ";

        if (is_int($valor)) {
            echo "Entero";
        } elseif (is_float($valor)) {
            echo "Decimal";
        } elseif (is_bool($valor)) {
            echo "Booleano";
        } elseif (is_string($valor)) {
            echo "Cadena de Texto";
        } else {
            echo "Desconocido";
        }

        echo "</p>";
    }
    ?>
</body>
</html>

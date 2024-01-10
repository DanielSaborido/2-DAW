<!DOCTYPE html>
<html>
<head>
    <title>Calculos de circulo</title>
</head>
<body>
<?php
    $radio = 12;

    $area = pi() * pow($radio, 2);
    $longitud = 2 * pi() * $radio;

    echo "Para un circulo con radio de $radio:<br> Area: " . number_format($area, 2) . 
    " unidades cuadradas.<br> Longitud: " . number_format($longitud, 2) . " unidades.";
?>

</body>
</html>
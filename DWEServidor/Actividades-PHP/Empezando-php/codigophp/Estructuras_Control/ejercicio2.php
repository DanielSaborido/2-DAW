<!DOCTYPE html>
<html>
<head>
    <title>Calculador de Salario Semanal</title>
</head>
<body>    
    <form action="#" method="post">
        <label for="horas_trabajadas">Horas trabajadas:</label>
        <input type="number" name="horas_trabajadas" required min="0" max="168">
        <button type="submit">Calcular Salario</button>
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $horas_trabajadas = $_POST["horas_trabajadas"];
        $tarifa_ordinaria = 12;
        $tarifa_extra = 16;

        if ($horas_trabajadas <= 40) {
            $salario = $horas_trabajadas * $tarifa_ordinaria;
        } else {
            $horas_normales = 40;
            $horas_extra = $horas_trabajadas - $horas_normales;
            $salario = ($horas_normales * $tarifa_ordinaria) + ($horas_extra * $tarifa_extra);
        }

        echo "<p>El salario semanal es: " . $salario . "€</p>";
    }
    ?>

</body>
</html>

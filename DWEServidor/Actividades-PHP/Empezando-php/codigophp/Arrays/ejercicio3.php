<!DOCTYPE html>
<html>
<head>
    <title>Nota media</title>
</head>
<body>
    <form action="#" method="post">
        <label for="nota1">Nota 1:</label>
        <input type="number" name="nota1" required min="0" max="10">
        <label for="nota2">Nota 2:</label>
        <input type="number" name="nota2" required min="0" max="10">
        <label for="nota3">Nota 3:</label>
        <input type="number" name="nota3" required min="0" max="10">
        <button type="submit">Calcular Media</button>
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nota1 = $_POST["nota1"];
        $nota2 = $_POST["nota2"];
        $nota3 = $_POST["nota3"];

        $media = ($nota1 + $nota2 + $nota3)/3;
        if ($nota_media < 4) {
            $clasificacion = "Insuficiente";
        } elseif ($nota_media < 7) {
            $clasificacion = "Suficiente";
        } elseif ($nota_media < 9) {
            $clasificacion = "Notable";
        } elseif ($nota_media < 11) {
            $clasificacion = "Sobresaliente";
        } else {
            $clasificacion = "Obviamente has mentido con tus notas.";
        }

        echo "<p>La nota media es: " . number_format($nota_media, 2) . "</p>";
        echo "<p>Clasificación: " . $clasificacion . "</p>";
    }
    ?>
</body>
</html>
<!DOCTYPE html>
<html>
<head>
    <title>Saludo</title>
</head>
<body>
    <form action="#" method="post">
        <label for="hora">Introduce la hora (solo horas):</label>
        <input type="number" name="hora" required min="0" max="24">
        <button type="submit">Obtener Saludo</button>
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $hora = $_POST["hora"];
        if ($hora >= 6 && $hora < 12) {
            $saludo = "Buenos días";
        } elseif ($hora >= 12 && $hora < 21) {
            $saludo = "Buenas tardes";
        } else {
            $saludo = "Buenas noches";
        }

        echo "<p>" . $saludo . "</p>";
    }
    ?>
</body>
</html>
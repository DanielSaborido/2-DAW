<!DOCTYPE html>
<html>
<head>
    <title>Serie de Fibonacci</title>
</head>
<body>
    <form action="#" method="post">
        <label for="n">Introduce el numero de terminos (n):</label>
        <input type="number" name="n" required min="1">
        <button type="submit">Generar Serie</button>
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $n = $_POST["n"];
        $term1 = 0;
        $term2 = 1;

        echo "<p>Primeros" . $n . "terminos de la serie de Fibonacci:</p>";
        echo "<ul>";

        for ($i = 1; $i <= $n; $i++) {
            echo "<li>" . $$term1 . "</li>";

            $term3 = $term1 + $term2;
            $term1 = $term2;
            $term2 = $term3;
        }

        echo "</ul>";
    }
    ?>

</body>
</html>

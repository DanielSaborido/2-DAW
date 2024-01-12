<!DOCTYPE html>
<html>
<head>
    <title>Analisis Numerico</title>
</head>
<body>
    <form action="#" method="post">
        <label for="numero">Introduce un numero (máximo 4 cifras):</label>
        <input type="number" name="numero" required min="0" max="9999">
        <button type="submit">Analizar Numero</button>
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $numero = $_POST["numero"];

        $primera_cifra = $numero % 10;
        $ultima_cifra = $numero % 10;
        $paridad = ($numero % 2 == 0) ? "par" : "impar";

        echo "<p>Primera cifra: " . $primera_cifra . "</p>";
        echo "<p>Última cifra: " . $ultima_cifra . "</p>";
        echo "<p>El numero es " . $paridad . "</p>";
    }
    ?>

</body>
</html>

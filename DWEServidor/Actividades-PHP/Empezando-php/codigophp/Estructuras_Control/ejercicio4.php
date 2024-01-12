<!DOCTYPE html>
<html>
<head>
    <title>Ordenador de Numeros</title>
</head>
<body>
    <form action="#" method="post">
        <label for="numero1">Numero 1:</label>
        <input type="number" name="numero1" required><br>
        <label for="numero2">Numero 2:</label>
        <input type="number" name="numero2" required><br>
        <label for="numero3">Numero 3:</label>
        <input type="number" name="numero3" required><br>
        <button type="submit">Ordenar Numeros</button>
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $numero1 = $_POST["numero1"];
        $numero2 = $_POST["numero2"];
        $numero3 = $_POST["numero3"];

        $numeros_ordenados = [$numero1, $numero2, $numero3];
        sort($numeros_ordenados);

        echo "<p>Numeros ordenados: " . implode(", ", $numeros_ordenados) . "</p>";
    }
    ?>

</body>
</html>

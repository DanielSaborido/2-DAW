<!DOCTYPE html>
<html>
<head>
    <title>Rango Impares</title>
</head>
<body>
    <form action="#" method="post">
        <label for="numero1">Introduce el primer numero:</label>
        <input type="number" name="numero1" required min="0">
        <label for="numero2">Introduce el segundo numero:</label>
        <input type="number" name="numero2" required min="0">
        <button type="submit">Mostrar Impares</button>
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $numero1 = $_POST["numero1"];
        $numero2 = $_POST["numero2"];

        if ($numero1 >= $numero2) {
            echo "<p>Numeros impares entre " . $numero2 . " y " . $numero1 . ":</p>";
            echo "<ul>";
            for ($i = $numero2; $i <= $numero1; $i++) {
                if ($i % 2 != 0) {
                    echo "<li>" . $i . "</li>";
                }
            }
            echo "</ul>";
        } else {
            echo "<p>Numeros impares entre " . $numero1 . " y " . $numero2 . ":</p>";
            echo "<ul>";
            for ($i = $numero1; $i <= $numero2; $i++) {
                if ($i % 2 != 0) {
                    echo "<li>" . $i . "</li>";
                }
            }
            echo "</ul>";
        }
    }
    ?>

</body>
</html>

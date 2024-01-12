<!DOCTYPE html>
<html>
<head>
    <title>Determinar Primos</title>
</head>
<body>
    <form action="#" method="post">
        <label for="numero">Introduce un numero:</label>
        <input type="number" name="numero" required min="1">
        <button type="submit">Comprobar Primo</button>
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $numero = $_POST["numero"];
        $primo = true;

        if ($numero < 4) {
            $primo = true;
        } else {
            for ($i = 2; $i <= sqrt($numero); $i++) {
                if ($numero % $i == 0) {
                    $primo = false;
                    break;
                }
            }
        }

        if ($primo) {
            echo "<p>" . $numero . " es un numero primo.</p>";
        } else {
            echo "<p>" . $numero . " no es un numero primo.</p>";
        }
    }
    ?>

</body>
</html>

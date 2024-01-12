<!DOCTYPE html>
<html>
<head>
    <title>Ejercicios PHP con Formularios</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <!-- Ejercicio 1: Datos personales con estilo -->
    <div class="form-container">
        <h1>Ejercicio 1: Datos personales con estilo</h1>
        <form action="#" method="post">
            <label for="nombre">Nombre:</label>
            <input type="text" name="nombre" required>

            <label for="apellidos">Apellidos:</label>
            <input type="text" name="apellidos" required>

            <label for="direccion">Direccion:</label>
            <input type="text" name="direccion" required>

            <label for="edad">Edad:</label>
            <input type="number" name="edad" required>

            <label for="telefono">Telefono:</label>
            <input type="text" name="telefono" required>

            <label for="email">Email:</label>
            <input type="email" name="email" required>

            <button type="submit">Enviar</button>
        </form>

        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            echo "<h2>Resultados:</h2>";
            echo "<p>Nombre: " . htmlspecialchars($_POST["nombre"]) . "</p>";
            echo "<p>Apellidos: " . htmlspecialchars($_POST["apellidos"]) . "</p>";
            echo "<p>Direccion: " . htmlspecialchars($_POST["direccion"]) . "</p>";
            echo "<p>Edad: " . htmlspecialchars($_POST["edad"]) . "</p>";
            echo "<p>Telefono: " . htmlspecialchars($_POST["telefono"]) . "</p>";
            echo "<p>Email: " . htmlspecialchars($_POST["email"]) . "</p>";
        }
        ?>
    </div>
    <!-- Ejercicio 2: Operaciones con variables -->
    <div class="form-container">
        <h1>Ejercicio 2: Operaciones con variables</h1>
        <form action="#" method="post">
            <label for="x">Valor de x:</label>
            <input type="number" name="x" required>

            <label for="y">Valor de y:</label>
            <input type="number" name="y" required>

            <button type="submit">Calcular</button>
        </form>

        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $x = $_POST["x"];
            $y = $_POST["y"];
            $suma = $x + $y;
            $resta = $x - $y;
            $division = $x / $y;
            $multiplicacion = $x * $y;

            echo "<h2>Resultados:</h2>";
            echo "<p>Suma: " . $suma . "</p>";
            echo "<p>Resta: " . $resta . "</p>";
            echo "<p>Division: " . $division . "</p>";
            echo "<p>Multiplicacion: " . $multiplicacion . "</p>";
        }
        ?>
    </div>
    <!-- Ejercicio 3: Conversor de pesetas a euros -->
    <div class="form-container">
        <h1>Ejercicio 3: Conversor de pesetas a euros</h1>
        <form action="#" method="post">
            <label for="pesetas">Cantidad en pesetas:</label>
            <input type="number" name="pesetas" required>

            <button type="submit">Convertir</button>
        </form>

        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $pesetas = $_POST["pesetas"];
            $valorEuroEnPesetas = 166.386;
            $euros = $pesetas / $valorEuroEnPesetas;

            echo "<h2>Resultados:</h2>";
            echo "<p>" . $pesetas . " pesetas son aproximadamente " . number_format($euros, 2) . "€.</p>";
        }
        ?>
    </div>
    <!-- Ejercicio 4: Area y longitud de la circunferencia -->
    <div class="form-container">
        <h1>Ejercicio 4: Area y longitud de la circunferencia</h1>
        <form action="#" method="post">
            <label for="radio">Radio:</label>
            <input type="number" name="radio" required>

            <button type="submit">Calcular</button>
        </form>

        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $radio = $_POST["radio"];
            $area = pi() * pow($radio, 2);
            $longitud = 2 * pi() * $radio;

            echo "<h2>Resultados:</h2>";
            echo "<p>Area: " . number_format($area, 2) . " unidades cuadradas.</p>";
            echo "<p>Longitud: " . number_format($longitud, 2) . " unidades.</p>";
        }
        ?>
    </div>
</body>
</html>

<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <div class="contenedor">
        <h1>Mi primer PHP</h1>
        <img src="imagen.png" alt="Mi Imagen">
        <table>
            <tr>
                <th>Número</th>
                <th>Resultado</th>
            </tr>
            <?php
            for ($i = 1; $i <= 10; $i++) {
                $resultado = 5 * $i;
                echo "<tr><td>$i</td><td>$resultado</td></tr>";
            }
            ?>
        </table>
    </div>
</body>
</html>

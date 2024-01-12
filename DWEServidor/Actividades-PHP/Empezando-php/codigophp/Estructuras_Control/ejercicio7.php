<!DOCTYPE html>
<html>
<head>
    <title>Tabla de Multiplicar</title>
</head>
<body>
    <table style="border: 2;">
        <tr>
            <th></th>
            <?php
            for ($i = 1; $i <= 10; $i++) {
                echo "<th>Tabla" . $i . "</th>";
            }
            ?>
        </tr>

        <?php
        for ($i = 1; $i <= 10; $i++) {
            echo "<tr>";
            echo "<th>Tabla" . $i . "</th>";
            
            for ($j = 1; $j <= 10; $j++) {
                $resultado = $i * $j;
                echo "<td>" . $resultado . "</td>";
            }

            echo "</tr>";
        }
        ?>
    </table>

</body>
</html>

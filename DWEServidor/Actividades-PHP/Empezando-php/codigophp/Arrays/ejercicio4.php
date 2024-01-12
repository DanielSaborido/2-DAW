<!DOCTYPE html>
<html>
<head>
    <title>Tabla de Juegos</title>
    <style>
        table {
            border-collapse: collapse;
            width: 50%;
            margin: 20px;
        }
        th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <?php
    $juegos = array(
        'Accion' => array('GTA 5', 'Call Of Duty', 'PUBG'),
        'Aventura' => array('Assassin Creed', 'Tomb Raider', 'Last of Us'),
        'Deporte' => array('FIFA', 'PES', 'Moto G')
    );
    $categorias = array_keys($juegos);

    echo '<table>';
    echo '<tr><th>Categoría</th><th>Juegos</th></tr>';
    foreach ($categorias as $categoria) {
        echo '<tr>';
        echo "<td>$categoria</td><td>";
        foreach ($juegos[$categoria] as $juego) {
            echo "$juego<br>";
        }
        echo '</td>';
        echo '</tr>';
    }
    echo '</table>';
    ?>

</body>
</html>

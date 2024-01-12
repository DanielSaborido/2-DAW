<!DOCTYPE html>
<html>
<head>
    <title>Mis Datos Personales</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 20px;
        }
        .datos {
            border: 1px solid #ccc;
            padding: 10px;
            margin-bottom: 10px;
        }
        .titulo {
            font-weight: bold;
        }
    </style>
</head>
<body>
    <?php
        $nombre = "Daniel";
        $apellidos = "Saborido Torres";
        $direccion = "Calle Falsa, 1";
        $edad = 20;
        $telefono = "623307563";
        $email = "dsabtor427@g.educaand.es";
    ?>

    <div class="datos">
        <p class="titulo">Nombre:</p>
        <p><?php echo $nombre; ?></p>
    </div>
    <div class="datos">
        <p class="titulo">Apellidos:</p>
        <p><?php echo $apellidos; ?></p>
    </div>
    <div class="datos">
        <p class="titulo">Direccion:</p>
        <p><?php echo $direccion; ?></p>
    </div>
    <div class="datos">
        <p class="titulo">Edad:</p>
        <p><?php echo $edad; ?></p>
    </div>
    <div class="datos">
        <p class="titulo">Telefono:</p>
        <p><?php echo $telefono; ?></p>
    </div>
    <div class="datos">
        <p class="titulo">Email:</p>
        <p><?php echo $email; ?></p>
    </div>
</body>
</html>

<!DOCTYPE html>
<html>
<head>
    <title>Arrays en PHP</title>
</head>
<body>
    <?php
    $miArray = array();
    for ($i = 1; count($miArray) < 120; $i++) {
        $miArray[] = "Elemento-$i";
    }

    echo "<pre>" . $miArray . "</pre>";
    ?>

</body>
</html>

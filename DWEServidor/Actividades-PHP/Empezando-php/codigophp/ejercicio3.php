<!DOCTYPE html>
<html>
<head>
    <title>Conversor monetario</title>
</head>
<body>
    <?php
        $pesetas = 100000;

        $euros = $pesetas / 166.386;

        echo $pesetas . " pesetas son aproximadamente " . number_format($euros, 2) . "€.";
    ?>
</body>
</html>
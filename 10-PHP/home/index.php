<?php
  require_once "../controllers/noSessionValidation.php"; //Incluyo el archivo de validación de sesión
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <p>¡Estas en el home <?php echo $_SESSION["nombre"];?>!</p>
    <a href="../controllers/logout.php">Cerrar sesión</a>
  </body>
</html>
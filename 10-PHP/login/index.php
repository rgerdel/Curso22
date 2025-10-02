<?php
  require_once "../controllers/sessionValidation.php"; //Incluyo el archivo de validación de sesión
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
</head>
<body>
  <form method="post">
    <h2>Login</h2>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
    </div>
    <div>
      <label for="password">Contraseña:</label>
      <input type="password" id="password" name="password" required>
    </div>
    <button type="submit">Iniciar Sesión</button>
  </form>
  <?php
    require_once "loginController.php"; //Incluyo el archivo del controlador
  ?>
</body>
</html>
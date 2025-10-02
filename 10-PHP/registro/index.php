<?php
  require_once "../controllers/sessionValidation.php"; //Incluyo el archivo de validación de sesión
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro</title>
     <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  </head>
  <body>
    <form class="flex flex-col gap-4" method="post">
      <div class="flex flex-col gap-2 ">
        <label for="nombre">Nombre:</label>
        <input class="border border-gray-300 rounded p-2" type="text" id="nombre" name="nombre" required>
      </div>
      <div class="flex flex-col gap-2">
        <label for="email">Email:</label>
        <input class="border border-gray-300 rounded p-2" type="email" id="email" name="email" required>
      </div>
      <div class="flex flex-col gap-2">
        <label for="password">Contraseña:</label>
        <input class="border border-gray-300 rounded p-2" type="password" id="password" name="password" required>
      </div>
      <div class="flex flex-col gap-2">
        <label for="confirm_password">Confirmar Contraseña:</label>
        <input class="border border-gray-300 rounded p-2" type="password" id="confirm_password" name="confirm_password" required>
      </div>
      <button class="bg-blue-500 text-white p-2 rounded" type="submit">Registrarse</button>
    </form>
    <?php
      require_once "registroController.php"; //Incluyo el archivo del controlador
    ?>
  </body>
</html>
<?php
  if($_POST){
    require_once "../db/connection.php"; //Incluyo el archivo de conexión a la base de datos
    $email = $_POST['email'];
    $password = $_POST['password'];
    $regex_email = "/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/"; // Formato de email.
    //Minimo 8 caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial:
    $regex_password = "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&.])[A-Za-z\d$@$!%*?&.]{8,}$/";
    $errores = [];

    if($password == "" || $email == ""){
      $errores[] = "Todos los campos son obligatorios.";
    }

    if (!preg_match($regex_email, $email)) {
      $errores[] = "El email no es válido.";
    }

    if (!preg_match($regex_password, $password)) {
      $errores[] = "La contraseña no es válida. Debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial.";
    }

    if(count($errores) > 0){
      echo "<div class='mt-4 p-4 border border-red-500 bg-red-100 text-red-700 rounded'>";
      foreach($errores as $error){
        echo "<p>$error</p>";
      }
      echo "</div>";
    } else {
      $consulta = $conn->prepare("SELECT * FROM usuarios WHERE email = ?");
      $consulta->bind_param("s", $email);
      $consulta->execute();
      $resultado = $consulta->get_result();
      if($resultado->num_rows > 0){
        $usuario = $resultado->fetch_assoc();
        if(password_verify($password, $usuario['password'])){
          echo "<div class='mt-4 p-4 border border-green-500 bg-green-100 text-green-700 rounded'>";
          echo "<p>Inicio de sesión exitoso. ¡Bienvenido, " . htmlspecialchars($usuario['nombre']) . "!</p>";
          echo "</div>";
          $_SESSION['nombre'] = $usuario['nombre'];
          $_SESSION['email'] = $usuario['email'];
          #redireccionar a otra página
          header("Location: ./../home/");
        } else {
          echo "<div class='mt-4 p-4 border border-red-500 bg-red-100 text-red-700 rounded'>";
          echo "<p>Contraseña incorrecta.</p>";
          echo "</div>";
        }
      } else {
        echo "<div class='mt-4 p-4 border border-red-500 bg-red-100 text-red-700 rounded'>";
        echo "<p>No se encontró ningún usuario con ese email.</p>";
        echo "</div>";
      }
      $consulta->close();
      $conn->close();
      $_POST = []; //Limpio el array superglobal para que no se muestren los datos en el formulario
    }
  }
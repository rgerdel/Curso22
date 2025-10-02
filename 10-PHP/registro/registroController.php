<?php
  //Valido si existe algo en el array superglobal $_POST
  if ($_POST){
    //Expresiones regulares
    $regex_nombre = "/^[a-zA-ZÀ-ÿ\s]{2,40}$/i"; // Letras y espacios, pueden llevar acentos.
    $regex_email = "/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/"; // Formato de email.
    //Minimo 8 caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial:
    $regex_password = "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&.])[A-Za-z\d$@$!%*?&.]{8,}$/";
    //Capturo los datos del formulario
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];
    $errores = [];
    //Valido los datos
    if (!preg_match($regex_nombre, $nombre)) {
      $errores[] = "El nombre no es válido. Solo se permiten letras y espacios, y debe tener entre 2 y 40 caracteres.";
    }
    if (!preg_match($regex_email, $email)) {
      $errores[] = "El email no es válido.";
    }
    if (!preg_match($regex_password, $password)) {
      $errores[] = "La contraseña no es válida. Debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial.";
    }
    if ($password !== $confirm_password) {
      $errores[] = "Las contraseñas no coinciden.";
    }
    
    //Muestro los errores o el mensaje de éxito
    if (count($errores) > 0) {
      echo "<div class='mt-4 p-4 border border-red-500 bg-red-100 text-red-700 rounded'>";
      foreach ($errores as $error) {
        echo "<p>$error</p>";
      }
      echo "</div>";
    } else {
      echo "<div class='mt-4 p-4 border border-green-500 bg-green-100 text-green-700 rounded'>";
      echo "<p>Registro exitoso. ¡Bienvenido, $nombre!</p>";
      echo "</div>";
      /*
        require: Importa el archivo de forma obligatoria. Si el archivo no se encuentra, genera un error fatal y detiene la ejecución del script.
        require_once: Igual que require, pero verifica si el archivo ya ha sido incluido, y si es así, no lo incluye de nuevo.
        include: Importa el archivo de forma opcional. Si el archivo no se encuentra, genera una advertencia (warning) pero la ejecución del script continúa.
        include_once: Igual que include, pero verifica si el archivo ya ha sido incluido, y si es así, no lo incluye de nuevo.
      */
      require_once "../db/connection.php"; //Incluyo el archivo de conexión a la base de datos
      $hashed_password = password_hash($_POST["password"], PASSWORD_DEFAULT);
      #Bind parametros para evitar inyecciones SQL
      $consulta = $conn->prepare("INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)");
      $consulta->bind_param("sss", $nombre, $email, $hashed_password);
      if ($consulta->execute()) {
        echo "<p>Datos guardados correctamente en la base de datos.</p>";
        #redireccionar a una pagina luego de 2 segundos
        header("Refresh:2; url=./../home/");
      } else {
        echo "<p>Error al guardar los datos: " . $consulta->error . "</p>";
      }
      $consulta->close();
      $conn->close();
      $_POST = []; //Limpio el array superglobal para que no se muestren los datos en el formulario
    }
  }
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <?php
      # Esto es un comentario de una sola línea
      // Esto es otro comentario de una sola línea
      /* 
        Esto es un comentario
        de múltiples líneas 
      */
      #Variables
      $nombre = "Juan";
      $edad = 30;
      #Echo imprime el texto en pantalla
      echo "<p>Hola, mi nombre es $nombre y tengo $edad años.</p>";
      #Var_dump muestra información detallada sobre una variable
      var_dump($nombre);

      #Tipos de datos en PHP
      $cadena = "<p>Hola Mundo</p>"; // String
      $entero = 42; // Integer
      $flotante = 3.14; // Float
      $booleano = true; // Boolean
      $nulo = null; // Null
      $array = [1, 2, 3]; // Array
      $array_asociativo = ["nombre" => "Juan", "edad" => 30]; // Array asociativo
      #echo "$array_asociativo['nombre']";
      $undefined; // Undefined

      # Constantes
      define("PI", 3.1416);
      echo "<p>El valor de PI es " . PI . "</p>";
    
      # Operadores aritméticos
      $a = 10;
      $b = 3;
      echo "<p>Suma: " . ($a + $b) . "</p>";
      echo "<p>Resta: " . ($a - $b) . "</p>";
      echo "<p>Multiplicación: " . ($a * $b) . "</p>";
      echo "<p>División: " . ($a / $b) . "</p>";
      echo "<p>Módulo: " . ($a % $b) . "</p>";
      echo "<p>Exponenciación: " . ($a ** $b) . "</p>";

      # Operadores de asignación
      $c = 5;
      $c += 2; // $c = $c + 2
      $c -= 2; // $c = $c - 2
      $c *= 2; // $c = $c * 2
      $c /= 2; // $c = $c / 2
      $c %= 2; // $c = $c % 2
      $c **= 2; // $c = $c ** 2
  
      # Operadores de comparación
      echo "<p>Igualdad: " . ($a == $b ? 'true' : 'false') . "</p>";
      echo "<p>Identidad: " . ($a === $b ? 'true' : 'false') . "</p>";
      echo "<p>Diferencia: " . ($a != $b ? 'true' : 'false') . "</p>";
      echo "<p>No idéntico: " . ($a !== $b ? 'true' : 'false') . "</p>";
      echo "<p>Mayor que: " . ($a > $b ? 'true' : 'false') . "</p>";
      echo "<p>Menor que: " . ($a < $b ? 'true' : 'false') . "</p>";
      echo "<p>Mayor o igual que: " . ($a >= $b ? 'true' : 'false') . "</p>";
      echo "<p>Menor o igual que: " . ($a <= $b ? 'true' : 'false') . "</p>";
      echo "<p>Nave espacial: " . ($a <=> $b) . "</p>"; // -1, 0, 1

      # Operadores de incremento y decremento
      $d = 5;
      echo "<p>Incremento: " . (++$d) . "</p>"; // Pre-incremento
      echo "<p>Decremento: " . (--$d) . "</p>"; // Pre-decremento
      echo "<p>Incremento: " . ($d++) . "</p>"; // Post-incremento
      echo "<p>Decremento: " . ($d--) . "</p>"; // Post-decremento

      # Operadores lógicos
      $x = true;
      $y = false;
      echo "<p>AND: " . ($x && $y ? 'true' : 'false') . "</p>";
      echo "<p>AND: " . ($x and $y ? 'true' : 'false') . "</p>";
      echo "<p>OR: " . ($x || $y ? 'true' : 'false') . "</p>";
      echo "<p>OR: " . ($x or $y ? 'true' : 'false') . "</p>";
      echo "<p>NOT: " . (!$x ? 'true' : 'false') . "</p>";
      echo "<p>XOR: " . ($x xor $y ? 'true' : 'false') . "</p>";
      
      # Operadores de strings
      $str1 = "Hola ";
      $str2 = "Mundo";
      echo "<p>Concatenación: " . ($str1 . $str2) . "</p>";
      echo "<p>Concatenación y asignación: " . ($str1 .= $str2) . "</p>";
      
      # Operadores de arrays
      $arr1 = [1, 2, 3];
      $arr2 = [4, 5, 6];
      $arr3 = $arr1 + $arr2; // Unión
      #igualdad
      echo "<p>Igualdad: " . ($arr1 == $arr2 ? 'true' : 'false') . "</p>";
      #igual exacta
      echo "<p>Identidad: " . ($arr1 === $arr2 ? 'true' : 'false') . "</p>";
      #diferencia
      echo "<p>Diferencia: " . ($arr1 != $arr2 ? 'true' : 'false') . "</p>";
      #no igual exacta
      echo "<p>No idéntico: " . ($arr1 !== $arr2 ? 'true' : 'false') . "</p>";
      #Inigualdad
      echo "<p>Inigualdad: " . ($arr1 <> $arr2 ? 'true' : 'false') . "</p>";

      #Condicionales
      $numero = 10;
      if ($numero > 0) {
        echo "<p>$numero es un número positivo.</p>";
      } elseif ($numero < 0) {
        echo "<p>$numero es un número negativo.</p>";
      } else {
        echo "<p>$numero es cero.</p>";
      }

      #Switch
      $color = "rojo";
      switch ($color) {
        case "rojo":
          echo "<p>El color es rojo.</p>";
          break;
        case "azul":
          echo "<p>El color es azul.</p>";
          break;
        case "verde":
          echo "<p>El color es verde.</p>";
          break;
        default:
          echo "<p>El color no es rojo, azul ni verde.</p>";
      }

      #Bucles
      #For
      $carros = ["Toyota", "Honda", "Ford"];
      
      for ($i = 0; $i < count($carros); $i++) {
        echo "<p>$carros[$i]</p>";
      }

      #Foreach
      foreach ($carros as $carro) {
        echo "<p>$carro</p>";
      }

      #While
      $j = 0;
      while ($j < count($carros)) {
        echo "<p>$carros[$j]</p>";
        $j++;
      }

      #Do-While
      $k = 0;
      do {
        echo "<p>$carros[$k]</p>";
        $k++;
      } while ($k < count($carros));

      #Funciones
      function saludar($nombre) {
        echo "<p>Hola, $nombre!</p>";
      }

      saludar("María");

      function sumar($a, $b) {
        return $a + $b;
      }

      $resultado = sumar(5, 3);

      /*
        Variables superglobales en PHP
        Las variables superglobales son arrays predefinidos en PHP que están disponibles en todos los ámbitos del script. 
        Algunas de las más comunes son:
        $_GET, $_POST, $_REQUEST, $_SERVER, $_SESSION, $_COOKIE, $_FILES, $_ENV
        $_GET: Recoge datos enviados mediante el método GET
        $_POST: Recoge datos enviados mediante el método POST
        $_REQUEST: Recoge datos enviados mediante GET, POST y COOKIES
        $_SERVER: Información del servidor y del entorno de ejecución
        $_SESSION: Variables de sesión
        $_COOKIE: Variables de cookies
        $_FILES: Información sobre archivos subidos
        $_ENV: Variables de entorno
      */
        
    ?>
  </body>
</html>
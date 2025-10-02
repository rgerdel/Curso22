<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <?php
    require_once("../db/conection.php");
    $connection->prepare("SELECT * FROM productos");
    $result = $connection->query("SELECT * FROM productos");

    #imprime una tabla con los productos de la base de datos y un boton de eliminar

    echo "<table>";
    echo "<tr><th>ID</th><th>Nombre</th><th>Precio</th><th>Cantidad</th><th>Eliminar</th></tr>";
    while($row = $result->fetch_assoc()) {
      echo "<tr><td>" . $row["id"] . "</td><td>" . $row["nombre"] . "</td><td>" . $row["precio"] . "</td><td>" . $row["cantidad"] . "</td><td><a href='./eliminar_producto.php?id=" . $row["id"] . "'>Eliminar</a></td></tr>";
    }
    echo "</table>";

    $connection->close();
    $result->close();

  ?>
</body>
</html>
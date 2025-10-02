<?php
  require_once("../db/conection.php");

  $connection->prepare("INSERT INTO productos (nombre, precio, cantidad) VALUES (?, ?, ?)");

  $productos = [
    ["Producto 1", 100.00, 10.5],
    ["Producto 2", 200.00, 20.5],
    ["Producto 3", 300.00, 30.5],
    ["Producto 4", 400.00, 40.5],
    ["Producto 5", 500.00, 50.5],
    ["Producto 6", 600.00, 60.5],
    ["Producto 7", 700.00, 70.5],
    ["Producto 8", 800.00, 80.5],
    ["Producto 9", 900.00, 90.5],
    ["Producto 10", 1000.00, 100.5]
  ];

  # insertar 10 productos

  foreach($productos as $producto) {
    $statement = $connection->prepare("INSERT INTO productos (nombre, precio, cantidad) VALUES (?, ?, ?)");
    $statement->bind_param("sdd", $producto[0], $producto[1], $producto[2]);
    $statement->execute();
  }

  #vamos a cerrar la conexion con la base de datos
  $connection->close();
  $statement->close();
  #redirige a la pagina productos
  header("Location: ./../productos");

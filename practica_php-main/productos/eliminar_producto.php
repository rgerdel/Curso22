<?php
  $id_producto = $_GET["id"];
  require_once("../db/conection.php");

  $statement = $connection->prepare("DELETE FROM productos WHERE id = ?");
  $statement->bind_param("i", $id_producto);
  $statement->execute();

  $connection->close();
  $statement->close();  

  header("Location: ./index.php");
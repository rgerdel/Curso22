<?php
 #Crear conexión a base de datos y guardar los datos
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "PHP";
  $conn = new mysqli($servername, $username, $password, $dbname);
  if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
  }
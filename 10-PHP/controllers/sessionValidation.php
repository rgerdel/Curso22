<?php
  // Start the session
  session_start();
  if(isset($_SESSION['usuario'])){
    header("Location: ./../home/"); //Si ya hay una sesión iniciada, redirijo al home
    exit();
  }
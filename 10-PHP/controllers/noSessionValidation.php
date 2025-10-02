<?php
  // Start the session
  session_start();
  if(!isset($_SESSION['usuario'])){
    header("Location: ./../login/"); //Si no hay una sesión iniciada, redirijo al login
    exit();
  }
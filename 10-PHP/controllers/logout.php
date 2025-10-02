<?php
  session_destroy(); //Destruyo la sesión
  header("Location: ./../login/"); //Redirecciono al login
  exit();
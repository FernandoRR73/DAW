<?php
if(isset($_GET['x'])) {
  $json = $_GET['x'];
  // Hacer algo con el JSON recibido, por ejemplo, mostrarlo
  echo "JSON recibido: " . $json;
} else {
  echo "No se ha recibido ningún dato JSON.";
}
?>
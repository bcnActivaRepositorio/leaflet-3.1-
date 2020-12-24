<?php
<<<<<<< HEAD

// header('Access-Control-Allow-Origin: http://localhost/mapa/api/apiRestaurants.php');
header('Access-Control-Allow-Origin: http://localhost:3000/bares');
=======
/*
Trataremos los datos deacuerdo con la especificación 
*/
header('Access-Control-Allow-Origin: http://localhost/mapa/api/apiRestaurants.php');
>>>>>>> 56f2e815ab4bfc2fd6cc5e534ee93b5da630bd1e
include("_db.php");
// call to database
$db = ("mysql:host=localhost;dbname=restaurants");
$sql = "SELECT * FROM restaurants "; 
$result = $mysqli->query($sql);

$numrows = $result->num_rows;

$datos = array();

$datos = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($datos);

?>
		

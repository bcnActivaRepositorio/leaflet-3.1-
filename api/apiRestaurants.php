<?php
/*
Trataremos los datos deacuerdo con la especificación 
*/

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
		
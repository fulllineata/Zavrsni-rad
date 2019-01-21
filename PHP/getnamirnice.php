<?php
header('Access-Control-Allow-Methods: GET');
include("functions.php");

echo getnamirnice();

function getnamirnice(){
	global $conn;
	$rarray = array();

	if(checkIfLoggedIn()){
		$result = $conn->query("SELECT ime_namirnice FROM kalorije");
		$num_rows = $result->num_rows;
		$modeli = array();
		if($num_rows > 0)
		{
			$result2 = $conn->query("SELECT ime_namirnice FROM kalorije");
			while($row = $result2->fetch_assoc()) {
				array_push($modeli,$row);
			}
		}
		$rarray['modeli'] = $modeli;
		return json_encode($rarray);
	} else{
		$rarray['error'] = "Please log in";
		header('HTTP/1.1 401 Unauthorized');
		return json_encode($rarray);
	}
}

?>
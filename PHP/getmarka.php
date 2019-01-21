<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization, Token, token, TOKEN');
include("functions.php");

echo getMarke();

function getMarke(){
    global $conn;
    $rarray = array();

    if(checkIfLoggedIn()){
        $result = $conn->query("SELECT * FROM namirnice");
        $num_rows = $result->num_rows;
        $marke = array();
        if($num_rows > 0)
        {
            $result2 = $conn->query("SELECT * FROM namirnice");
            while($row = $result2->fetch_assoc()) {
                array_push($marke,$row);
            }
        }
        $rarray['marke'] = $marke;
        return json_encode($rarray);
    } else{
        $rarray['error'] = "Please log in";
        header('HTTP/1.1 401 Unauthorized');
        return json_encode($rarray);
    }
}

?>
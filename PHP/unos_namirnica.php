<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization, Token, token, TOKEN');

include("functions.php");

if (isset($_POST['imeNamirnice']) && isset($_POST['kalorijskaVrednost'])) {

    $imeNamirnice = htmlspecialchars($_POST['imeNamirnice']);
    $kalorijskaVrednost = htmlspecialchars($_POST['kalorijskaVrednost']);


    echo unosNamirnica($imeNamirnice, $kalorijskaVrednost);
}
?>
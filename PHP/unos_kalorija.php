<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization, Token, token, TOKEN');

include("functions.php");

if (isset($_POST['imeNamirnice']) && isset($_POST['kalorijskaVrednost']) && isset($_POST['vreme']) && isset($_POST['datum'])) {

    $imeNamirnice = htmlspecialchars($_POST['imeNamirnice']);
    $kalorijskaVrednost = htmlspecialchars($_POST['kalorijskaVrednost']);
    $vremeUnosa = htmlspecialchars($_POST['vreme']);
    $datumUnosa = htmlspecialchars($_POST['datum']);

    echo unosKalorija($imeNamirnice, $kalorijskaVrednost, $datumUnosa, $vremeUnosa);
}
?>
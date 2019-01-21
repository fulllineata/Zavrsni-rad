<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization, Token, token, TOKEN');

include("functions.php");

if (isset($_POST['vrednostGlikemije']) && isset($_POST['vremeDatumUnosa'])) {

    $vrednostGlikemije = htmlspecialchars($_POST['vrednostGlikemije']);
    $vremeDatumUnosa = htmlspecialchars($_POST['vremeDatumUnosa']);

    echo dnevniUnosGlikemije($vrednostGlikemije, $vremeDatumUnosa);
}
?>
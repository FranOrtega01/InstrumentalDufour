<?php



if(isset($_POST['submit']) )
{
    $servicio = $_POST['service'];
    $nombre = $_POST['name'];
    $enterprice = $_POST['enterprice'];
    $phone = $_POST['phone'];
    $mail = $_POST['email'];
    $texto = $_POST['textarea'];
}

$header  = "Content-Type: text/plain";
$mensaje = "Servicio: " . $_POST['service'] . "\n\n";
$mensaje .= "Este mensaje fue enviado por " . $mail . "\n\n";
$mensaje .= "Nombre: " . $nombre . "\n\n";
$mensaje .= "Teléfono: " . $phone . "\n\n";
$mensaje .= "Empresa: " . $enterprice . "\n\n";
$mensaje .= "Mensaje: " . $texto . "\n\n";
$mensaje .= "Enviado el " . date("d/m/Y", time());

$para = "ortegato_01@hotmail.com";
$asunto = "Mail de Instrumental Dufour";

mail($para, $asunto, utf8_decode($mensaje),$header);
header("Location:https://www.instrumentaldufour.net/");

?>
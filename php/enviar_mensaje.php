<?php  
$destino = "ventas@fertilizantesfm.com";
$nombre = trim($_POST['nombre']);
$email = trim($_POST['email']);
$mensaje = trim($_POST['mensaje']);
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Esta dirección de correo ($email) es válida.";
} else
 {
 echo "Esta dirección de correo ($email) no existe, vuelva a intentarlo";
 }
$asunto = "Mensaje de Contacto";
$cabecera = "From: Fertilizantes FM<$email>";

if(mail($destino,$asunto,$mensaje,$cabecera))
	{
	echo '<script type="text/javascript">window.location.href="../gracias.html";</script>';
	}
	else
	{
	echo "error al enviar";
	}

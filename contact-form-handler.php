<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

$email_from = '';

$email_subject = "";
$email_body = "User Name: $name.\n"
                "User Email: $visitor_email.\n".
                  "User Message: $message.\n"
$to = "njanguiano@gmail.com";
$headers = "From $email_from \r\n";

$headers .= "Reply-To: $visitor_email \r\n";

mail($to, $email_subject,$email_body,$headers);

header("Location: index.html");


?>

<!-- test below -->
<!-- <?php


if($_POST["message"]) {


mail("your@email.address", "Here is the subject line",


$_POST["insert your message here"]. "From: an@email.address");


}


?> -->
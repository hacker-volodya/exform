<?php
if($_SERVER['REQUEST_METHOD'] === 'POST') {
    $body = "С формы на сайте поступила новая заявка:\r\n";
    foreach($_POST as $key => $val){
        $body .= stripslashes(trim($key)) . ": " . stripslashes(trim($val)) . "\r\n";
    }

$to = 'info@goproshka.pro'; //кому
$email_subject = "[House&Home Contact] Новая заявка"; //тема
$headers = "From: noreply@house-and-home.ru\r\n"; //от кого
mail($to,$email_subject,$body,$headers);
}

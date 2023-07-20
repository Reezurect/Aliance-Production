<?php
$user_name = htmlspecialchars($_POST["username"]);
$user_phone = htmlspecialchars($_POST['userphone']);

$token = "6341926064:AAE-AS7gL-goWzozSZzs2Twz6xo9LQ2Hu1s";
$chat_id = "-946040825";

$formData = array(
  "Клиент: " => $user_name,
  "Телефон: " => $user_phone
);

foreach($formData as $key => $value) {
  $text .= $key . "<b>" . urldecode($value) . "</b>" . "%0A" ;
}

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&text={$text}&parse_mode=html", "r");

if ($sendToTelegram) {
  echo "Success";
} else {
  echo "Error";
}


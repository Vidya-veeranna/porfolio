<?php

$name = $_POST['Name'];
$email = $_POST['Email'];
$Subject = $_POST['Subject'];
$message = $_POST['Message'];

$to = "vidyagowda191@gmail.com"

$subject = "Mail from portfolio"
$text = "Name = ". $name . "\r\n Email = ".$email . "\r\n Message = ".$message;
$headers = "From: ".$email
if($email!=NULL){
    mail($to,$subject,$text,$headers);
}
header("App.js")

?>
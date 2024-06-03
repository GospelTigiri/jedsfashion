<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$design = $_POST['design'];
$message = $_POST['message'];

$email_from = 'info@yourwebsite.com';

$email_design = 'New Form Submission';

$email_body ="User Name: $name.\n".
                "User Email: $visitor_email.\n".
                    "Subject: $subject.\n".
                    "User Message: $subject.\n";


$to = 'gospeltigiri@gmail.com';

$headers = "From:" $email_from \r\n";

$headers .= "Reply-To: $visitor_email \r\n;

mail($to, $email_subject, $email_body, $headers);

header("Location:" contact.html)
?>
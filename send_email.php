<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';  
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    // SMTP Settings
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'javedbaloch0091@gmail.com'; // Apna Gmail likho
    $mail->Password   = 'ajxr ghdq sobb ljig'; // App password use karo
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // Email Settings
    $mail->setFrom('javedbaloch0091@gmail.com', 'Javed'); // Apna email aur naam likho
    $mail->addAddress('javedbaloch0091@gmail.com'); // Jis email par bhejna hai

    $mail->isHTML(true);
    $mail->Subject = 'Email Notification';
    $mail->Body    = 'Hello Javed, your specific condition has been met!';

    $mail->send();
    echo json_encode(["success" => true, "message" => "Email sent successfully!"]);
} catch (Exception $e) {
    echo json_encode(["success" => false, "message" => "Error: {$mail->ErrorInfo}"]);
}
?>

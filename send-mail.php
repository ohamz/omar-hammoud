<?php

echo $_POST['name'];

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $name = $data['name'] ?? "";
    $email = $data['email'] ?? "";
    $message = $data['message'] ?? "";
}

// Send the email
$to = "omar.hammoudx@gmail.com";
$subject = "Portfolio Website - Contact Form Submission";
$body = "Name: $name\nEmail: $email\n\n$message";
$headers = "From: $email";

if (mail($to, $subject, $body, $headers)) {
    http_response_code(200);
    echo json_encode(['message' => 'Email sent successfully']);
}

?>
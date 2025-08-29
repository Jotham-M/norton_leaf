<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $to = "jothammuzemi22@gmail.com"; //Email
    $subject = "Helpdesk Ticket from " . htmlspecialchars($_POST["name"]);
    $message = "Name: " . htmlspecialchars($_POST["name"]) . "\n";
    $message .= "Email: " . htmlspecialchars($_POST["email"]) . "\n\n";
    $message .= "Issue:\n" . htmlspecialchars($_POST["issue"]);
    $headers = "From: " . htmlspecialchars($_POST["email"]);

    
    if (mail($to, $subject, $message, $headers)) {
        echo "Your ticket has been submitted successfully.";
    } else {
        echo "There was a problem sending your ticket. Please try again.";
    }
} else {
    echo "Invalid request.";
}
?> 


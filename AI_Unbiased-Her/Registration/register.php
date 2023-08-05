<?php
// Assuming you have a database connection established (not shown here).

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate and sanitize the input data if needed.
    $firstName = filter_input(INPUT_POST, 'fname', FILTER_SANITIZE_STRING);
    $lastName = filter_input(INPUT_POST, 'lname', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_NUMBER_INT);
    $password = $_POST["pass"];
    $confirmedPassword = $_POST["cpass"];

    // Perform password validation, e.g., checking for minimum length, complexity, etc.
    // You can also use password hashing for better security, but make sure to adjust the database schema accordingly.

    if ($password !== $confirmedPassword) {
        // Passwords don't match. Handle the error appropriately, like showing a message to the user.
        exit("Passwords do not match.");
    }

    // Store the data in the database (assuming you have a table named "users").
    $sql = "INSERT INTO users (first_name, last_name, email, phone, password) VALUES ('$firstName', '$lastName', '$email', '$phone', '$password')";
    // Execute the query to insert the data into the database.

    // After successful insertion, redirect to the "thankYou.html" page.
    header("Location: thankYou.html");
    exit();
}
?>

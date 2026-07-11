<?php
// Database connection
$db_server = "localhost";
$db_user = "root";
$db_password = "";
$db_name = "userdb";

// Create connection
$conn = mysqli_connect($db_server, $db_user, $db_password, $db_name);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = mysqli_real_escape_string($conn, $_POST['username']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);

    // Check if email and password match
    $sql = "SELECT * FROM user WHERE email='$email' AND password='$password'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        // Successful login
        header("Location: home.html");
        exit;
    } else {
        // Failed login
        header("Location: login.html?error=1");
        exit;
    }
}

mysqli_close($conn);
?>

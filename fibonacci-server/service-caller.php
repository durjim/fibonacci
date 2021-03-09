<?php
ini_set('error_log', './php-error.log');

include("./src/fibonacci.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["n"])) {
        echo json_encode(Fibonacci::GetFibonacciValue($_POST["n"]));
    }
}
?>
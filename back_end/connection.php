<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: *");

$host = "localhost";
$db_user = "root";
$db_pass = "";
$dbname = "rayan_care_db";


$conn = new mysqli($host, $db_user, $db_pass, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
    
  ?>
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
} else {
    
    $query = "SELECT * FROM rooms;";
    $result = $conn->query($query);

    if ($result && $result->num_rows > 0) {
        $roomsData = array();
        while ($row = $result->fetch_assoc()) {
            
            $roomsData[] = $row;
        }
       
        echo json_encode(array("rooms_data" => $roomsData));
    } else {
     
        echo json_encode(array("message" => "No rooms found"));
    }
}


$conn->close();
?>
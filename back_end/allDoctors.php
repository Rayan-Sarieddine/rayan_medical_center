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
   
    $query = "SELECT doctors.*, users.user_email FROM doctors INNER JOIN users ON doctors.doctor_id = users.user_id;";
    $result = $conn->query($query);
  

    if ($result && $result->num_rows > 0) {
        $doctorsData = array();
        while ($row = $result->fetch_assoc()) {
          
            $doctorsData[] = $row;
        }
      
        
        echo json_encode(array("doctors_data" => $doctorsData));
    } else {
       
        echo json_encode(array("message" => "No doctors found"));
    }
}


$conn->close();
?>
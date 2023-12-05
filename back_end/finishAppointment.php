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
    $postData = file_get_contents('php://input');


$data = json_decode($postData, true);


if (!empty($data)) {
  
  $user_id = $data['patient_id'];
  $date = $data['date'];
    
    $query = "UPDATE appointmants SET status_of_appointment = 'finished' WHERE patient_id='$user_id' AND date_of_appointment='$date' ;";
    $result = $conn->query($query);
    if ($result) {
        
        echo json_encode(array('success' => true, 'message' => 'Appointment finished'));
    } else {
     
        echo json_encode(array('success' => false, 'message' => 'Failed to finish appointment'));
    }
}
else {
  
    echo json_encode(array('success' => false, 'message' => 'No data received'));
}
}

$conn->close();
?>
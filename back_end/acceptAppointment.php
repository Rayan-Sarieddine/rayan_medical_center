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
   
  $query = "UPDATE appointmants SET status_of_appointment = 'accepted' WHERE patient_id = ? AND date_of_appointment = ?";
$stmt = $conn->prepare($query);

if ($stmt) {
   
    $stmt->bind_param("is", $user_id, $date);
    
    
    $stmt->execute();
    
    
    if ($stmt->affected_rows > 0) {
        echo json_encode(array('success' => true, 'message' => 'Appointment accepted'));
    } else {
        echo json_encode(array('success' => false, 'message' => 'Failed to accept appointment'));
    }
    
 
    $stmt->close();
} else {
    echo json_encode(array('success' => false, 'message' => 'No data received'));
}
}
}

?>
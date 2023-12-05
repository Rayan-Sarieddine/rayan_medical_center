<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: *");

$host = "localhost";
$db_user = "root";
$db_pass = "";
$dbname = "rayan_care_db";
$conn = new mysqli($host, $db_user, $db_pass, $dbname);

if ($conn->connect_error){
  die("" . $msqli->connect_error);
} else {
 
  $postData = file_get_contents('php://input');

  
  $data = json_decode($postData, true);

  
  if (!empty($data)) {
 
    $room = $data['room'];
    $id = $data['id'];

    $querycheck = "SELECT * FROM patients WHERE room='$room';";
    $resultcheck = $conn->query($querycheck);

    $querycheckcapacity = "SELECT capacity FROM rooms WHERE room_id='$room';";
    $resultcheckcapacity = $conn->query($querycheckcapacity);

    if ($resultcheckcapacity && $resultcheckcapacity->num_rows > 0) {
      $capacity = $resultcheckcapacity->fetch_assoc()['capacity'];

      if ($resultcheck && $resultcheck->num_rows < $capacity) {
        $query = "UPDATE patients SET room = '$room' WHERE patient_id = '$id';";
        $result = $conn->query($query);

        if ($result === true) {
       
          echo json_encode(array("message" => "patient Room updated"));
        } else {
        
          echo json_encode(array("error" => "Failed to update patient's room"));
        }
      } else {
        echo json_encode(array("message" => "This room is full"));
      }
    } else {
      echo json_encode(array("error" => "Failed to fetch room capacity"));
    }
  } else {
  
    echo json_encode(array("error" => "No data received"));
  }
}
?>
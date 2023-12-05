<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: *");
$host="localhost";
$db_user="root";
$db_pass="";
$dbname="rayan_care_db";
$conn=new mysqli($host,$db_user,$db_pass,$dbname);
if ($conn->connect_error){
  die("".$msqli->connect_error); 
  }
  else{


$postData = file_get_contents('php://input');


$data = json_decode($postData, true);


if (!empty($data)) {
  
  $patient_name = $data['patient_name'];
  $patient_email = $data['patient_email'];
  $patient_password = $data['patient_password'];
  $hashed_password = password_hash($patient_password, PASSWORD_DEFAULT);
  $patient_img = $data['patient_img'];
  $patient_gender = $data['patient_gender'];
  $patient_age = $data['patient_age'];
  $patient_doctor = $data['patient_doctor'];
  $patient_room = $data['patient_room'];
  $patient_current = $data['patient_current'];
  $user_role = $data['user_role'];

  $query1 = "INSERT INTO users (user_email, user_password, user_role) VALUES (?, ?, ?)";
if ($stmt = $conn->prepare($query1)) {
    $stmt->bind_param("sss", $patient_email, $hashed_password, $user_role);
    $stmt->execute();
    $stmt->close();

  
    $queryid = "SELECT user_id FROM users WHERE user_email = ? AND user_role ='patient'";
    if ($stmt = $conn->prepare($queryid)) {
        $stmt->bind_param("s", $patient_email);
        $stmt->execute();
        $stmt->bind_result($user_id);

        if ($stmt->fetch()) {
            
        } else {
          
            echo json_encode(array("error" => "Failed to fetch user ID"));
            exit(); 
        }

        $stmt->close();

        $query2 = "INSERT INTO patients (patient_id, patient_name, patient_img, age, gender, doctor, current_condition, room) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        if ($stmt = $conn->prepare($query2)) {
            $stmt->bind_param("ssssssss", $user_id, $patient_name, $patient_img, $patient_age, $patient_gender, $patient_doctor, $patient_current, $patient_room);
            $stmt->execute();
            $stmt->close();

            echo json_encode(array("message" => "Patient added"));
        } else {
            echo json_encode(array("error" => "Failed to insert patient"));
        }
    } else {
        echo json_encode(array("error" => "Failed to fetch user ID"));
    }
} else {
    echo json_encode(array("error" => "Failed to insert user"));
}
} else {
  
  echo json_encode(array("error" => "No data received"));
}
}

?>
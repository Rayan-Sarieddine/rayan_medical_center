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

  $user_id = $data['user_id'];
  $appointment_date = $data['appointment_date'];
  $query1="SELECT doctor FROM patients WHERE patient_id='$user_id';";
  $result1 = $conn->query($query1);
  $row = $result1->fetch_assoc();
  $doctor_id = $row['doctor'];
  $query = "INSERT INTO appointmants (patient_id, date_of_appointment, doctor_id, status_of_appointment) VALUES ('$user_id', '$appointment_date','$doctor_id','pending');";
  
  
  $result = $conn->query($query);
  if ($result) {
      echo json_encode(array("message" => "appointment added"));
  } else {
    
      echo json_encode(array("message" => "error", "error" => $conn->error));
  }
}
  }

$conn->close();
?>
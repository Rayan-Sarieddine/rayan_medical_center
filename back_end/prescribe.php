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

  $patient_id = $data['patient_id'];
  $medicine = $data['medicine'];
  $details = $data['details'];
  $query = "INSERT INTO medication (patient_id, medicine,prescription_details) VALUES ('$patient_id', '$medicine','$details');";
  
  
  $result = $conn->query($query);
  if ($result) {
      echo json_encode(array("message" => "medicine prescribed"));
  } else {
    
      echo json_encode(array("message" => "somthing went wrong with that prescription, check and try again"));
  }
}
  }

$conn->close();
?>
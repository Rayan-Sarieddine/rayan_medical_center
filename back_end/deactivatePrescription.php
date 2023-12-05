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
  $date_of_prescription = $data['date_of_prescription'];
 
  $query = "UPDATE medication SET active_prescription = 'no' WHERE patient_id='$patient_id' AND medicine='$medicine' AND date_of_prescription='$date_of_prescription';";

        if ($conn->query($query) === TRUE) {
            echo json_encode(array("success" => true, "message" => "Active prescription updated successfully"));
        } else {
            echo json_encode(array("success" => false, "message" => "Failed to update active prescription: " . $conn->error));
        }
    } else {
        echo json_encode(array("success" => false, "message" => "No data received"));
    }
}

$conn->close();
?>
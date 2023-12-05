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
  
  $query = "SELECT patient_condition, date_of_add FROM medical_history WHERE patient_id='$user_id';";
  
 
  $result = $conn->query($query);
  if ($result && $result->num_rows > 0) {
    $conditionData = array();
    while ($row = $result->fetch_assoc()) {
       
        $conditionData[] = $row;
    }
  
  }
  $query2 = "SELECT * from medication WHERE patient_id='$user_id';";
  
 
  $result2 = $conn->query($query2);
  if ($result2 && $result2->num_rows > 0) {
    $medicationData = array();
    while ($row = $result2->fetch_assoc()) {
       
        $medicationData[] = $row;
    }
  
  }




    echo json_encode(array("medication_data" => $medicationData,"condition_data" => $conditionData));

}
  }

$conn->close();
?>
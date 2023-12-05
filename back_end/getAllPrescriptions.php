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
 
  $query = "SELECT * from medication WHERE patient_id='$patient_id';";
  
  
  $result = $conn->query($query);
  if ($result && $result->num_rows > 0) {
    $prescriptions = array();
    while ($row = $result->fetch_assoc()) {
        $prescriptions[] = $row;
    }
    // Construct the response JSON including the fetched prescriptions
    echo json_encode(array("success" => true, "message" => "Fetched prescriptions", "prescriptions" => $prescriptions));
} else {
    // No prescriptions found
    echo json_encode(array("success" => false, "message" => "No prescriptions found"));
}
} else {
// No data received
echo json_encode(array("success" => false, "message" => "No data received"));
}
}
  

$conn->close();
?>
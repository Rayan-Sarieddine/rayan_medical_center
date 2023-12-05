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
  
  $query = "SELECT * FROM patients WHERE doctor='$user_id';";
  
 
  $result = $conn->query($query);

  if ($result && $result->num_rows > 0) {
    $patientsData = array();
    while ($row = $result->fetch_assoc()) {
        
        $patientsData[] = $row;
    }
   
    echo json_encode(array("patients_data" => $patientsData));
} else {
   
    echo json_encode(array("message" => "No patients found"));
}
} 
  }
?>
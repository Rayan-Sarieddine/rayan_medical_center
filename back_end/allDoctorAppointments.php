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
  
  $query = "SELECT * FROM appointmants WHERE doctor_id='$user_id';";
  
  
  $result = $conn->query($query);
  if ($result && $result->num_rows > 0) {
    $appointmentsData = array();
    while ($row = $result->fetch_assoc()) {
        
        $appointmentsData[] = $row;
    }
  
    
    echo json_encode(array("appointments_data" => $appointmentsData));
} else {
   
    echo json_encode(array("message" => "No appointments found"));
}
}
  }

$conn->close();
?>
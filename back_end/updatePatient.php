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

  $param = $data['param'];
  $value = $data['value'];
  $id = $data['id'];
 
  if ($param==="user_email"){
    $query = "UPDATE users SET $param = '$value' WHERE user_id = '$id';";
  
  }
  elseif($param==="user_password"){
    $hashed_value = password_hash($value, PASSWORD_DEFAULT);
    $query = "UPDATE users SET $param = '$hashed_value' WHERE user_id = '$id';";
  }
  elseif ($param==="current_condition"){
    $query1="SELECT current_condition FROM patients WHERE patient_id='$id';";
    $result1 = $conn->query($query1);
    $row = $result1->fetch_assoc();
    $currentCondition = $row['current_condition'];
    $query2 = "INSERT INTO medical_history (patient_id, patient_condition) VALUES ('$id', '$currentCondition');";
    $result2 = $conn->query($query2);

    $query = "UPDATE patients SET $param = '$value' WHERE patient_id = '$id';";
  }
 else{
    $query = "UPDATE patients SET $param = '$value' WHERE patient_id = '$id';";
  }


   $result = $conn->query($query);


  if ($result === true) {
      
      echo json_encode(array("message" => "patient Updated"));
  } else {
    
      echo json_encode(array("error" => "Failed to update patient"));
  }
} else {
 
  echo json_encode(array("error" => "No data received"));
}
}

?>
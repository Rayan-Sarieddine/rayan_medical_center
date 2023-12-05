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
else{
  $query = "UPDATE doctors SET $param = '$value' WHERE doctor_id = '$id';";
}
   $result = $conn->query($query);


  if ($result1 === true) {
    
      echo json_encode(array("message" => "doctor Updated"));
  } else {
   
      echo json_encode(array("error" => "Failed to update doctor"));
  }
} else {
 
  echo json_encode(array("error" => "No data received"));
}
}

?>
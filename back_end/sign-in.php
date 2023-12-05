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
  $selectedRole = $data['type'];
  $email = $data['email'];
  $password = $data['password'];

  $query = "SELECT user_id, user_password FROM users WHERE user_role=? AND user_email=?";
  $stmt = $conn->prepare($query);
  $stmt->bind_param("ss", $selectedRole, $email);
  $stmt->execute();
  $stmt->bind_result($user_id, $hashed_password);
  $stmt->fetch();

  if ($hashed_password && password_verify($password, $hashed_password)) {
      $response = array("message" => "User found", "user_id" => $user_id);
      echo json_encode($response);
  } else {
      $response = array("message" => "No user found with provided credentials", "credentials_used" => array("type" => $selectedRole, "email" => $email, "password" => $password));
      echo json_encode($response);
  }
  $stmt->close();
} else {
  echo json_encode(array("error" => "No data received"));
}
  }

 ?>
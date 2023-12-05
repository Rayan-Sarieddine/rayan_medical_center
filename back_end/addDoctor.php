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
 
  $selectedRole = $data['user_role'];
  $email = $data['user_email'];
  $password = $data['user_password'];
  $hashed_password = password_hash($password, PASSWORD_DEFAULT);
  $name = $data['doctor_name'];
  $speciality = $data['speciality'];

  $query1 = "INSERT INTO users (user_email, user_password,user_role) VALUES ('$email', '$hashed_password','$selectedRole');";
  $result1 = $conn->query($query1);

  $queryid = "SELECT user_id FROM users WHERE user_email = ? AND user_role ='doctor'";
  if ($stmt = $conn->prepare($queryid)) {
   
    
      $stmt->bind_param("s",$email);
      $stmt->execute();
      
     
      $stmt->bind_result($user_id);
      
     
      if ($stmt->fetch()) {
        
          $user_id = $user_id;
      } else {
         
          $user_id = null;
      }
     
      $stmt->close();
  }
  ///////////////////////////////
  $query2 = "INSERT INTO doctors (doctor_name, speciality,doctor_id) VALUES ('$name', '$speciality','$user_id');";
  
   $result2 = $conn->query($query2);

  if ($result1 === true and $result2==true) {
    
      echo json_encode(array("message" => "User added"));
  } else {
   
      echo json_encode(array("error" => "Failed to insert user"));
  }
} else {

  echo json_encode(array("error" => "No data received"));
}
}


?>
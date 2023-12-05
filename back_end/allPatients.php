<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: *");

$host = "localhost";
$db_user = "root";
$db_pass = "";
$dbname = "rayan_care_db";


$conn = new mysqli($host, $db_user, $db_pass, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
   
    $query = "SELECT patients.*, users.user_email FROM patients INNER JOIN users ON patients.patient_id = users.user_id;";
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


$conn->close();
?>
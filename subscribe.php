<?php
 include "db_connect.php";

 $data = json_decode(file_get_contents('php://input'), true);

if($data){

  $email = $data['email'];
  $checkdata = implode(', ',$data['checkdata']);
  $opt = $data['optIn'];

  $stmt = $conn->prepare("INSERT INTO subscribed_emails (email,headshot,update_allow) VALUES (?, ?, ?)");
  
  $stmt->bind_param("ssi", $email,$checkdata,$opt);
  
  if($stmt->execute()){
    echo json_encode(["status"=>"success","message"=>"data inserted successfully"]);
  }else{
    echo json_encode(["status"=>"error","message"=>"data insertion Failed"]);
  }
  
}
?>
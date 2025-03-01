<?php
include "db_connect.php";

if($_SERVER['REQUEST_METHOD']=='POST'){

    function clean_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

 // Sanitize Inputs
 $fname = clean_input($_POST['fname'] ?? '');
 $lname = clean_input($_POST['lname'] ?? '');
 $email = clean_input($_POST['email'] ?? '');
 $phone = clean_input($_POST['phone'] ?? '');
 $comment = clean_input($_POST['comment'] ?? '');

 // Server-side validation
 if (empty($lname)) {
   $lname = 'no name';
   
} 

 if(empty($comment)){
    $comment = 'no comment';
}


if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["success" => false, "message" => "Invalid email format!"]);
    exit;
}


if (!preg_match('/^[0-9]{10,15}$/', $phone)) {
    echo json_encode(["success" => false, "message" => "Invalid phone number!"]);
    exit;
}



$stmt = $conn->prepare("INSERT INTO user_contact (fname,lname,email,phone,comment) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param('sssis',$fname,$lname,$email,$phone,$comment);

if($stmt->execute()){
   echo json_encode(['status'=>'success','message'=>'data inserted successfully']);
}else{
    echo json_encode(['status'=>'error','message'=>'data insertion failed']);
}

}
?>
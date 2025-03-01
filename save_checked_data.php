<?php
 header("Content-Type: application/json");

 // Get raw JSON input
$data = json_decode(file_get_contents("php://input"), true);

if(isset($data['responses'])){
    $filename = 'checked_data.json';


    if (file_exists($filename)) {
        $existingData = json_decode(file_get_contents($filename), true);
    } else {
        $existingData = [];
    }
   
    $existingData[] = $data['responses'];

    if (file_put_contents($filename, json_encode($existingData, JSON_PRETTY_PRINT))) {
        echo json_encode(["success" => true, "message" => "Data saved successfully!"]);
    } else {
        echo json_encode(["success" => false, "message" => "Failed to save data."]);
    }

}else{
    echo json_encode(["success" => false, "message" => "Failed to save data."]);
}
 

?>
<?php
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get data from AJAX request
    $id = $_POST['id'];
    $time = $_POST['time'];

    $jsonData = file_get_contents("shcedual_date.json");
    $dataArray = json_decode($jsonData,true);
    $array = [];
     foreach($dataArray as $item){
          if($item['id'] == $id){
                // echo $item['date'] . $item['day'];
                $array[] = [
                    "id" => $item['id'],
                    "day" => $item['day'],
                    "date" => $item['date'],
                    "month" => $item['month'],
                    "year" => "2025",
                    "time" => $time
                ];
          }
     }

     echo json_encode($array);

}
?>

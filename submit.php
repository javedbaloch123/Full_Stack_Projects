<?php
header("Content-Type: application/json"); // Ensure proper JSON response
error_reporting(E_ALL);
ini_set('display_errors', 0); // Hide warnings from output

include "db_connect.php";
$data = json_decode(file_get_contents('php://input'), true);

$formData = [];

// Check if data is received
if (!empty($data)) {
    foreach ($data as $item) {
        $formData[$item["name"]] = $item["value"];
    }

    // Extracting form data correctly
    $fname = $formData["First name"] ?? null;
    $lname = $formData["Last name"] ?? null;
    $Email = $formData["Email"] ?? null;
    $Phone = $formData["Phone"] ?? null;
    $Street = $formData["Street"] ?? null;
    $State = $formData["State/Province"] ?? null;
    $code = $formData["Zip/Code"] ?? null;
    $city = $formData["City"] ?? null;
    $adress = $formData["Adress Line"] ?? null;
    $country = $formData["Country"] ?? null;

    // Prepare SQL statement
    $stmt = $conn->prepare("INSERT INTO contact_info (`firstname`, `lastname`, `email`, `phone`, `address`, `city`, `state`, `country`, `street`, `zipcode`)VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

    if ($stmt) {
        // Bind parameters
        $stmt->bind_param('sssisssssi', $fname, $lname, $Email, $Phone, $adress, $city, $State, $country, $Street, $code);

        // Execute the statement
        if ($stmt->execute()) {
            echo json_encode(["status" => "success", "message" => "Data inserted successfully", "Email"=>$Email,"Name"=>$fname]);
            exit;
        } else {
            echo json_encode(["status" => "error", "message" => "Database insertion failed"]);
        }

        $stmt->close();
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to prepare statement"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "No data received!"]);
}

$conn->close(); // Close database connection

exit;
?>
<?php
// Allow requests from any origin (you can specify your local dev environment if needed)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Check for the OPTIONS request to handle preflight requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Set the target directory inside public_html
$target_dir = "/home/kxx9wr38stkf/public_html/RequestQuote/";

// Ensure the target directory exists
if (!file_exists($target_dir)) {
    mkdir($target_dir, 0777, true);
}

// Set the target file path
$target_file = $target_dir . basename($_FILES["file"]["name"]);

// Check if the file was uploaded
if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
    // Return the file URL to be used in your React app
    $fileUrl = "https://mseprinting.com/RequestQuote/" . basename($_FILES["file"]["name"]);
    echo json_encode(["fileUrl" => $fileUrl]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "There was an error uploading your file."]);
}
?>

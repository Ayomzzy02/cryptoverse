<?php
// Set the endpoint URL you want to ping
$pingUrl = 'https://cryptoverse-bo5e.onrender.com';

// Set a path to log errors
$logFile = __DIR__ . '/ping-errors.log';

// Send a GET request using cURL
$ch = curl_init($pingUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 10); // timeout in seconds
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true); // follow redirects if any

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$error = curl_error($ch);
curl_close($ch);

// Check HTTP response code
if ($httpCode >= 500 || $httpCode == 0) {
    $timestamp = date('Y-m-d H:i:s');
    $logMessage = "[$timestamp] ERROR - HTTP Code: $httpCode, cURL Error: $error\n";
    file_put_contents($logFile, $logMessage, FILE_APPEND);
}

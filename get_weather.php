<?php
if ($_GET['location']) {
  $location = $_GET['location'];
  $apiKey = 'YOUR_API_KEY'; // Replace with your actual API key

  // Make an API request using cURL
  $url = "https://api.openweathermap.org/data/2.5/weather?q=" . urlencode($location) . "&units=metric&appid=" . $apiKey;
  $ch = curl_init($url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  $response = curl_exec($ch);
  curl_close($ch);

  echo $response;
}
?>

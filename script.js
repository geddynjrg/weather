document.addEventListener('DOMContentLoaded', function() {
  const getWeatherBtn = document.getElementById('get-weather-btn');
  getWeatherBtn.addEventListener('click', getWeather);

  function getWeather() {
    const locationInput = document.getElementById('location-input');
    const location = locationInput.value.trim();
    if (location === '') {
      alert('Please enter a location');
      return;
    }

    const request = new XMLHttpRequest();
    request.open('GET', 'get_weather.php?location=' + encodeURIComponent(location), true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        const response = JSON.parse(request.responseText);
        displayWeather(response);
      } else {
        alert('Error: ' + request.statusText);
      }
    };

    request.onerror = function() {
      alert('Request failed');
    };

    request.send();
  }

  function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = '';

    if (data.error) {
      weatherInfo.textContent = 'Error: ' + data.error;
      return;
    }

    const temperature = data.main.temp;
    const weatherCondition = data.weather[0].description;

    const weatherData = document.createElement('p');
    weatherData.innerHTML = `Temperature: ${temperature}&deg;C<br>Weather: ${weatherCondition}`;
    weatherInfo.appendChild(weatherData);
  }
});

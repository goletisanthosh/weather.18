function getWeather() {
    const locationInput = document.getElementById("locationInput");
    const weatherData = document.getElementById("weatherData");

    const location = locationInput.value;
    const apiKey = '40ae4d884784dfd50b3cd40b572d4f65';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const temperature = (data.main.temp - 273.15).toFixed(2); // Convert from Kelvin to Celsius
            const conditions = data.weather[0].description;
            const windSpeed = data.wind.speed;

            const weatherHTML = `
                <h2>Weather in ${location}</h2>
                <p>Temperature: ${temperature}°C</p>
                <p>Conditions: ${conditions}</p>
                <p>Wind Speed: ${windSpeed} m/s</p>
            `;

            weatherData.innerHTML = weatherHTML;
        })
        .catch(error => {
            weatherData.innerHTML = "Error fetching weather data.";
        });
}

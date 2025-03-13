// weather-ui.js

// Function to display the weather data in cards
export function displayWeatherData(data) {
    const weatherContainer = document.getElementById('weather-container');
    weatherContainer.innerHTML = `
        <div class="weather-card">
            <h3>${data.name}, ${data.sys.country}</h3>
            <p>${data.weather[0].description}</p>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        </div>
    `;
}

// Function to show loading state
export function showLoading() {
    const weatherContainer = document.getElementById('weather-container');
    weatherContainer.innerHTML = '<p>Loading...</p>';
}

// Function to show error message
export function showError(message) {
    const weatherContainer = document.getElementById('weather-container');
    weatherContainer.innerHTML = `<p style="color: red;">Error: ${message}</p>`;
}

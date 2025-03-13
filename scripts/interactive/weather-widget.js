// weather-widget.js
import { displayWeatherData, showError, showLoading } from './weather-ui.js';

// Your actual OpenWeather API key
const apiKey = '5912793f32c8981d4528b6fd3c30d1e3';  // Use your API key here
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Function to fetch weather data
export async function getWeatherData(city) {
    try {
        // Check if the data is available in localStorage
        const cachedData = localStorage.getItem(city);
        if (cachedData) {
            return JSON.parse(cachedData); // Return cached data if available
        }

        showLoading();

        // Fetch new data from OpenWeather API
        const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
        
        if (!response.ok) {
            throw new Error('City not found');
        }

        const weatherData = await response.json();

        // Save the data to localStorage for caching
        localStorage.setItem(city, JSON.stringify(weatherData));

        // Display the weather data
        displayWeatherData(weatherData);
        return weatherData;
    } catch (error) {
        showError(error.message);
    }
}

// Function to handle search for a city
export function searchCity(event) {
    event.preventDefault(); // Prevent page refresh on form submission
    const city = event.target.city.value.trim();
    if (city) {
        getWeatherData(city); // Fetch and display weather data
        event.target.reset(); // Clear the input field after search
    }
}

// Event listener for handling form submission
document.getElementById('weather-form').addEventListener('submit', searchCity);

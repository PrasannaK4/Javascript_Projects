const apiKey = "cb1541793d2e8fe4de1c4805d8ae1484";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

async function checkWeather(cityName) {
    try {
        const response = await fetch(`${apiUrl}&q=${cityName}&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        // Handle specific errors, including invalid city name
        if (error.message) {
            // Likely invalid city name based on error message and status
            displayInvalidCityMessage();
        } else {
            // Handle other errors (e.g., network issues)
            displayGenericErrorMessage();
        }
    }
}

function displayWeatherData(data) {
    const tempElement = document.querySelector(".temp");
    const cityElement = document.querySelector(".city");
    const humidityElement = document.querySelector(".humidity");
    const windElement = document.querySelector(".wind");

    tempElement.innerHTML = `${data.main.temp}°C`;
    cityElement.innerHTML = data.name;
    humidityElement.innerHTML = `${data.main.humidity}%`;
    windElement.innerHTML = `${data.wind.speed} Km/h`;
}

function displayInvalidCityMessage() {
    // Create an element (e.g., a paragraph with appropriate class)
    const invalidCityMessage = document.createElement('p');
    invalidCityMessage.classList.add('invalid-city-message');
    invalidCityMessage.textContent = "Invalid city name entered. Please try again.";

    // Insert the message element into the DOM (e.g., near the search button)
    const searchArea = document.querySelector("#search"); // Adjust selector if needed
    searchArea.appendChild(invalidCityMessage);

    // Optionally: clear weather data display
    document.querySelector(".temp").innerHTML = ""; 
    document.querySelector(".city").innerHTML = ""; 
    document.querySelector(".humidity").innerHTML = ""; 
    document.querySelector(".wind").innerHTML = ""; 
}

function displayGenericErrorMessage() {
    // Create an element (e.g., a paragraph with appropriate class)
    const genericErrorMessage = document.createElement('p');
    genericErrorMessage.classList.add('generic-error-message');
    genericErrorMessage.textContent = "An error occurred while fetching weather data. Please try again later.";

    // Insert the message element into the DOM (e.g., near the search button)
    const searchArea = document.querySelector("#search"); // Adjust selector if needed
    searchArea.appendChild(genericErrorMessage);
}


const searchButton = document.querySelector("#search");
searchButton.addEventListener('click', () => {
    const cityName = document.querySelector("#cityname").value;
    checkWeather(cityName);
});
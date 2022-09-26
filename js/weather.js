async function getWeather() {
    const city = document.querySelector('.city');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=8b14d11c953b27b7ea72cec35bf69fd6&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    const weatherIcon = document.querySelector('.weather-icon');
    const temperature = document.querySelector('.temperature');
    const weatherDescription = document.querySelector('.weather-description');
    const wind = document.querySelector('.wind');
    const humidity = document.querySelector('.humidity');
    const errorCity = document.querySelector('.weather-error');

    if (!data.name) {
        errorCity.textContent = `Error! city is not found!`;
        city.placeholder = '[Enter city]';
        temperature.textContent = '';
        weatherDescription.textContent = '';
        wind.textContent = '';
        humidity.textContent = '';
        weatherIcon.className = 'weather-icon';

    } else {
        errorCity.textContent = '';
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${Math.trunc(data.main.temp)}°C`;
        weatherDescription.textContent = data.weather[0].description;
        wind.textContent = `Wind speed: ${Math.trunc(data.wind.speed)} m/s`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
    }
}
getWeather()

const city = document.querySelector('.city');
city.addEventListener('change', getWeather)

function setLocalStorage() {
    localStorage.setItem('city', city.value);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
    if (localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
    }
    getWeather();
}
window.addEventListener('load', getLocalStorage)

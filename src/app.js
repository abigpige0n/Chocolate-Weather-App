function displayTemperature(response) {
    let descriptionElement = document.querySelector("#description");
    descriptionElement.innerHTML = response.data.weather[0].description;
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.name;
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = response.data.main.humidity;
    let windElement = document.querySelector("#wind");
    windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "e97a29dafab1111956594c069c61f40c"
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=${apiKey}`

axios.get(apiUrl).then(displayTemperature);

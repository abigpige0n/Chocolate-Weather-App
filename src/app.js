function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    let days =[
        "Sunday", 
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday", 
        "Friday", 
        "Saturday"];
    let day = days[date.getDay()];
  
    return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
    let descriptionElement = document.querySelector("#description");
    let cityElement = document.querySelector("#city");
    let temperatureElement = document.querySelector("#temperature");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let dateElement = document.querySelector("#date");
    let iconElement = document.querySelector("#icon");
   

    descriptionElement.innerHTML = response.data.weather[0].description;
    cityElement.innerHTML = response.data.name;
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round(response.data.wind.speed);
    dateElement.innerHTML = formatDate(response.data.dt * 1000);
    iconElement.setAttribute(
        "src",
        `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    iconElement.setAttribute(
        "alt", response.data.weather[0].description);
}


function search(city) {
    let apiKey = "e97a29dafab1111956594c069c61f40c"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
    event.preventDefault();
    let cityInputElement = document.querySelector("#city-input");
    search(cityInputElement.value);
    console.log(cityInputElement.value);
}

function displayFahrenheitTemperature(event) {
    event.preventDefault();
    let fahrenheitTemperature = (28 * 9 / 5) + 32;
    alert(fahrenheitTemperature);
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

let celsiusTemperature = null;

let form=document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

search("Toronto")
      let currentTime = new Date();
      let date = currentTime.getDate();
      let hours = currentTime.getHours();
      if (hours <10){
         hours= `0${hours}`;  
      }
      let minutes = currentTime.getMinutes();
      if (minutes <10){
         minutes= `0${minutes}`;  
      }
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      let day = days[currentTime.getDay()]; 
      let week =document.querySelector("#day-of-week");
      week.innerHTML=`${day}`;
      let time =document.querySelector("#hours-minute");
      time.innerHTML=`${hours}:${minutes}`;



      // SEARCH ENGINE
      function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity-data").innerHTML = response.data.main.humidity;
  document.querySelector("#wind-data").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#daily-description").innerHTML =
    response.data.weather[0].main;
}

function searchCity(city) {
  let apiKey = "bf038e802ff968ae367d4b3973b5ce64";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#enter-city").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "bf038e802ff968ae367d4b3973b5ce64";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${
    position.coords.latitude
  }&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}


function fahrenheit(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = 30;
}

function celcius(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = 25;

}
let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("London");





  



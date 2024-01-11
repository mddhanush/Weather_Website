const apiKey = "78a6245c0e5ec547a7220a1b57b4c06e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".speed").innerHTML = data.wind.speed + " km / hr";

        if (data.weather[0].main == 'Clouds') {
            weatherIcon.src = "icons/cloudy.svg"
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "icons/day.svg"
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "icons/rainy-6.svg"
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "icons/snowy-5.svg"
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "icons/rainy-4.svg"
        }
        else if (data.weather[0].main == "Smoke") {
            weatherIcon.src = "icons/Weather-smoke.svg"
        }

        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none";
    }

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);

})
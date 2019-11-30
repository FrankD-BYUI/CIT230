/********
 * This code uses the OpenWeatherMap API to pull 
 * real time weather data for use on the town pages
 ********/
var townID = 0
if (document.getElementById('town-name').textContent.includes("Preston")) {
  townID = 5604473
} else if (document.getElementById('town-name').textContent.includes("Soda Springs")) {
  townID = 5607916
} else if (document.getElementById('town-name').textContent.includes("Fish Haven")) {
  townID = 5585010
}

const apiURLCurrent = 'https://api.openweathermap.org/data/2.5/weather?id=' + townID + '&units=imperial&APPID=c03799aebfe07c839f8755c32064fd53'
fetch(apiURLCurrent)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    document.getElementById('current-condition').textContent = jsObject.weather[0].description;
    document.getElementById('high-temp').textContent = jsObject.main.temp_max;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('wind-speed').textContent = jsObject.wind.speed;

    var temp = jsObject.main.temp;
    var windSpeed = jsObject.wind.speed;
    var windChill = 0

    if (temp <= 50 && windSpeed >= 3) {
      windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16));
      document.getElementById('wind-chill').textContent = Math.round(windChill);
    }
  });

/********
 * This code uses the OpenWeatherMap API to pull 
 * weather forcast data for use on the town pages
 ********/
const apiURLForecast = 'https://api.openweathermap.org/data/2.5/forecast?id=' + townID + '&units=imperial&APPID=c03799aebfe07c839f8755c32064fd53'
fetch(apiURLForecast)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    //const weatherList = jsonObject.list;

    let day = 1;

    for (let i = 0; i < jsObject.list.length; i++) {
      if (jsObject.list[i].dt_txt.includes("18:00:00")) {
        //Set the day
        let dayNames = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
        let date = new Date(jsObject.list[i].dt_txt);
        document.getElementById('day' + day + '-day').textContent = dayNames[date.getDay()];

        //set the icon
        let iconSrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
        let iconAlt = jsObject.list[i].weather[0].description;
        document.getElementById('day' + day + '-icon').setAttribute('src', iconSrc);
        document.getElementById('day' + day + '-icon').setAttribute('alt', iconAlt);


        //set the temp
        document.getElementById('day' + day + '-temp').textContent = jsObject.list[i].main.temp.toFixed(0);


        day++;
      }
    }
  });
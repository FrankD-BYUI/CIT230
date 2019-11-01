/********
 * This chunk calculates windchill
 ********/
var temp = parseFloat(document.getElementById("high-temp").textContent);
var windSpeed = parseFloat(document.getElementById('wind-speed').textContent);
var windChill = "N/A"

if (temp <= 50 && windSpeed >= 3) {
  windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16));
  document.getElementById('wind-chill').textContent = Math.round(windChill);
}
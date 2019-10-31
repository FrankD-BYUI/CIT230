/********
 * This chunk of code sets the current year for the copyright date in the footer
 ********/
let now = new Date();
let currentYear = now.getFullYear();
document.getElementById('currentYear').innerHTML = currentYear;


/********
 * This chunk of code sets the last updated time stamp in the footer
 ********/
let d = new Date(document.lastModified);

let sec = '00' + d.getSeconds();
let min = '00' + d.getMinutes();

let lastUpdate = (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear() + ' ' + d.getHours() + ':' + min.substr(min.length - 2) + ':' + sec.substr(sec.length - 2);
document.getElementById('lastUpdate').innerHTML = lastUpdate;

/********
 * This chunk is to set the current date in the footer
 ********/
let dayNames = [
  "Sunday", "Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday"
];

let monthNames = [
  "January", "February", "March", "April", "May",
  "June", "July", "August", "September", "October",
  "November", "December"
];

let currentDay = dayNames[now.getDay()];
let currentDate = now.getDate();
let currentMonth = monthNames[now.getMonth()];

let fullCurrentDate = currentDay + ", " + currentDate + " " + currentMonth + " " + currentYear;

document.getElementById('currentDate').innerHTML = fullCurrentDate;

/********
 * This chunk toggles the pancake notice on Fridays
 ********/
if (currentDay == "Friday") {
  document.getElementById("pancakes").style.display = "block"
}

/********
 * This function opens and closes the menu in mobile viewport
 ********/
function toggleMenu() {
  document.getElementById("nav-menu").classList.toggle("show-menu");
}

/********
 * This chunk calculates windchill
 ********/
var temp = parseFloat(document.getElementById("high-temp").textContent);
var windSpeed = parseFloat(document.getElementById('wind-speed').textContent);
var windChill

if (temp <= 50 && windSpeed >= 3) {
  windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16));
  document.getElementById('wind-chill').textContent = Math.round(windChill);
} else {
  document.getElementById('wind-chill').textContent = "N/A";
}
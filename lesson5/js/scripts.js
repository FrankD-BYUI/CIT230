let now = new Date();
let currentYear = now.getFullYear();
document.getElementById('currentYear').innerHTML = currentYear;

let d = new Date(document.lastModified);

let sec = '00' + d.getSeconds();
let min = '00' + d.getMinutes();

let lastUpdate = (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear() + ' ' + d.getHours() + ':' + min.substr(min.length - 2) + ':' + sec.substr(sec.length - 2);
document.getElementById('lastUpdate').innerHTML = lastUpdate;

function toggleMenu() {
  document.getElementById("nav-menu").classList.toggle("show-menu")
}
/********
 * This function opens and closes the menu in mobile viewport
 ********/
function toggleMenu() {
  document.getElementById("nav-menu").classList.toggle("show-menu");
}

/********
 * This code sets the current year for the copyright date in the footer
 ********/
let now = new Date();
let currentYear = now.getFullYear();
document.getElementById('currentYear').innerHTML = currentYear;
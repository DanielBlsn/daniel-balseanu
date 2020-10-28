// Get the container element
var navContainer = document.getElementById("custom-navbar");

// Get all buttons with class="btn" inside the container
var navItems = navContainer.getElementsByClassName("navbar-item");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("custom-navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;
// Add the sticky class to the navbar when you reach its scroll position. Add pre-sticky otherwise to keep position absolute.
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.className = "sticky";
  } else {
    navbar.className = "pre-sticky";
  }
} 
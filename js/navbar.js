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
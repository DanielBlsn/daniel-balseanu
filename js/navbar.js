// Get the container element
var navContainer = document.getElementById("custom-navbar");

// Get all buttons with class="btn" inside the container
var navItems = navContainer.getElementsByClassName("navbar-item");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("custom-navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

function myFunction() {
  // Add the sticky class to the navbar when you reach its scroll position.
  if (window.pageYOffset >= sticky) {
    navbar.className = "sticky";
  } else {
    // Add pre-sticky otherwise to keep position absolute.
    navbar.className = "pre-sticky";
  }
}

// Make the navigation items visible when on phone when clicking on main button
function openNav() {
  // When all the menu buttons are visible
  // Close the navbar when pressing the main menu button
  if (document.getElementById("menu-item-1").style.visibility == "visible") {
    closeNav()
  } else {
    document.getElementById("menu-item-1").style.visibility = "visible";
    document.getElementById("menu-item-2").style.visibility = "visible";
    document.getElementById("menu-item-3").style.visibility = "visible";
    document.getElementById("menu-item-4").style.visibility = "visible";
    document.getElementById("custom-navbar").style.height = "auto";
  }
}

// Close the navbar by making the elments hidden and shrinking the button
function closeNav() {
  if (window.innerWidth < 1120) {
    document.getElementById("menu-item-1").style.visibility = "hidden";
    document.getElementById("menu-item-2").style.visibility = "hidden";
    document.getElementById("menu-item-3").style.visibility = "hidden";
    document.getElementById("menu-item-4").style.visibility = "hidden";
    document.getElementById("custom-navbar").style.height = document.getElementById("menu-item-1").style.height;

  }
}

// When going from small screen navbar to large screen navbar the visibility will be set to hidden
// Make all navbar elements visible when screen width is bigger than 1120
window.addEventListener('resize', makeVisibleNavbar);
function makeVisibleNavbar() {
  if (window.innerWidth > 1120) {
    openNav();
  }
  else {
    closeNav();
  }
}
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
  if (window.innerWidth < 1120) {
    // Always add sticky when the screen is small so navbar will be on top
    navbar.className = "sticky";
    // Add the sticky class to the navbar when you reach its scroll position.
  } else if (window.pageYOffset >= sticky) {
    navbar.className = "sticky";
  } else {
    // Add pre-sticky otherwise to keep position absolute.
    navbar.className = "pre-sticky";
  }
}

function openNav() {
  document.getElementById("menu-item-1").style.visibility = "visible";
  document.getElementById("menu-item-2").style.visibility = "visible";
  document.getElementById("menu-item-3").style.visibility = "visible";
  document.getElementById("menu-item-4").style.visibility = "visible";
  document.getElementById("custom-navbar").style.height = "auto";
}

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
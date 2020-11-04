// When the user scrolls the page, execute the sticky navbar function 
window.onscroll = function () { stickyNavbar(); highlightNavbarElement(); };

// Get the navbar
var navbar = document.getElementById("custom-navbar");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;

function stickyNavbar() {

  // Add the sticky class to the navbar when you reach its scroll position.
  if (window.pageYOffset >= sticky) {
    navbar.className = "sticky";
  } else if (window.innerWidth >= 1120){
    // Add pre-sticky otherwise to keep position absolute.
    navbar.className = "pre-sticky";
  }
}

// Select all navbar menu items whose start (^) id string is below
// will be used in 2 separate functions
let mainNavIds = document.querySelectorAll('[id^="menu-item-"]');

function highlightNavbarElement() {

  let fromTop = window.scrollY;

  mainNavIds.forEach((navbarElementId, i) => {
    let section = document.querySelector(navbarElementId.hash);
    var currentActive = document.getElementsByClassName("active")[0];
    section.offsetTop + section.offsetHeight > fromTop;
    if (section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop) {
      currentActive.classList.remove("active");
      navbarElementId.classList.add("active");
    }
  });
}

// Make the navigation items visible when on phone when clicking on main button
function openNav() {
  // When all the menu buttons are visible
  // Close the navbar when pressing the main menu button
  if (document.getElementById("menu-item-1").style.visibility == "visible") {
    closeNav()
  } else {
    mainNavIds.forEach((navbarId) => {
      navbarId.style.visibility = "visible";
    });
    document.getElementById("custom-navbar").style.height = "auto";
  }
}

// Close the navbar by making the elments hidden and shrinking the button
function closeNav() {
  if (window.innerWidth <= 480) {
    mainNavIds.forEach((navbarElementId) => {
      navbarElementId.style.visibility = "hidden";
    });
    // Make the whote navbar dropdown the height of 1 element
    // Otherwise it retains the height of 5 items stacked
    document.getElementById("custom-navbar").style.height = document.getElementById("menu-item-1").style.height;

  }
}

// When going from small screen navbar to large screen navbar the visibility will be set to hidden
// Make all navbar elements visible when screen width is bigger than 480
// Also add sticky navbar for when the resize is done via maximize/minimize buttons
window.addEventListener('resize', makeVisibleNavbar, stickyNavbar)
function makeVisibleNavbar() {
  if (window.innerWidth > 480) {
    openNav();
  }
  else {
    closeNav();
  }
}
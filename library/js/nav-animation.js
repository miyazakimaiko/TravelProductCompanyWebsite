let NavIsOpen = false;

function OpenNavigation(n) {
  let i;
  if (NavIsOpen == false) {
    NavIsOpen = true

    // Show background
    let navScreen = document.getElementById("nav-screen");
    navScreen.style.display = "block";

    // Change custom cursor's colour
    cursor.classList.add("whiten");

    // Slide in menu links
    setTimeout(SlideInMenuLink, 200)

  } else if (NavIsOpen == true) {
    NavIsOpen = false

    // Hide menu links first
    SlideOutMenuLink()

    // Then hide background
    setTimeout(hideBackground, 800)

    // Change the colour of custom cursor
    cursor.classList.remove("whiten");
  }
}

function hideBackground(){
  let navScreen = document.getElementById("nav-screen");
  navScreen.style.display = "none";
}

function SlideInMenuLink() {
  let elems = document.querySelectorAll(".menu-link-text");

  elems.forEach(el => {
    el.classList.add("is-animated");
  })
}

function SlideOutMenuLink() {
  let elems = document.querySelectorAll(".menu-link-text");

  elems.forEach(el => {
    el.classList.remove("is-animated");
  })
}
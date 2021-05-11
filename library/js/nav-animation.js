var NavIsOpen = false;

function SlideIn(n) {
  var i;
  if (NavIsOpen == false) {
    showBackground()
    for (i = n; i < 6; i++) {
      SlideInMenuLink(i)
    }
    NavIsOpen = true
  } else if (NavIsOpen == true) {
    for (i = n; i < 6; i++) {
      SlideOutMenuLink(i)
    }
    hideBackground()
    NavIsOpen = false
  }
}

function showBackground(){
  var navScreen = document.getElementById("nav-screen");
  navScreen.style.display = "block";
  var elem = document.getElementById("nav-screen-background");
  elem.classList.toggle("background-fade");
}

function hideBackground(){
  var elem = document.getElementById("nav-screen-background");
  elem.classList.toggle("background-fade");
  setTimeout(displayNone, 1000)

  function displayNone() {
    var navScreen = document.getElementById("nav-screen");
    navScreen.style.display = "none";
  }
}

function SlideInMenuLink(n) {
  var elem = document.getElementsByClassName("menu-link")[n];
  var pos = -1 * window.innerWidth - n * 100;
  var id = setInterval(frame, 3);

  function frame() {
    if (pos >= -10) {
      clearInterval(id);
      elem.style.right = 0 + 'px';
    } else {
      pos += 10;
      elem.style.right = pos + 'px';
    }
  }
}

function SlideOutMenuLink(n) {
  var elems = document.getElementsByClassName("menu-link")[n];
  var poss = 0;
  var ids = setInterval(frames, 3);

  function frames() {
    if (poss <= -1 * window.innerWidth) {
      clearInterval(ids);
      elems.style.right = -1 * window.innerWidth + 'px';
    } else {
      poss += -7 - n * 2;
      elems.style.right = poss + 'px';
    }
  }
}
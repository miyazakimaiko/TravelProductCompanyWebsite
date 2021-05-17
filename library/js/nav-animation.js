let NavIsOpen = false;

function SlideIn(n) {
  let i;
  if (NavIsOpen == false) {
    showBackground()
    cursor.classList.add("whiten");
    for (i = n; i < 6; i++) {
      SlideInMenuLink(i)
    }
    NavIsOpen = true
  } else if (NavIsOpen == true) {
    for (i = n; i < 6; i++) {
      SlideOutMenuLink(i)
    }
    hideBackground()
    cursor.classList.remove("whiten");
    NavIsOpen = false
  }
}

function showBackground(){
  const navScreen = document.getElementById("nav-screen");
  navScreen.style.display = "block";
}

function hideBackground(){
  setTimeout(displayNone, 1000)

  function displayNone() {
    const navScreen = document.getElementById("nav-screen");
    navScreen.style.display = "none";
  }
}

function SlideInMenuLink(n) {
  let elem = document.getElementsByClassName("menu-link")[n];
  let pos = -1 * window.innerWidth - n * 100;
  let id = setInterval(frame, 2);

  function frame() {
    if (pos >= -10) {
      clearInterval(id);
      elem.style.right = 0 + 'px';
    } else {
      pos += 15;
      elem.style.right = pos + 'px';
    }
  }
}

function SlideOutMenuLink(n) {
  let elems = document.getElementsByClassName("menu-link")[n];
  let poss = 0;
  let ids = setInterval(frames, 2);

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
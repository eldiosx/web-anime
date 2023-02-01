//Loader
window.onload = function () {
  $('#loader').fadeOut();
}
//Header-menu
function mainmenu() {
  var x = document.getElementById("main-nav");
  if (x.className === "main-nav") {
    x.className += " responsive";
  } else {
    x.className = "main-nav";
  }
}

//Sub-Filter

function w3AddClass(element, name) {
  var i, a1, a2;
  a1 = element.className.split(" ");
  a2 = name.split(" ");
  for (i = 0; i < a2.length; i++) {
    if (a1.indexOf(a2[i]) == -1) { element.className += " " + a2[i]; }
  }
}

function w3RemoveClass(element, name) {
  var i, a1, a2;
  a1 = element.className.split(" ");
  a2 = name.split(" ");
  for (i = 0; i < a2.length; i++) {
    while (a1.indexOf(a2[i]) > -1) {
      a1.splice(a1.indexOf(a2[i]), 1);
    }
  }
  element.className = a1.join(" ");
}

//Theme

function themeToggle() {
  let element = document.body;
  element.classList.toggle("kawai");

  let theme = localStorage.getItem("theme");
  if (theme && theme === "kawai") {
    localStorage.setItem("theme", "");
  } else {
    localStorage.setItem("theme", "kawai");
  }

  document.getElementById("theme").textContent = localStorage.getItem("theme");
}
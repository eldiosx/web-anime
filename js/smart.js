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
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
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
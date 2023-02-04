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

//Theme

function themeToggle() {
  let element = document.body;
  element.classList.toggle("kawai");

  let theme = localStorage.getanime("theme");
  if (theme && theme === "kawai") {
    localStorage.setanime("theme", "");
  } else {
    localStorage.setanime("theme", "kawai");
  }

  document.getElementById("theme").textContent = localStorage.getanime("theme");
}

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain attribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};
//Smart-Animes (experimental)
function aot() {
  $("#include-body").load("html/animes/AttackOnTitan.html");
};
function dn() {
  $("#include-body").load("html/animes/DeathNote.html");
};
function dcb() {
  $("#include-body").load("html/animes/DevilmanCrybaby.html");
};
function ks() {
  $("#include-body").load("html/animes/KaguyaSama.html");
};
function lain() {
  $("#include-body").load("html/animes/Lain.html");
};
function monster() {
  $("#include-body").load("html/animes/Monster.html");
};
function opm() {
  $("#include-body").load("html/animes/OnePunchMan.html");
};
function parasyte() {
  $("#include-body").load("html/animes/Parasyte.html");
};
function pp() {
  $("#include-body").load("html/animes/PsychoPass.html");
};
function tg() {
  $("#include-body").load("html/animes/TokyoGhoul.html");
};
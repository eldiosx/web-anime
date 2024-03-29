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

  let theme = localStorage.getItem("theme");
  if (theme && theme === "kawai") {
    localStorage.setItem("theme", "");
  } else {
    localStorage.setItem("theme", "kawai");
  }

  document.getElementById("theme").textContent = localStorage.getItem("theme");
}

//Load Default Page
$(function () {
  $("#include-content").load("html/categories.html");
});

//Smart-animes (experimental)
function aot() {
  $("#include-content").load("html/xhtml/AttackOnTitan.xhtml");
};
function dn() {
  $("#include-content").load("html/xhtml/DeathNote.xhtml");
};
function gs() {
  $("#include-content").load("html/xhtml/GhostInTheShell.xhtml");
};
function inuyasha() {
  $("#include-content").load("html/xhtml/Inuyasha.xhtml");
};
function dcb() {
  $("#include-content").load("html/xhtml/DevilmanCrybaby.xhtml");
};
function ks() {
  $("#include-content").load("html/xhtml/KaguyaSama.xhtml");
};
function lain() {
  $("#include-content").load("html/xhtml/Lain.xhtml");
};
function monster() {
  $("#include-content").load("html/xhtml/Monster.xhtml");
};
function opm() {
  $("#include-content").load("html/xhtml/OnePunchMan.xhtml");
};
function parasyte() {
  $("#include-content").load("html/xhtml/Parasyte.xhtml");
};
function pp() {
  $("#include-content").load("html/xhtml/PsychoPass.xhtml");
};
function tg() {
  $("#include-content").load("html/xhtml/TokyoGhoul.xhtml");
};

//Loader
window.addEventListener('load', function () {
  var loader = document.getElementById('loader');
  loader.style.display = 'none';
});

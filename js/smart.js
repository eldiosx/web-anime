window.onload = function(){
    $('#loader').fadeOut();
}

function mainmenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "main-nav") {
    x.className += " responsive";
  } else {
    x.className = "main-nav";
  }
}
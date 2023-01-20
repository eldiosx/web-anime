window.onload = function(){
    $('#loader').fadeOut();
}

function myFunction() {
  var x = document.getElementById("main-nav");
  if (x.className === "main-nav") {
    x.className += " responsive";
  } else {
    x.className = "main-nav";
  }
}
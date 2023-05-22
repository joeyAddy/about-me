function myFunction() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementsByClassName("loader").style.display = "none";
  document.getElementById("main").style.display = "block";
}

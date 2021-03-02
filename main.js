function change() {
  var one = document.getElementById("second");
  var two = document.getElementById("first");

  if (one.style.display == "none") {
    two.style.display = "none";
    one.style.display = "block";
  } else {
    one.style.display = "none";
    two.style.display = "block";
  }
}

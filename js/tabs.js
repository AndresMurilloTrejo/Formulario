// Cambiar entre formularios
function tabs(evt, opcion) {
  var tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (let c = 0; c < tabcontent.length; c++)
    tabcontent[c].style.display = "none";

  tablinks = document.getElementsByClassName("tablinks");
  for (let c = 0; c < tablinks.length; c++)
    tablinks[c].className.replace(" active", "");

  document.getElementById(opcion).style.display = "block";
  evt.currentTarget.className += " active";
}
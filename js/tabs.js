// Cambiar entre formularios
function tabs(evt, opcion) {
  var tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++)
    tabcontent[i].style.display = "none";

  tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tablinks.length; i++)
    tablinks[i].className.replace(" active", "");

  document.getElementById(opcion).style.display = "block";
  evt.currentTarget.className += " active";
}

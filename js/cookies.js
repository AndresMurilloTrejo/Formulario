// Creación de la cookie
function crearCookie(nombre, valor, expira) {
  var fecha = new Date();
  fecha.setTime(fecha.getTime() + expira * 24 * 60 * 60 * 1000);

  var expire = "expires=" + fecha.toUTCString();

  document.cookie = nombre + "=" + valor + ";" + expire + ";path=/";
  console.log(document.cookie);
}
// Lectura de cookie
function leerCookie(nombre) {
  var keyValue = document.cookie.match("(^|;) ?" + nombre + "=([^;]*)(;|$)");
  if (keyValue) {
    return keyValue[2];
  } else {
    return null;
  }
}
// Borrar la cookie
function borrarCookie(nombre) {
  document.cookie = nombre + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/";
}

// Limpiar las cookies al salir de la sesion
function salir() {
  borrarCookie(document.getElementById("email").value);
  borrarCookie(document.getElementById("nUsuario").value);
  pInicio();
}
// Comprobar si existe cookie, en caso afirmativo, dejar sesion iniciada
function pInicio() {
  document.getElementById("tabs").style.display = "inline";
  let forms = document.getElementsByTagName("forms");
  for (let i = 0; i < forms.length; i++) forms[i].style.display = "inline";
  document.getElementById("validarRegistro").style.display = "none";

  let inputs = document.getElementsByTagName("input");
  for (let i = 0; i < inputs.length; i++) inputs[i].value = "";
}

function registrado(usuario) {
  borrarError();
  document.getElementById("tabs").style.display = "none";
  let forms = document.getElementsByTagName("forms");
  for (let i = 0; i < forms.length; c++) forms[i].style.display = "none";
  document.getElementById("validarRegistro").style.display = "inline";
  if (document.cookie) {
    document.getElementById("logged").innerHTML =
      "Has iniciado sesion correctamente";
  }
}

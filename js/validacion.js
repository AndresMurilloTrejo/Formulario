window.onload = inicio();

function inicio() {
  borrarError();
  if (document.cookie == "") {
    document
      .getElementById("registro")
      .addEventListener("click", Registro, false);
    document.getElementById("login").addEventListener("click", Login, false);
  } else registrado();
}

//Comprobamos que el formulario se rellena correctamente
var usuarios = [];
var pass = [];

function Registro(e) {
  borrarError();
  e.preventDefault();

  if (
    trueName() &&
    trueSurname() &&
    trueEmail() &&
    truePass() &&
    trueTruePass()
  ) {
    alert("Se ha completado el registro");
    usuarios[document.getElementById("email").value] = document.getElementById(
      "nombre"
    ).value;
    pass.push(document.getElementById("pass").value);
    crearCookie(
      document.getElementById("email").value,
      document.getElementById("nombre").value,
      1
    );

    registrado(document.getElementById("email").value);
    return true;
  } else e.preventDefault();
}

//Comprobar que el formulario de login tiene todos los campos correctos

function Login() {
  borrarError();
  var user = document.getElementById("nUsuario");
  var logUser = user.value;
  var logPass = document.getElementById("pUsuario").value;
  e.preventDefault();

  if (usuarios[logUser] != "" && pass.includes(logPass)) {
    alert("Ha iniciado sesion");
    crearCookie(logUser, usuarios[(logUser, 1)]);
    registrado(logUser);
    return true;
  } else {
    errorMsg("El usuario es erroneo o no existe");
    e.preventDefault();
  }
}

//Validamos el nombre del registro

function trueName() {
  var elemento = document.getElementById("nombre");

  if (!elemento.checkValidity()) {
    if (elemento.validity.valueMissing)
      error(elemento, "El campo nombre es obligatorio");
    if (elemento.validity.patternMismatch)
      error(elemento, "El campo nombre no cumple los requisitos");
    return false;
  }

  elemento.className = "Correcto";
  return true;
}

//Validamos el apellido del formulario

function trueSurname() {
  var elemento = document.getElementById("apellidos");

  if (!elemento.checkValidity()) {
    if (elemento.validity.valueMissing)
      error(elemento, "El campo apellido es obligatorio");
    if (elemento.validity.patternMismatch)
      error(elemento, "El campo apellido no cumple los requisitos");
    return false;
  }
  elemento.className = "Correcto";
  return true;
}
//validamos el Email
function trueEmail() {
  var elemento = document.getElementById("email");

  if (!elemento.checkValidity()) {
    if (elemento.validity.valueMissing)
      error(elemento, "El campo e-mail es obligatorio");
    if (elemento.validity.typeMismatch)
      error(elemento, "El campo e-mail no cumple los requisitos");
    return false;
  }

  if (usuarios.includes(elemento.value)) {
    error(elemento, "E-mail ya registrado");
    return false;
  }

  elemento.className = "valido";
  return true;
}

//Validamos la contraseña del formulario

function truePass() {
  var elemento = document.getElementById("pass");

  if (!elemento.checkValidity()) {
    if (elemento.validity.valueMissing)
      error(elemento, "El campo contraseña es obligatorio");
    if (elemento.validity.patternMismatch)
      error(elemento, "El campo contraseña no cumple los requisitos");
    return false;
  }

  elemento.className = "Correcto";
  return true;
}

//Validamos la confirmacion de la contraseña del formulario

function trueTruePass() {
  var elemento = document.getElementById("passBuena");

  if (!elemento.checkValidity()) {
    if (elemento.validity.valueMissing)
      error(elemento, "El campo confirmar contraseña es obligatorio");
    if (elemento.validity.patternMismatch)
      error(elemento, "El campo confirmar contraseña no cumple los requisitos");

    return false;
  }

  if (elemento.value != document.getElementById("pass").value) {
    console.log(elemento.value + " " + document.getElementById("pass").value);
    error(elemento, "Las contraseñas no coinciden");
    return false;
  }

  elemento.className = "Correcto";
  return true;
}

// Añadir errores al introducir de manera incorrecta un valor en el formulario de registro
function errorRegistro(elemento, mensaje) {
  document.getElementById("errores").innerHTML = mensaje;
  elemento.className = "error";
  elemento.focus();
}
// Añadir errores al introducir de manera incorrecta un valor en el formulario de login
function errorLogin(elemento, mensaje) {
  document.getElementById("erroresLogin").innerHTML = mensaje;
  elemento.className = "error";
  elemento.focus();
}

// Limpiar los errores al volver a mandar el formulario para comprobar si sonc correctos
function borrarError() {
  var formulario = document.forms[0];
  for (var i = 0; i < formulario.elements.length; i++)
    formulario.elements[i].className = "";
}

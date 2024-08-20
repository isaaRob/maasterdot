/*
 * Js para la comprobación de datos del formulario
 */

//Ininicializar objerotos del DOM
const nickInput = document.getElementById("nick");
const tamanotInput = document.getElementById("tamano");
const formEntrada = document.getElementById("formEntrada");
const error = document.getElementById("error");

//Funcion que verifica si hay una sesion abierta
if (sessionStorage.getItem('error') != null){
  error.innerText = sessionStorage.getItem('error');
  sessionStorage.removeItem('error');
}

//Funciones de eventos
function comprobarForm(event) {
  if (nickInput.value.match(/(?<!\S)[0-9]/)) {
    nickInput.focus();
    event.preventDefault();
    error.innerText = "El campo de nick no puede comenzar con un numero";
    return false;
  } else if (tamanotInput.value == "0") {
    tamanotInput.focus();
    event.preventDefault();
    error.innerText = "Se debe seleccionar el tamaño del panel";
    return false;
  }
  datosUsuarios(nickInput);
  return true;
}

//Inicio de carga de eventos
formEntrada.addEventListener("submit", comprobarForm);

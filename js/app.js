/**
 * JS para la comprobación de los datos del formulario de entrada de entrada.
 * @author Isaí Ayón <rperez15@ucol.com>
 * @link https://github.com/isaaRob/maasterdot GitHub.
 */


//Ininicializar objetos del DOM
var nickInput;
var tamanotInput;
var emailInput;
var formEntrada;
var error;

/**
 * Funcion que los datos de entrada sean correctos, si llama a datosUsuario y a historicoUsuarios.
 * @param {EventObjet} event evento que salta al realizar submit.
 */
function comprobarForm(event) {
    //comprueba que no inicie con numero
    if (nickInput.value.match(/(?<!\S)[0-9]/)) {
        nickInput.focus();
        event.preventDefault();
        error.innerText = "El campo de nick no puede comenzar con un numero";
        return false;
    //comprueba que se selecciono el tamaño del panel
    } else if (tamanotInput.value == "0") {
        tamanotInput.focus();
        event.preventDefault();
        error.innerText = "Se debe seleccionar el tamaño del panel";
        return false;
    }
    //informacion correcta
    datosUsuarios(nickInput, tamanotInput, emailInput);
    historicoUsuarios(nickInput);
    return true;
}

/**
 * Funcion que carga los Elementos del DOM, comprueba errores en localStorage y manda a llamar comprobarForm.
 */
function domCargado() {
    //captura de todos los elements
    nickInput = document.getElementById("nick");
    tamanotInput = document.getElementById("tamano");
    emailInput = document.getElementById("correo");
    formEntrada = document.getElementById("formEntrada");
    error = document.getElementById("error");
    //comprueba errores de sesion
    if (sessionStorage.getItem('error') != null) {
        error.innerText = sessionStorage.getItem('error');
        sessionStorage.removeItem('error');
    }
    //exito
    formEntrada.addEventListener("submit", comprobarForm);
}

//Inicio de garga de eventos.
document.addEventListener('DOMContentLoaded', domCargado);

//Geolocalizacion.
datosGeolocalizacion();
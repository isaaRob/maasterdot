/**
 * JS para la gestion de datos de usuario
 * @author Isaí Ayón;rperez15@ucol.com
 * @link https://github.com/isaaRob/maasterdot GitHub.
 */

//Inicializacón de los objetos del DOM.
var nick;
var tamano;
var email;
var geolocalizacionTxt;

/**
 * Funccion que almacena los datos del usuario en sessionStorage
 * @param {HTMLElement} nick guarda el nombre de usuario    
 * @param {HTMLElement} tamano guarda el tamaño del tablero
 * @param {HTMLElement} email guarda el email del usuario
 */
function datosUsuarios(nick, tamano, email) {
    sessionStorage.setItem("nick", nick.value);
    sessionStorage.setItem("tamano", tamano.value);
    sessionStorage.setItem("email", email.value);
    sessionStorage.setItem('geolocalizacion', geolocalizacionTxt);
}

/**
 * Funcion que optiene los datos guardados en sessionStorage.
 * @returns {string} regresa los datos del usuario guardados en sessionStorage.
 */
function getDatosUsuarios() {
    nick = sessionStorage.getItem("nick");
    tamano = sessionStorage.getItem("tamano");
    email = sessionStorage.getItem("email");
    return nick, tamano, email
}

/**
 * Funcion que verifica si existe un usuario con sesion activa.
 *
 */
function comprobacionDatosUsuario() {
    if (nick == null) {
        sessionStorage.setItem("error", "No se a rellenado correctamente el formulario");
        //No existe usuario
        return false;
      //Existe usuario  
    } else return true;
}

/**
 * Funcion que activa la geolocalización
 */
function datosGeolocalizacion() {
    //comprueba si el usuario otorgo permiso
    if (!navigator.geolocation) geolocalizacionTxt = 'El navegador no es compatible con geolocalizacion';
    else {
        navigator.geolocation.getCurrentPosition(
            //exito
            (position) => { geolocalizacionTxt = `Latitud: ${position.coords.latitude}, longitud: ${position.coords.longitude}`},
            //error
            () => {geolocalizacionTxt = 'El navegador no es compatible con geolocalizacion'}
        )
    }
}

/**
 * Funcion que guarda en localStorage los datos de usuario en un historico de datos de usurio.
 * @param {HTMLElement} nick es el nombre de usuario.
 */
function historicoUsuarios(nick) {
    //obtiene localStorage
    let historicoStorage = localStorage.getItem('historico');
    //verifica si esta vacio y si si, crea un array
    if (historicoStorage == null) var historico = [];
    //si no, crea el usuario nuevo
    else historico = JSON.parse(historicoStorage);
    let registroUsuario = {
        usaurio : nick.value,
        fecha : Date.now()
    }
    //guarda el usuario nuevo
    historico.push(registroUsuario)
    //se guarda en localStorage
    localStorage.setItem('historico', JSON.stringify(historico))
}
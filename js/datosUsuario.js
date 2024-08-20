/**
 * JS PARA LA GESTION DE DATOS DE USUARIO
 *
 */

var nick;
var tamano;
var email
var geolocalizacionTxt

//Sesion storage
function datosUsuarios(nick, tamano, email) {
    sessionStorage.setItem("nick", nick.value);
    sessionStorage.setItem("tamano", tamano.value);
    sessionStorage.setItem("email", email.value);
    sessionStorage.setItem('geolocalizacion', geolocalizacionTxt);
}

function getDatosUsuarios() {
    nick = sessionStorage.getItem("nick");
    tamano = sessionStorage.getItem("tamano");
    email = sessionStorage.getItem("email");
    console.log(nick, tamano, email);
}

function comprobacionDatosUsuario() {
    if (nick == null) {
        sessionStorage.setItem("error", "No se a rellenado correctamente el formulario");
        return false;
    } else return true;
}

function datosGeolocalizacion(){
    if (!navigator.geolocation) geolocalizacionTxt = 'El navegador no es compatible con geolocalizacion';
    else {
        navigator.geolocation.getCurrentPosition(
            (position) => { geolocalizacionTxt = `Latitud: ${position.coords.latitude}, longitud: ${position.coords.longitude}`},
            () => {geolocalizacionTxt = 'El navegador no es compatible con geolocalizacion'}
        )
    }
}

//Local storage
function historicoUsuarios(nick){
    let historicoStorage = localStorage.getItem('historico');
    if (historicoStorage == null) var historico = [];
    else historico = JSON.parse(historicoStorage);
    let registroUsuario = {
        usaurio : nick.value,
        fecha : Date.now()
    }
    historico.push(registroUsuario)
    localStorage.setItem('historico', JSON.stringify(historico))
}
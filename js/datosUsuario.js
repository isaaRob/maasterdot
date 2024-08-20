let nick;
function datosUsuarios(nick) {
  sessionStorage.setItem('nick', nick.value)
}

function getDatosUsuarios() {
  nick = sessionStorage.getItem('nick');
  console.log(nick);
}

function comprobacionDatosUsuario(){
  if(nick == null) {
    sessionStorage.setItem('error', 'No se a rellenado correctamente el formulario')
    return false;
  }
  else return true;
}
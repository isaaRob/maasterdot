/**
 * JS para el funcionamiento del juego
 * @author Isaí Ayón;rperez15@ucol.com>
 * @link https://github.com/isaaRob/maasterdot GitHub.
 */

//Se optienen datos del usuario
getDatosUsuarios();

//Comprueba si existe sesion abierta.
if (!comprobacionDatosUsuario()) location = "index.html";

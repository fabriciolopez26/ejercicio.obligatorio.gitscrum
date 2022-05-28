document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
 
  function validarFormulario(evento) {
    evento.preventDefault();
    let usuario = document.getElementById('usuario').value;
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValido = expReg.test(usuario);  
    if(usuario.length == 0) {
      alert('No has escrito nada en el usuario');
      return;
    }
    if(esValido == false) {
        alert('Incluir arroba y/o punto');
        return;
      }
    let clave = document.getElementById('clave').value;
    if (clave.length == 0) {
      alert('No has escrito tu contraseña');
      return;
    }
    else{
        alert('formulario enviado, muchas gracias')
    }
  }
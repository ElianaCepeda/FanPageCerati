// Obtener elementos del DOM
const chat = document.querySelector('.chat');
const inputRemitente = document.getElementById('remitente');
const inputMensaje = document.getElementById('mensaje');
const botonEnviar = document.getElementById('boton-enviado');
const botonBorrar = document.getElementById('boton-borrar');
const mensajeError = document.getElementById('mensaje_error');

// Funcion para crear un nuevo mensaje
function crearMensaje(remitente, texto) {
    const nuevoMensaje = document.createElement('div');
    nuevoMensaje.classList.add('mensaje');

    const remitenteElemento = document.createElement('p');
    remitenteElemento.classList.add('remitente');
    remitenteElemento.textContent = `${remitente}:`;

    const mensajeTexto = document.createElement('p');
    mensajeTexto.textContent = texto;

    nuevoMensaje.appendChild(remitenteElemento);
    nuevoMensaje.appendChild(mensajeTexto);

    return nuevoMensaje;
}

// Funcion para agregar un mensaje al chat
function agregarMensaje(mensaje) {
    chat.appendChild(mensaje);
    chat.scrollTop = chat.scrollHeight; // Mantener el scroll abajo
}

// Evento click del boton enviar
botonEnviar.addEventListener('click', () => {
    const remitente = inputRemitente.value.trim();
    const textoMensaje = inputMensaje.value.trim();

    if (remitente === '' || textoMensaje === '') {
        mensajeError.textContent = "Debes llenar ambos campos.";
        return;
    }

    const nuevoMensaje = crearMensaje(remitente, textoMensaje);
    agregarMensaje(nuevoMensaje);

    inputRemitente.value = '';
    inputMensaje.value = '';
    mensajeError.textContent = '';

    // Mostrar el boton de borrar si hay mensajes
    if (chat.children.length > 0) {
        botonBorrar.style.display = 'block';
    }
});

// Evento keypress para enviar con Enter
inputMensaje.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        botonEnviar.click();
    }
});



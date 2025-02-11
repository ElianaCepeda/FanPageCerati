// Obtener elementos del DOM
const chat = document.querySelector('.chat');
const inputMensaje = document.querySelector('.entrada input[type="text"]');
const botonEnviar = document.getElementById('boton-enviado');
const mensajeError = document.getElementById('mensaje_error');

// Función para crear un nuevo mensaje
function crearMensaje(texto) {
    const nuevoMensaje = document.createElement('div');
    nuevoMensaje.classList.add('mensaje');
    nuevoMensaje.textContent = texto;
    return nuevoMensaje;
}

// Función para añadir un mensaje al chat
function agregarMensaje(mensaje) {
    chat.appendChild(mensaje);
    chat.scrollTop = chat.scrollHeight; // Mantener el scroll abajo
}

// Evento click del botón enviar
botonEnviar.addEventListener('click', () => {
    const textoMensaje = inputMensaje.value.trim(); // Obtener y limpiar el texto

    if (textoMensaje === '') {
        mensajeError.textContent = "Debes escribir un mensaje"; // Mostrar mensaje de error
        return; // Salir de la función si el mensaje está vacío
    }

    const nuevoMensaje = crearMensaje(textoMensaje); // Crear elemento mensaje
    agregarMensaje(nuevoMensaje); // Añadir mensaje al chat

    inputMensaje.value = ''; // Limpiar el input
    mensajeError.textContent = ''; // Limpiar mensaje de error
});

// Evento keypress para enviar con Enter
inputMensaje.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        botonEnviar.click(); // Simular click en el botón enviar
    }
});
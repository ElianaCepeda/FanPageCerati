document.addEventListener("mousemove", (event) => {
    const images = document.querySelectorAll(".imagenes-flotantes");
    const { clientX: mouseX, clientY: mouseY } = event;

    images.forEach((image, index) => {
        const speed = (index + 1) * 7; // Diferente velocidad por imagen
        const x = (window.innerWidth / 2 - mouseX) / speed;
        const y = (window.innerHeight / 2 - mouseY) / speed;

        image.style.transform = `translate(${x}px, ${y}px)`;
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('.indice-contenedor a, .indice-contenedor2 a'); 

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); 

            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Ajuste para evitar que la navbar cubra el contenido
                    behavior: "smooth" 
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Seleccionar todas las secciones de los álbumes
    const albumes = document.querySelectorAll(".album");

    albumes.forEach(album => {
        album.addEventListener("mouseenter", () => {
            album.style.backgroundColor = "#f0f0f0"; // Nuevo color de fondo
            album.style.border = "3px solid #0077ff"; // Nuevo color de borde
            album.style.transition = "all 0.3s ease"; // Suaviza el cambio
        });

        album.addEventListener("mouseleave", () => {
            album.style.backgroundColor = ""; // Vuelve al color original (gradiente en CSS)
            album.style.border = "2px solid black"; // Borde original
        });
    });
});

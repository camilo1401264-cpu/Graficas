
// ======================================
// 1. ANIMACIÓN AL CARGAR LA PÁGINA
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Página de campos direccionales cargada correctamente");

    // Animación de aparición de las secciones
    const secciones = document.querySelectorAll(
        ".introduccion, .ejercicios, .conclusion"
    );

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visible");
                observador.unobserve(entrada.target);
            }
        });
    }, {
        threshold: 0.12
    });

    secciones.forEach((seccion) => {
        observador.observe(seccion);
    });


// ======================================
// 2. EFECTO EN LAS IMÁGENES
// ======================================

    const imagenes = document.querySelectorAll(".grafica img");

    imagenes.forEach((imagen) => {

        imagen.addEventListener("click", () => {
            imagen.classList.toggle("imagen-grande");
        });

        imagen.addEventListener("error", () => {
            imagen.alt = "No se encontró la imagen. Revisa la carpeta imagenes.";
            imagen.title = "Imagen no encontrada";
            imagen.style.background = "#fff0e8";
        });

    });


// ======================================
// 3. MARCAR EL ENLACE ACTIVO
// ======================================

    const enlaces = document.querySelectorAll("nav a");

    enlaces.forEach((enlace) => {

        enlace.addEventListener("click", () => {

            enlaces.forEach((otro) => {
                otro.classList.remove("activo");
            });

            enlace.classList.add("activo");

        });

    });


// ======================================
// 4. BOTÓN PARA VOLVER ARRIBA
// ======================================

    const botonArriba = document.querySelector("footer a");

    if (botonArriba) {
        botonArriba.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

});

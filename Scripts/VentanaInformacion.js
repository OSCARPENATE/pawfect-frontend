document.addEventListener("DOMContentLoaded", () => {
    const mascota = document.querySelector(".Mascota");
    const ventanaInformacion = document.getElementById("Ventana_informacion");
    const botonCerrar = document.getElementById("Cerrar_informacion");

    // Abrir modal al hacer clic en la mascota
    mascota.addEventListener("click", () => {
        ventanaInformacion.classList.add("visible");
    });

    // Cerrar modal al hacer clic fuera del cuadro
    ventanaInformacion.addEventListener("click", (e) => {
        if (e.target === ventanaInformacion) {
            ventanaInformacion.classList.remove("visible");
        }
    });

    // Cerrar modal al hacer clic en la "X"
    botonCerrar.addEventListener("click", () => {
        ventanaInformacion.classList.remove("visible");
    });
}); 
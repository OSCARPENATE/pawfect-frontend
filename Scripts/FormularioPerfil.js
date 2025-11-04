document.addEventListener('DOMContentLoaded', function () {
    // Mostrar el formulario y los botones de carga al hacer clic en el botón de actualizar datos
    document.getElementById("Boton_actualizar").addEventListener("click", function() {
        // Mostrar el formulario
        document.getElementById("Formulario_actualizar").style.display = "block";
        
        // Mostrar los botones de carga y reset para avatar y portada
        document.getElementById("Boton_avatar").classList.remove("ocultar");
        document.getElementById("Reset_avatar").classList.remove("ocultar"); // Mostrar botón reset avatar
        
        document.querySelector(".Boton_portada").classList.remove("ocultar");
        document.getElementById("Reset_portada").classList.remove("ocultar"); // Mostrar botón reset portada
    });

    // Ocultar el formulario y los botones cuando se cancela
    document.querySelector(".Cerrar").addEventListener("click", function() {
        // Ocultar el formulario
        document.getElementById("Formulario_actualizar").style.display = "none";
        
        // Ocultar los botones de carga y reset para avatar y portada
        document.getElementById("Boton_avatar").classList.add("ocultar");
        document.getElementById("Reset_avatar").classList.add("ocultar"); // Ocultar botón reset avatar
        
        document.querySelector(".Boton_portada").classList.add("ocultar");
        document.getElementById("Reset_portada").classList.add("ocultar"); // Ocultar botón reset portada
    });
});

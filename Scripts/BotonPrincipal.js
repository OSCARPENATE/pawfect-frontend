// Efecto ripple para todos los botones principales
document.querySelectorAll('.Boton_principal').forEach(btnPrincipal => {
    btnPrincipal.onmousemove = function (e) {
        const rect = btnPrincipal.getBoundingClientRect();
        const x = e.clientX - rect.left; // Coordenada X relativa a la ventana
        const y = e.clientY - rect.top;  // Coordenada Y relativa a la ventana

        btnPrincipal.style.setProperty('--x', x + 'px');
        btnPrincipal.style.setProperty('--y', y + 'px');
        };
});

document.addEventListener("DOMContentLoaded", () => {
  const botonPrincipal = document.querySelector(".Boton_principal");
  const spanTexto = botonPrincipal.querySelector("span");

  // Leer usuario del localStorage
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  if (usuario) {
    // ✅ Si hay sesión activa
    spanTexto.textContent = "CERRAR SESIÓN";
    botonPrincipal.href = "#"; // Evita ir al login

    botonPrincipal.addEventListener("click", (e) => {
      e.preventDefault();
      const confirmar = confirm("¿Seguro que deseas cerrar sesión?");
      if (confirmar) {
        localStorage.removeItem("usuario");
        alert("👋 Sesión cerrada correctamente.");
        window.location.href = "index.html"; // Redirige al inicio
      }
    });
  } else {
    // ❌ No hay sesión activa
    spanTexto.textContent = "INGRESAR";
    botonPrincipal.href = "LoginRegistro.html";
  }
});
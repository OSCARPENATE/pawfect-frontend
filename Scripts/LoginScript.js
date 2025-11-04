// Recursos
document.getElementById("Boton_secundario-registro").addEventListener("click", registro);
document.getElementById("Boton_secundario-login").addEventListener("click", login);
window.addEventListener("resize", anchoPage);

// Declarando variables
var Formulario_login = document.querySelector(".Formulario_login");
var Formulario_registro = document.querySelector(".Formulario_registro");
var Contenedor_login_registro = document.querySelector(".Contenedor_login-registro");
var Caja_trasera_login = document.querySelector(".Caja_trasera-login");
var Caja_trasera_registro = document.querySelector(".Caja_trasera-registro");

// Funciones
function anchoPage() {
    if (window.innerWidth > 850) {
        Caja_trasera_registro.style.display = "block";
        Caja_trasera_login.style.display = "block";
    } else {
        Caja_trasera_registro.style.display = "block";
        Caja_trasera_registro.style.opacity = "1";
        Caja_trasera_login.style.display = "none";
        Formulario_login.style.display = "block";
        Contenedor_login_registro.style.left = "0px";
        Formulario_registro.style.display = "none";
    }
}

anchoPage();

function clearValidationErrors(form) {
    const errorMessages = form.querySelectorAll('.error-message');
    const inputs = form.querySelectorAll('input');

    errorMessages.forEach(msg => msg.textContent = ''); // Limpiar mensajes de error
    inputs.forEach(input => {
        input.classList.remove('error'); // Quitar borde rojo
    });
}

function registro() {
    clearValidationErrors(Formulario_login); // Limpiar errores del formulario de login

    if (window.innerWidth > 850) {
        Formulario_registro.style.display = "block";
        Contenedor_login_registro.style.left = "410px";
        Formulario_login.style.display = "none";
        Caja_trasera_registro.style.opacity = "0";
        Caja_trasera_login.style.opacity = "1";
    } else {
        Formulario_registro.style.display = "block";
        Contenedor_login_registro.style.left = "0px";
        Formulario_login.style.display = "none";
        Caja_trasera_registro.style.display = "none";
        Caja_trasera_login.style.display = "block";
        Caja_trasera_login.style.opacity = "1";
    }
}

function login() {
    clearValidationErrors(Formulario_registro); // Limpiar errores del formulario de registro

    if (window.innerWidth > 850) {
        Formulario_login.style.display = "block";
        Contenedor_login_registro.style.left = "-20px";
        Formulario_registro.style.display = "none";
        Caja_trasera_registro.style.opacity = "1";
        Caja_trasera_login.style.opacity = "0";
    } else {
        Formulario_login.style.display = "block";
        Contenedor_login_registro.style.left = "0px";
        Formulario_registro.style.display = "none";
        Caja_trasera_registro.style.display = "block";
        Caja_trasera_login.style.display = "none";
    }
}




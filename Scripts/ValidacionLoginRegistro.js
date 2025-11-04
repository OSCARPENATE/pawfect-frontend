document.addEventListener("DOMContentLoaded", function () {
    // Función para validar un campo individual
    function validateField(input, errorMessageElement, errorMessage) {
        if (!input.value.trim()) {
            errorMessageElement.textContent = errorMessage;
            input.classList.add('error');
            return false;
        } else {
            errorMessageElement.textContent = '';
            input.classList.remove('error');
            return true;
        }
    }

    // Función para validar formato de correo electrónico
    function validateEmailField(input, errorMessageElement) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!input.value.trim()) {
            errorMessageElement.textContent = 'El correo es obligatorio';
            input.classList.add('error');
            return false;
        } else if (!emailRegex.test(input.value.trim())) {
            errorMessageElement.textContent = 'Formato de correo inválido';
            input.classList.add('error');
            return false;
        } else {
            errorMessageElement.textContent = '';
            input.classList.remove('error');
            return true;
        }
    }

    // Función para validar que la contraseña sea alfanumérica
    function validateAlphanumericPassword(input, errorMessageElement) {
        const alphanumericRegex = /^[a-zA-Z0-9]+$/;
        if (!input.value.trim()) {
            errorMessageElement.textContent = 'La clave es obligatoria';
            input.classList.add('error');
            return false;
        } else if (!alphanumericRegex.test(input.value.trim())) {
            errorMessageElement.textContent = 'La clave debe ser alfanumérica (letras y números)';
            input.classList.add('error');
            return false;
        } else {
            errorMessageElement.textContent = '';
            input.classList.remove('error');
            return true;
        }
    }

    // Función para validar que el usuario no tenga caracteres especiales
    function validateUsername(input, errorMessageElement) {
        const usernameRegex = /^[a-zA-Z0-9]+$/;
        if (!input.value.trim()) {
            errorMessageElement.textContent = 'El usuario es obligatorio';
            input.classList.add('error');
            return false;
        } else if (!usernameRegex.test(input.value.trim())) {
            errorMessageElement.textContent = 'El usuario no debe contener caracteres especiales';
            input.classList.add('error');
            return false;
        } else {
            errorMessageElement.textContent = '';
            input.classList.remove('error');
            return true;
        }
    }

    // Función para limpiar error al escribir
    function clearErrorOnInput(input, errorMessageElement) {
        input.addEventListener('input', function () {
            if (input.value.trim()) {
                errorMessageElement.textContent = '';
                input.classList.remove('error');
            }
        });
    }

    // Validar formulario de login
    const loginForm = document.querySelector('.Formulario_login');
    if (loginForm) {
        const loginUsuario = loginForm.querySelector('input[name="Usuario"]');
        const loginClave = loginForm.querySelector('input[name="Clave"]');

        clearErrorOnInput(loginUsuario, document.getElementById('error-login-usuario'));
        clearErrorOnInput(loginClave, document.getElementById('error-login-clave'));

        loginUsuario.addEventListener('blur', function () {
            validateUsername(loginUsuario, document.getElementById('error-login-usuario'));
        });

        loginClave.addEventListener('blur', function () {
            validateAlphanumericPassword(loginClave, document.getElementById('error-login-clave'));
        });

        loginForm.addEventListener('submit', function (e) {
            const validUsuario = validateUsername(loginUsuario, document.getElementById('error-login-usuario'));
            const validClave = validateAlphanumericPassword(loginClave, document.getElementById('error-login-clave'));

            if (!validUsuario || !validClave) {
                e.preventDefault();
            }
        });
    }

    // Validar formulario de registro
    const registroForm = document.querySelector('.Formulario_registro');
    if (registroForm) {
        const registroNombre = registroForm.querySelector('input[name="Nombre"]');
        const registroUsuario = registroForm.querySelector('input[name="Usuario"]');
        const registroCorreo = registroForm.querySelector('input[name="Correo"]');
        const registroClave = registroForm.querySelector('input[name="Clave"]');
        const repetirClave = registroForm.querySelector('input[name="RepetirClave"]');

        clearErrorOnInput(registroNombre, document.getElementById('error-registro-nombre'));
        clearErrorOnInput(registroUsuario, document.getElementById('error-registro-usuario'));
        clearErrorOnInput(registroCorreo, document.getElementById('error-registro-correo'));
        clearErrorOnInput(registroClave, document.getElementById('error-registro-clave'));
        clearErrorOnInput(repetirClave, document.getElementById('error-registro-repetirclave'));

        registroNombre.addEventListener('blur', function () {
            validateField(registroNombre, document.getElementById('error-registro-nombre'), 'El nombre es obligatorio');
        });

        registroUsuario.addEventListener('blur', function () {
            validateUsername(registroUsuario, document.getElementById('error-registro-usuario'));
        });

        registroCorreo.addEventListener('blur', function () {
            validateEmailField(registroCorreo, document.getElementById('error-registro-correo'));
        });

        registroClave.addEventListener('blur', function () {
            validateAlphanumericPassword(registroClave, document.getElementById('error-registro-clave'));
        });

        repetirClave.addEventListener('blur', function () {
            if (registroClave.value !== repetirClave.value) {
                document.getElementById('error-registro-repetirclave').textContent = 'Las claves no coinciden';
                repetirClave.classList.add('error');
            } else {
                document.getElementById('error-registro-repetirclave').textContent = '';
                repetirClave.classList.remove('error');
            }
        });

        registroForm.addEventListener('submit', function (e) {
            const validNombre = validateField(registroNombre, document.getElementById('error-registro-nombre'), 'El nombre es obligatorio');
            const validUsuario = validateUsername(registroUsuario, document.getElementById('error-registro-usuario'));
            const validCorreo = validateEmailField(registroCorreo, document.getElementById('error-registro-correo'));
            const validClave = validateAlphanumericPassword(registroClave, document.getElementById('error-registro-clave'));
            const validRepetirClave = registroClave.value === repetirClave.value;

            if (!validNombre || !validUsuario || !validCorreo || !validClave || !validRepetirClave) {
                e.preventDefault();
            }

            if (!validRepetirClave) {
                document.getElementById('error-registro-repetirclave').textContent = 'Las claves no coinciden';
                repetirClave.classList.add('error');
            }
        });
    }
});


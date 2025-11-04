document.addEventListener("DOMContentLoaded", function () {
    // Función para validar un campo individual
    function validateField(input, errorMessageElement, errorMessage) {
        if (!input.value.trim()) {
            errorMessageElement.textContent = errorMessage;
            input.classList.add('error');
            return false;
        } else if (input.value.trim().length > 80) {
            errorMessageElement.textContent = 'El campo no debe superar los 80 caracteres';
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
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex para validar email
        if (!input.value.trim()) {
            errorMessageElement.textContent = 'El correo es obligatorio';
            input.classList.add('error');
            return false;
        } else if (!emailRegex.test(input.value.trim())) {
            errorMessageElement.textContent = 'Formato de correo inválido';
            input.classList.add('error');
            return false;
        } else if (input.value.trim().length > 80) {
            errorMessageElement.textContent = 'El correo no debe superar los 80 caracteres';
            input.classList.add('error');
            return false;
        } else {
            errorMessageElement.textContent = '';
            input.classList.remove('error');
            return true;
        }
    }

    // Función para validar que el teléfono solo contenga números
    function validateTelefonoField(input, errorMessageElement) {
        const phoneRegex = /^[0-9]+$/; // Solo números
        if (!input.value.trim()) {
            errorMessageElement.textContent = 'El teléfono es obligatorio';
            input.classList.add('error');
            return false;
        } else if (!phoneRegex.test(input.value.trim())) {
            errorMessageElement.textContent = 'El teléfono solo puede contener números';
            input.classList.add('error');
            return false;
        } else if (input.value.trim().length > 80) {
            errorMessageElement.textContent = 'El teléfono no debe superar los 80 caracteres';
            input.classList.add('error');
            return false;
        } else {
            errorMessageElement.textContent = '';
            input.classList.remove('error');
            return true;
        }
    }

    // Función para validar la selección del perfil
    function validateSelectField(select, errorMessageElement) {
        if (select.value === 'Sin_elegir') {
            errorMessageElement.textContent = 'Debe seleccionar un perfil válido';
            select.classList.add('error');
            return false;
        } else {
            errorMessageElement.textContent = '';
            select.classList.remove('error');
            return true;
        }
    }

    // Función para validar la fecha de nacimiento
    function validateDateField(input, errorMessageElement) {
        const today = new Date();
        const inputDate = new Date(input.value);
        if (!input.value.trim()) {
            errorMessageElement.textContent = 'La fecha de nacimiento es obligatoria';
            input.classList.add('error');
            return false;
        } else if (isNaN(inputDate.getTime())) {
            errorMessageElement.textContent = 'Fecha no válida';
            input.classList.add('error');
            return false;
        } else if (inputDate > today) {
            errorMessageElement.textContent = 'La fecha no puede ser futura';
            input.classList.add('error');
            return false;
        } else {
            errorMessageElement.textContent = '';
            input.classList.remove('error');
            return true;
        }
    }

    // Función para limpiar errores al escribir
    function clearErrorOnInput(input, errorMessageElement) {
        input.addEventListener('input', function () {
            if (input.value.trim()) {
                errorMessageElement.textContent = '';
                input.classList.remove('error');
            }
        });
    }

    // Obtener los elementos del formulario
    const form = document.querySelector('#Formulario_actualizar form');
    const emailField = form.querySelector('input[name="Correo"]');
    const telefonoField = form.querySelector('input[name="Telefono"]');
    const perfilSelect = form.querySelector('select[name="Perfil_Opciones"]');
    const paisField = form.querySelector('input[name="Pais"]');
    const ciudadField = form.querySelector('input[name="Ciudad"]');

    // Limpiar errores al escribir
    clearErrorOnInput(emailField, document.getElementById('error-actualizar-correo'));
    clearErrorOnInput(telefonoField, document.getElementById('error-actualizar-telefono'));
    clearErrorOnInput(paisField, document.getElementById('error-actualizar-Pais'));
    clearErrorOnInput(ciudadField, document.getElementById('error-actualizar-Ciudad'));
    perfilSelect.addEventListener('change', function () {
        document.getElementById('error-actualizar-perfil').textContent = '';
        perfilSelect.classList.remove('error');
    });

    // Validaciones al perder el foco (blur)
    emailField.addEventListener('blur', function () {
        validateEmailField(emailField, document.getElementById('error-actualizar-correo'));
    });

    telefonoField.addEventListener('blur', function () {
        validateTelefonoField(telefonoField, document.getElementById('error-actualizar-telefono'));
    });

    paisField.addEventListener('blur', function () {
        validateField(paisField, document.getElementById('error-actualizar-Pais'), 'El país es obligatorio');
    });

    ciudadField.addEventListener('blur', function () {
        validateField(ciudadField, document.getElementById('error-actualizar-Ciudad'), 'La ciudad es obligatoria');
    });

    perfilSelect.addEventListener('blur', function () {
        validateSelectField(perfilSelect, document.getElementById('error-actualizar-perfil'));
    });

    // Validar el formulario al hacer submit
    form.addEventListener('submit', function (e) {
        const validEmail = validateEmailField(emailField, document.getElementById('error-actualizar-correo'));
        const validTelefono = validateTelefonoField(telefonoField, document.getElementById('error-actualizar-telefono'));
        const validPerfil = validateSelectField(perfilSelect, document.getElementById('error-actualizar-perfil'));
        const validPais = validateField(paisField, document.getElementById('error-actualizar-Pais'), 'El país es obligatorio');
        const validCiudad = validateField(ciudadField, document.getElementById('error-actualizar-Ciudad'), 'La ciudad es obligatoria');

        if (!validEmail || !validTelefono || !validPerfil || !validPais || !validCiudad || !validDireccion || !validFechaNacimiento) {
            e.preventDefault(); // Evita que el formulario se envíe si hay errores
        }
    });
});

// Variables para mostrar los contenedores y ocultarlos
const VentanaPublicar = document.getElementById('Ventana_publicar'),
    ContenedorPublicar = document.getElementById('Contenedor_publicar'),
    ContenedorDetalles = document.getElementById('Contenedor_detalles'),
    BotonAgregar = document.getElementById('Boton_agregar'),
    CerrarPublicar = document.getElementById('Cerrar_publicar'),
    CerrarDetalles = document.getElementById('Cerrar_detalles'),
    RegresarPublicar = document.getElementById('Regresar_publicar'),
    TituloImagen = document.getElementById('Titulo_imagen'), 
    DescripcionImagen = document.getElementById('Descripcion_imagen');

// Variables para los contenedores, botones y la imagen en el editor
const ArchivoInput = document.querySelector(".Archivo_input"),
    CargarImagenBtn = document.querySelector(".Cargar_imagen"),
    FiltroOpciones = document.querySelectorAll(".Filtro button"),
    FiltroNombre = document.querySelector(".Filtro_info .Nombre"),
    FiltroValor = document.querySelector(".Filtro_info .Valor"),
    FiltroSlider = document.querySelector(".Slider input"),
    RestFiltros = document.querySelector(".Reset_filtro"),
    RotacionOpcion = document.querySelectorAll(".Rotacion button"),
    PreviewImagen = document.querySelector(".Preview_imagen img"),
    Continuar = document.querySelector(".Continuar");

// Obtener referencias a los elementos del popup de confirmación
const PopupConfirmacion = document.getElementById('Popup_confirmacion'),
    BotonConfirmar = document.getElementById('Boton_confirmar'),
    BotonCancelar = document.getElementById('Boton_cancelar');

// Función para mostrar la Ventana_publicar y Contenedor_publicar con transición suave
BotonAgregar.addEventListener('click', () => {
    VentanaPublicar.style.display = 'flex';
    ContenedorPublicar.style.display = 'block';
    
    VentanaPublicar.offsetHeight;
    VentanaPublicar.classList.add('visible');
    ContenedorPublicar.classList.add('visible');

    document.querySelector(".Contenedor_publicar").classList.add("disable");
});

// Función para verificar si una imagen cargada en loadImagen está presente
function hayImagenCargada() {
    return PreviewImagen.src !== '' && !PreviewImagen.src.includes('Sinimagen.jpeg');
}

// Función para reiniciar el editor de imágenes y deshabilitar el Contenedor_publicar
function reiniciarEditor() {
    PreviewImagen.src = 'Imagens/Sinimagen.jpeg'; 
    restFiltros();
}

// Función para limpiar los campos de título y descripción
function limpiarCamposDetalles() {
    TituloImagen.value = ''; 
    DescripcionImagen.value = ''; 
}

// Función para mostrar el popup de confirmación con desvanecimiento
function mostrarPopup() {
    PopupConfirmacion.style.display = 'flex';
    setTimeout(() => {
        PopupConfirmacion.classList.add('visible'); 
    }, 10);
}

// Función para ocultar el popup de confirmación con desvanecimiento
function ocultarPopup() {
    PopupConfirmacion.classList.remove('visible');
    setTimeout(() => {
        PopupConfirmacion.style.display = 'none'; 
    }, 500); 
}

// Función para cerrar la ventana y los contenedores
function cerrarVentana() {
    if (hayImagenCargada()) {
        mostrarPopup();
    } else {
        ocultarVentana(); 
    }
}

// Función para ocultar la ventana y los contenedores después de la transición
function ocultarVentana() {
    VentanaPublicar.classList.remove('visible');
    ContenedorPublicar.classList.remove('visible');
    ContenedorDetalles.classList.remove('visible'); 

    setTimeout(() => {
        VentanaPublicar.style.display = 'none';
        ContenedorPublicar.style.display = 'none';
        ContenedorDetalles.style.display = 'none'; 
        ArchivoInput.value = ""; 
    }, 500); 
}

// Función para mostrar el Contenedor_detalles cuando se presiona el botón Continuar
Continuar.addEventListener('click', () => {
    ContenedorPublicar.classList.remove('visible');
    setTimeout(() => {
        ContenedorPublicar.style.display = 'none';
        ContenedorDetalles.style.display = 'block';
        ContenedorDetalles.offsetHeight; 
        ContenedorDetalles.classList.add('visible');
    }, 500); 
});

// Función para regresar al Contenedor_publicar desde Contenedor_detalles
RegresarPublicar.addEventListener('click', () => {
    ContenedorDetalles.classList.remove('visible');
    setTimeout(() => {
        ContenedorDetalles.style.display = 'none';
        ContenedorPublicar.style.display = 'block';
        ContenedorPublicar.offsetHeight; 
        ContenedorPublicar.classList.add('visible');
    }, 500); 
});

// Event listener para confirmar el cierre de la ventana
BotonConfirmar.addEventListener('click', () => {
    reiniciarEditor(); 
    ocultarVentana(); 
    ocultarPopup();
    limpiarCamposDetalles();
});

// Event listener para cancelar el cierre de la ventana
BotonCancelar.addEventListener('click', () => {
    ocultarPopup();
});

// Eventos para cerrar al presionar los botones de cerrar
CerrarPublicar.addEventListener('click', cerrarVentana);
CerrarDetalles.addEventListener('click', cerrarVentana);

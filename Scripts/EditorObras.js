
//Editor de Obras
let Brightness = 100, Saturation = 100, Inversion = 0, Grayscale = 0;
let Rotate = 0, FlipHorizontal = 1, FlipVertical = 1;

const applicarFiltro = () => {
    // Aseguramos que las transformaciones se apliquen desde el centro de la imagen
    PreviewImagen.style.transformOrigin = "center";

    // Aplicamos las transformaciones de rotación y escala (flip)
    PreviewImagen.style.transform = `rotate(${Rotate}deg) scale(${FlipHorizontal}, ${FlipVertical})`;

    // Aplicamos los filtros de brillo, saturación, inversión y escala de grises
    PreviewImagen.style.filter = `brightness(${Brightness}%) saturate(${Saturation}%) invert(${Inversion}%) grayscale(${Grayscale}%)`;
}

const loadImagen = () => {
    let file = ArchivoInput.files[0];
    if (!file) return;
    PreviewImagen.src = URL.createObjectURL(file);

    PreviewImagen.addEventListener("load", () => {
        RestFiltros.click();
        document.querySelector(".Contenedor_publicar").classList.remove("disable");
    });
}

FiltroOpciones.forEach(option => {
    option.addEventListener("click", () => {
        document.querySelector(".Filtro .active").classList.remove("active");
        option.classList.add("active");
        FiltroNombre.innerText = option.innerText;

        if (option.id === "Brightness") {
            FiltroSlider.max = "200";
            FiltroSlider.value = Brightness;
            FiltroValor.innerText = `${Brightness}%`;
        } else if (option.id === "Saturation") {
            FiltroSlider.max = "200";
            FiltroSlider.value = Saturation;
            FiltroValor.innerText = `${Saturation}%`;
        } else if (option.id === "Inversion") {
            FiltroSlider.max = "100";
            FiltroSlider.value = Inversion;
            FiltroValor.innerText = `${Inversion}%`;
        } else if (option.id === "Grayscale") {
            FiltroSlider.max = "100";
            FiltroSlider.value = Grayscale;
            FiltroValor.innerText = `${Grayscale}%`;
        }
    });
});

const updateFilter = () => {
    FiltroValor.innerText = `${FiltroSlider.value}%`;
    const SelectionFiltro = document.querySelector(".Filtro .active");

    if (SelectionFiltro.id === "Brightness") {
        Brightness = FiltroSlider.value;
    } else if (SelectionFiltro.id === "Saturation") {
        Saturation = FiltroSlider.value;
    } else if (SelectionFiltro.id === "Inversion") {
        Inversion = FiltroSlider.value;
    } else if (SelectionFiltro.id === "Grayscale") {
        Grayscale = FiltroSlider.value;
    }

    applicarFiltro();
}

//Rotar imagen
RotacionOpcion.forEach(option => {
    option.addEventListener("click", () => {
        if (option.id === "left") {
            Rotate -= 90;
        }
        if (option.id === "right") {
            Rotate += 90;
        }
        if (option.id === "horizontal") {
            FlipHorizontal = FlipHorizontal === 1 ? -1 : 1;
        }
        if (option.id === "vertical") {
            FlipVertical = FlipVertical === 1 ? -1 : 1;
        }
        applicarFiltro();
    });
});

//Reset de los filtros
const restFiltros = () => {
    Brightness = 100, Saturation = 100, Inversion = 0, Grayscale = 0;
    Rotate = 0, FlipHorizontal = 1, FlipVertical = 1;
    FiltroOpciones[0].click();
    applicarFiltro();
}

// GUardar los cambios de la imagen
const guardarImagen = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = PreviewImagen.naturalWidth;
    canvas.height = PreviewImagen.naturalHeight;

    ctx.filter = `brightness(${Brightness}%) saturate(${Saturation}%) invert(${Inversion}%) grayscale(${Grayscale}%)`;
    ctx.translate(canvas.width / 2, canvas.height / 2);
    if (Rotate !== 0) {
        ctx.rotate(Rotate * Math.PI / 180);
    }

    ctx.scale(FlipHorizontal, FlipVertical);
    ctx.drawImage(PreviewImagen, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);

    return canvas.toDataURL();
}

// Función para mostrar el popup de previsualización
function mostrarPrevisualizacion() {
    const imagenEditadaURL = guardarImagen();
    ImagenPrevia.src = imagenEditadaURL;
    TituloPrevia.textContent = TituloImagen.value;
    DescripcionPrevia.textContent = DescripcionImagen.value;

    PopupPrevisualizacion.style.display = 'flex';
    setTimeout(() => {
        PopupPrevisualizacion.classList.add('visible');
    }, 10);
}

// Función para ocultar el popup de previsualización
function ocultarPrevisualizacion() {
    PopupPrevisualizacion.classList.remove('visible');
    setTimeout(() => {
        PopupPrevisualizacion.style.display = 'none';
    }, 500);
}

// Event listener para mostrar el popup de previsualización al presionar el botón Finalizar publicación
FinalizarPublicacion.addEventListener('click', mostrarPrevisualizacion);

// Event listener para ocultar el popup de previsualización al presionar el botón Cancelar en el popup de previsualización
CancelarPublicacion.addEventListener('click', ocultarPrevisualizacion);

ArchivoInput.addEventListener("change", loadImagen);
FiltroSlider.addEventListener("input", updateFilter);
RestFiltros.addEventListener("click", restFiltros);
Continuar.addEventListener("click", guardarImagen);
CargarImagenBtn.addEventListener("click", () => ArchivoInput.click());



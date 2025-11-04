const Boton_izquierdo = document.querySelector(".Boton_izquierdo"),
    Boton_derecho = document.querySelector(".Boton_derecho"),
    Slider = document.querySelector(".Carruseles"),
    SliderSections = document.querySelectorAll(".Slider_section");

let counter = 1;
const widthImg = 100 / SliderSections.length;

// Clonamos la primera y última imagen
const firstClone = SliderSections[0].cloneNode(true);
const lastClone = SliderSections[SliderSections.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

Slider.appendChild(firstClone); // Añadimos la primera al final
Slider.prepend(lastClone); // Añadimos la última al principio

// Configuramos el ancho dinámico para el nuevo carrusel
Slider.style.transform = `translateX(-${widthImg}%)`;

Boton_derecho.addEventListener("click", () => moveToRight());
Boton_izquierdo.addEventListener("click", () => moveToLeft());

let autoSlide = setInterval(() => {
    moveToRight();
}, 5000);

function moveToRight() {
    if (counter >= SliderSections.length) {
        Slider.style.transition = 'all ease 0.6s';
        counter++;
        Slider.style.transform = `translateX(-${counter * widthImg}%)`;
        clearInterval(autoSlide); // Detener el auto-slide cuando llegamos al final
        setTimeout(() => {
            // Reiniciar el carrusel
            Slider.style.transition = 'none';
            counter = 1;
            Slider.style.transform = `translateX(-${widthImg}%)`;
            autoSlide = setInterval(() => {
                moveToRight();
            }, 5000); // Reiniciar el auto-slide
        }, 600); // Pausa para mostrar la última imagen antes de reiniciar
        return;
    }
    counter++;
    Slider.style.transform = `translateX(-${counter * widthImg}%)`;
    Slider.style.transition = 'all ease 0.6s';
}

function moveToLeft() {
    if (counter <= 0) {
        Slider.style.transition = 'all ease 0.6s';
        counter--;
        Slider.style.transform = `translateX(-${counter * widthImg}%)`;
        clearInterval(autoSlide); // Detener el auto-slide cuando llegamos al inicio
        setTimeout(() => {
            // Reiniciar el carrusel
            Slider.style.transition = 'none';
            counter = SliderSections.length - 1;
            Slider.style.transform = `translateX(-${counter * widthImg}%)`;
            autoSlide = setInterval(() => {
                moveToRight();
            }, 5000); // Reiniciar el auto-slide
        }, 600); // Pausa para mostrar la primera imagen antes de reiniciar
        return;
    }
    counter--;
    Slider.style.transform = `translateX(-${counter * widthImg}%)`;
    Slider.style.transition = 'all ease 0.6s';
}

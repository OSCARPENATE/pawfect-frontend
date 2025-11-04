let paginaActual = 1;
let elementosPorPagina = 6; // Valor predeterminado
const totalPublicaciones = document.querySelectorAll('.Mascota').length; // Obtén el número total de elementos
let totalPaginas = Math.ceil(totalPublicaciones / elementosPorPagina); // Total de páginas

function generarPaginador() {
    const numerosPagina = document.getElementById('Numeros_pagina');
    numerosPagina.innerHTML = '';

    totalPaginas = Math.ceil(totalPublicaciones / elementosPorPagina);

    // Botones de paginación
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');

    btnPrev.style.display = paginaActual > 1 ? 'inline-block' : 'none';
    btnNext.style.display = paginaActual < totalPaginas ? 'inline-block' : 'none';

    // Mostrar páginas alrededor de la página actual
    let inicio = Math.max(paginaActual - 1, 1);
    let fin = Math.min(paginaActual + 1, totalPaginas);

    // Asegurarse de que siempre se muestren 3 números (si es posible)
    if (inicio === 1) {
        fin = Math.min(3, totalPaginas);
    } else if (fin === totalPaginas) {
        inicio = Math.max(totalPaginas - 2, 1);
    }

    for (let i = inicio; i <= fin; i++) {
        const span = document.createElement('span');
        span.textContent = i;
        span.classList.add('pagina');
        if (i === paginaActual) {
            span.classList.add('activo'); // Resalta la página actual
        }
        span.addEventListener('click', () => {
            paginaActual = i;
            mostrarPagina(paginaActual);
            generarPaginador();
        });
        numerosPagina.appendChild(span);
    }
}

function mostrarPagina(pagina) {
    const publicaciones = document.querySelectorAll('.Mascota');
    publicaciones.forEach((publicaciones, index) => {
        publicaciones.style.display = (index >= (pagina - 1) * elementosPorPagina && index < pagina * elementosPorPagina) ? 'block' : 'none';
    });
}

function paginaSiguiente() {
    if (paginaActual < totalPaginas) {
        paginaActual++;
        mostrarPagina(paginaActual);
        generarPaginador();
    }
}

function paginaAnterior() {
    if (paginaActual > 1) {
        paginaActual--;
        mostrarPagina(paginaActual);
        generarPaginador();
    }
}

function cambiarElementosPorPagina() {
    elementosPorPagina = parseInt(document.getElementById('Elementos_porpagina').value);
    paginaActual = 1; // Restablecer a la primera página
    mostrarPagina(paginaActual);
    generarPaginador();
}

// Inicializa la paginación
generarPaginador();
mostrarPagina(1);

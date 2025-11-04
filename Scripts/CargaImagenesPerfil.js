// Cargar imagen de avatar
document.getElementById('Boton_avatar').addEventListener('click', function() {
    document.getElementById('inputAvatar').click();
});

document.getElementById('inputAvatar').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.src = e.target.result;

        img.onload = function() {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            // Dimensiones para el recorte
            const size = Math.min(img.width, img.height);
            const startX = (img.width - size) / 2;
            const startY = (img.height - size) / 2;

            canvas.width = size;
            canvas.height = size;

            // Dibujar el centro de la imagen en el canvas
            ctx.drawImage(img, startX, startY, size, size, 0, 0, size, size);

            // Actualizar la imagen de perfil con la imagen recortada
            const avatar = document.getElementById('avatar');
            avatar.src = canvas.toDataURL();
        };
    };

    reader.readAsDataURL(file);
});

// Cargar imagen de portada
document.getElementById('Boton_portada').addEventListener('click', function() {
    document.getElementById('inputPortada').click();
});

document.getElementById('inputPortada').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const portada = document.getElementById('portada');

    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const img = new Image();
            img.src = e.target.result;

            img.onload = function() {
                // Crear un canvas para redimensionar la imagen manteniendo la proporción
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                
                const aspectRatio = img.width / img.height;
                const containerWidth = 850; // Ancho del contenedor
                let containerHeight = containerWidth / aspectRatio;

                // Asegurar que la altura no sea menor ni mayor a los valores establecidos
                const minHeight = 288; 
                const maxHeight = 500; 

                if (containerHeight < minHeight) {
                    containerHeight = minHeight;
                } else if (containerHeight > maxHeight) {
                    containerHeight = maxHeight;
                }

                // Ajustar el tamaño del canvas al contenedor
                canvas.width = containerWidth;
                canvas.height = containerHeight;

                // Redimensionar y centrar la imagen en el canvas
                const newWidth = containerWidth;
                const newHeight = containerWidth / aspectRatio;
                const offsetX = (canvas.width - newWidth) / 2;
                const offsetY = (canvas.height - newHeight) / 2;

                ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);

                // Establecer la imagen redimensionada como fondo del contenedor
                portada.style.backgroundImage = `url(${canvas.toDataURL('image/jpeg')})`; 
                portada.style.backgroundSize = 'cover'; 
                portada.style.backgroundPosition = 'center'; 

                // Ajustar la altura del contenedor según la imagen
                portada.style.height = `${containerHeight}px`;
            };
        };

        reader.readAsDataURL(file); 
    }
});

// Funcionalidad para resetear el avatar
document.getElementById('Reset_avatar').addEventListener('click', function() {
    const avatar = document.getElementById('avatar');
    avatar.src = 'Imagens/Sinperfil.jpg'; 
    document.getElementById('inputAvatar').value = '';
});

// Funcionalidad para resetear la portada
document.getElementById('Reset_portada').addEventListener('click', function() {
    const portada = document.getElementById('portada');
    portada.style.backgroundImage = '';
    portada.style.height = '288px';
    document.getElementById('inputPortada').value = '';
});

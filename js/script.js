function mostrarDescripcion(indice) {
    // Ocultar todas las descripciones
    const descripciones = document.querySelectorAll('.descripcion');
    descripciones.forEach(function(desc) {
        desc.style.display = 'none';
    });

    // Mostrar la descripción correspondiente
    const descripcion = document.getElementById('descripcion-' + indice);
    descripcion.style.display = 'block';
}

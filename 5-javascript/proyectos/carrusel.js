  let indice = 0;
    const imagenes = document.querySelectorAll('#carrusel img');

    function cambiarImagen(direccion) {
      imagenes[indice].classList.remove('activa');
      indice = (indice + direccion + imagenes.length) % imagenes.length;
      imagenes[indice].classList.add('activa');
    }
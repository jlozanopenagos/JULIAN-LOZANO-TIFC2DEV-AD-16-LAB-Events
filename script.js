const boton = document.getElementById('botonEstilo');

boton.addEventListener('click', (event) => {
    const parrafo1 = document.getElementById('parrafo');
    parrafo1.style.fontFamily = 'Arial';
    parrafo1.style.fontSize = '20px';
    parrafo1.style.color = 'red';
});
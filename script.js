const boton = document.getElementById('botonEstilo');

boton.addEventListener('click', (event) => {
    const parrafo1 = document.getElementById('parrafo');
    parrafo1.style.fontFamily = 'Arial';
    parrafo1.style.fontSize = '20px';
    parrafo1.style.color = 'red';
});

const form1 = document.getElementById('form1');

form1.addEventListener('submit', (event) => {
    event.preventDefault();
    const fname = document.forms['form1']['fname'].value;
    const lname = document.forms['form1']['lname'].value;
    console.log(`TAREA #2Nombre: ${fname} - Apellido: ${lname}`);
});

const botonEnlaces = document.getElementById('botonEnlaces');

botonEnlaces.addEventListener('click', (event) => {
    const enlaces = document.querySelectorAll('a');
    const totalEnlaces = enlaces.length;
    const primerEnlace = enlaces[0];
    const ultimoEnlace = enlaces[totalEnlaces - 1];
    alert(`TAREA #3Total de enlaces: ${totalEnlaces} - Primer enlace: ${primerEnlace.href} - Último enlace: ${ultimoEnlace.href}`);
});


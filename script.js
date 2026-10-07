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
    console.log(fname, lname);
});

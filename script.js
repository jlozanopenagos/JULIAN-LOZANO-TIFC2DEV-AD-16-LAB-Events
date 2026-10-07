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

const contenedor = document.getElementById('contenedor');
const segundos = document.querySelectorAll('.segundo');
const tercerosenOls = document.querySelector('ol .tercero');

// 4. Dale el texto "¡Hola!" a la sección con id="contenedor"
// NOTA: Si ejecutas esto, reemplaza el contenido interno de #contenedor (borrando el <ul>).
// Si quieres ver el nuevo <li> en pantalla, puedes comentar esta línea mientras pruebas.
contenedor.querySelector("p").textContent = "¡Hola!";

// 5. Añade la clase principal al div con class="footer"
const footer = document.querySelector('.footer');
footer.classList.add('principal');

// 6. Elimina la clase principal del div con class="footer"
footer.classList.remove('principal');

// 7. Crea un nuevo elemento li
const nuevoLi = document.createElement('li');

// 8. Dale al li el texto "cuatro"
nuevoLi.textContent = 'cuatro';

// 9. Añade el li al elemento ul
const ul = document.querySelector('ul');
if (ul) {
    ul.append(nuevoLi);
}


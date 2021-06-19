require('dotenv').config();

const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

// Como DOMContentLoaded, pero usando window en vez de document
window.addEventListener('load', () => {
  formulario.addEventListener('submit', buscarClima);
});

function buscarClima(e) {
  e.preventDefault();

  // Validar
  const ciudad = document.querySelector('#ciudad').value;
  const pais = document.querySelector('#pais').value;

  if (ciudad === '' || pais === '') {
    mostrarError('Ambos campos son obligatorios');
    return;
  }

  // Consultariamos la API
  consultarAPI(ciudad, pais);
}

function mostrarError(mensaje) {
  const alerta = document.querySelector('.bg-red-100');

  if (!alerta) {
    // Crear una alerta
    const alerta = document.createElement('div');

    alerta.classList.add(
      'bg-red-100',
      'border-red-400',
      'text-red-700',
      'px-4',
      'py-3',
      'rounded',
      'max-w-md',
      'mx-auto',
      'mt-6',
      'text-center'
    );

    alerta.innerHTML = `
    <strong class="font-bold">Error!</strong>
    <span class="block">${mensaje}</span>
  `;

    container.appendChild(alerta);

    // Se elimine la alerta después de 3 segundos
    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }
}

function consultarAPI(ciudad, pais) {
  const appId = process.env.OPENWEATHER_KEY;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&units=metric&lang=es&appid=${appId}`;

  // Muestra un spinner de carga
  spinner();

  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      // Limpiar el HTML previo
      limpiarHTML();

      if (datos.cod === '404') {
        mostrarError('Ciudad no encontrada');
        return;
      }

      // Imprime la respuesta en el HTML
      mostrarClima(datos);
    });
}

function mostrarClima(datos) {
  const {
    name,
    main: { temp, temp_max, temp_min },
  } = datos;

  const nombreCiudad = document.createElement('p');
  nombreCiudad.textContent = `Clima en ${name}`;
  nombreCiudad.classList.add('font-bold', 'text-2xl');

  const actual = document.createElement('p');
  actual.innerHTML = `${parseInt(temp)} &#8451;`;
  actual.classList.add('font-bold', 'text-6xl');

  const tempMaxima = document.createElement('p');
  tempMaxima.innerHTML = `Max: ${parseInt(temp_max)} &#8451;`;
  tempMaxima.classList.add('text-xl');

  const tempMinima = document.createElement('p');
  tempMinima.innerHTML = `Min: ${parseInt(temp_min)} &#8451;`;
  tempMinima.classList.add('text-xl');

  const resultadoDiv = document.createElement('div');
  resultadoDiv.classList.add('text-center', 'text-white');
  resultadoDiv.appendChild(nombreCiudad);
  resultadoDiv.appendChild(actual);
  resultadoDiv.appendChild(tempMaxima);
  resultadoDiv.appendChild(tempMinima);

  resultado.appendChild(resultadoDiv);
}

function limpiarHTML() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}

function spinner() {
  limpiarHTML();

  const divSpinner = document.createElement('div');
  divSpinner.classList.add('sk-fading-circle');

  divSpinner.innerHTML = `
    <div class="sk-circle1 sk-circle"></div>
    <div class="sk-circle2 sk-circle"></div>
    <div class="sk-circle3 sk-circle"></div>
    <div class="sk-circle4 sk-circle"></div>
    <div class="sk-circle5 sk-circle"></div>
    <div class="sk-circle6 sk-circle"></div>
    <div class="sk-circle7 sk-circle"></div>
    <div class="sk-circle8 sk-circle"></div>
    <div class="sk-circle9 sk-circle"></div>
    <div class="sk-circle10 sk-circle"></div>
    <div class="sk-circle11 sk-circle"></div>
    <div class="sk-circle12 sk-circle"></div>
  `;

  resultado.appendChild(divSpinner);
}

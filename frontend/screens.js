// scripts.js

// eslint-disable-next-line no-unused-vars
function cambiarSeccion () {
  const menu = document.getElementById('menu-desplegable')
  const seccionSeleccionada = menu.value

  // Ocultar todas las secciones
  const sections = document.querySelectorAll('.section')
  sections.forEach(section => section.classList.remove('active'))

  // Mostrar la sección seleccionada
  const activeSection = document.getElementById(seccionSeleccionada)
  activeSection.classList.add('active')
}

function cambiarVista (vista) {
  // Ocultar todas las secciones primero
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active')
  })
  // Mostrar la sección seleccionada
  document.getElementById(vista).classList.add('active')
}

// eslint-disable-next-line no-unused-vars
function mostrarVista (seccion) {
  // Función para volver a la pantalla principal de Clientes
  cambiarVista(seccion)
}

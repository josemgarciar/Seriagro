document.addEventListener('DOMContentLoaded', function () {
  // Obtener elementos
  const openModalBtn = document.getElementById('openModalBtn')
  const modal = document.getElementById('confirmationModal')
  const closeBtn = document.querySelector('.close')
  const confirmBtn = document.getElementById('confirmBtn')
  const cancelBtn = document.getElementById('cancelBtn')

  // Abrir el modal al hacer clic en "Aceptar"
  openModalBtn.addEventListener('click', function () {
    modal.style.display = 'block'
  })

  // Cerrar el modal al hacer clic en "X"
  closeBtn.addEventListener('click', function () {
    modal.style.display = 'none'
  })

  // Cerrar el modal al hacer clic en "Cancelar"
  cancelBtn.addEventListener('click', function () {
    modal.style.display = 'none'
  })

  // Confirmar la acción al hacer clic en "Sí, completar"
  confirmBtn.addEventListener('click', function () {
    modal.style.display = 'none'
    // Aquí puedes añadir la lógica para completar la acción
  })

  // Cerrar el modal si se hace clic fuera del contenido del modal
  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = 'none'
    }
  })
})

document.addEventListener('DOMContentLoaded', function () {
  // Selecciona el formulario usando su ID
  const clientForm = document.getElementById('ClientForm')

  // Añade un evento para cuando se envíe el formulario
  clientForm.addEventListener('submit', function (event) {
    event.preventDefault()

    // Recoge los datos del formulario
    const formData = {
      nombre: document.getElementById('nombre').value,
      nif: document.getElementById('nif').value,
      domicilio: document.getElementById('domicilio').value,
      CP: document.getElementById('CP').value,
      localidad: document.getElementById('localidad').value,
      telefono: document.getElementById('telefono').value,
      email: document.getElementById('email').value,
      cuota: document.getElementById('cuota').value,
      iva: document.getElementById('cuota').value,
      comentarios: document.getElementById('comentarios').value
    }

    // Aquí puedes manejar los datos recogidos
    console.log('Datos del formulario:', formData)
  })
})

class Cliente {
    constructor(nombre, nif, domicilio, codigoPostal, localidad, telefono, email, cuota, iva, comentarios) {
      this.nombre = nombre;
      this.nif = nif;
      this.domicilio = domicilio;
      this.codigoPostal = codigoPostal;
      this.localidad = localidad;
      this.telefono = telefono;
      this.email = email;
      this.cuota = cuota;
      this.iva = iva;
      this.comentarios = comentarios;
    }
  
    obtenerNombre() {
      return this.nombre;
    }
  
    obtenerNif() {
      return this.nif;
    }
  
    obtenerDomicilio() {
      return this.domicilio;
    }
  
    obtenerCodigoPostal() {
      return this.codigoPostal;
    }
  
    obtenerLocalidad() {
      return this.localidad;
    }
  
    obtenerTelefono() {
      return this.telefono;
    }
  
    obtenerEmail() {
      return this.email;
    }
  
    obtenerCuota() {
      return this.cuota;
    }
  
    obtenerIva() {
      return this.iva;
    }
  
    obtenerComentarios() {
      return this.comentarios;
    }

    establecerNombre(nombre) {
      this.nombre = nombre;
    }
  
    establecerNif(nif) {
      this.nif = nif;
    }
  
    establecerDomicilio(domicilio) {
      this.domicilio = domicilio;
    }
  
    establecerCodigoPostal(codigoPostal) {
      this.codigoPostal = codigoPostal;
    }
  
    establecerLocalidad(localidad) {
      this.localidad = localidad;
    }
  
    establecerTelefono(telefono) {
      this.telefono = telefono;
    }
  
    establecerEmail(email) {
      this.email = email;
    }
  
    establecerCuota(cuota) {
      this.cuota = cuota;
    }
  
    establecerIva(iva) {
      this.iva = iva;
    }
  
    establecerComentarios(comentarios) {
      this.comentarios = comentarios;
    }
  
    mostrarInformacion() {
      return `
        Nombre: ${this.nombre}
        NIF/CIF: ${this.nif}
        Domicilio: ${this.domicilio}
        Código Postal: ${this.codigoPostal}
        Localidad: ${this.localidad}
        Teléfono: ${this.telefono}
        Email: ${this.email}
        Cuota: ${this.cuota}
        IVA: ${this.iva}
        Comentarios: ${this.comentarios}
      `;
    }
  }
  
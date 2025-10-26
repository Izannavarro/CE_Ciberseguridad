const Paciente = {
  constructor () {
    this.nombre = 'Pepe';
    this.apellidos = 'Pepito';
    this.fechaDeNacimiento = '23/09/2000';
    this.altura = '187';
    
      
    return {
      nombre: this.nombre,
      apellidos: this.apellidos,
      fechaDeNacimiento: this.fechaDeNacimiento,
      altura: this.altura,
      
    }
  },

  /**
   * Setters.
   */
  modificarNombre(newName) {
    if (!newName) {
      return "Debes añadir tu nuevo nombre";
    } else {
      this.nombre = newName;
      return `Tu nuevo nombre es ${this.nombre}`;
    }
  },
  modificarApellidos(nuevoApellidos) {
    if (!nuevoApellidos) {
      return "Debes añadir tu nuevo apellido";
    } else {
      this.apellidos = nuevoApellidos;
      return `Tu nuevo apellido es ${this.apellidos}`;
    }
  },
  modificarFechaNacimento(nuevaFechaDeNacimiento) {
    if (!nuevaFechaDeNacimiento) {
      return "Debes añadir tu nueva fecha de nacimiento";
    } else {
      this.fechaDeNacimiento = nuevaFechaDeNacimiento;
      return `Tu nueva fecha de nacimiento es ${this.fechaDeNacimiento}`;
    }
  },
  modificarBascula(bascula) {
    if (!bascula.peso) {
      return "Debes añadir mínimo tu peso";
    } else {
      Bascula.anotarPesoAltura(bascula.peso, bascula?.altura, bascula?.fecha);
      return "¡Tu nuevo peso se ha registrado correctamente!";
    }
  },
  
  
  /**
   * Getters.
   */
  saludar() {
    return `Hola soy ${this.nombre}`;
  },
  obtenerNombre() {
    return this.nombre;
  },
  obtenerApellidos() {
    return this.apellidos;
  },
  obtenerFechaNacimiento() {
    return this.fechaDeNacimiento;
 
  },
  
  
}


module.exports = Paciente;
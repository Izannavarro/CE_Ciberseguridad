const Paciente = require("./Paciente");
const { expect } = require("chai");

// Creamos una instancia del paciente (ahora mismo estabas llamando constructor directamente, eso no lo hace bien)
const paciente = Object.create(Paciente);
paciente.constructor();

describe('Pruebas de la clase Paciente', () => {

  it('Debe tener el nombre "Pepe"', () => {
    expect(paciente.obtenerNombre()).to.equal('Pepe');
  });

  it('Debe tener los apellidos "Pepito"', () => {
    expect(paciente.obtenerApellidos()).to.equal('Pepito');
  });

  it('Debe tener la fecha de nacimiento "23/09/2000"', () => {
    expect(paciente.obtenerFechaNacimiento()).to.equal('23/09/2000');
  });

  it('El método saludar() debe devolver "Hola soy Pepe."', () => {
    expect(paciente.saludar()).to.equal('Hola soy Pepe');
  });
});
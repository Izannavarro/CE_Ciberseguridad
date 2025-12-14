const Utils = require("../src/utils");
const { expect } = require("chai");



describe('Pruebas de los Utils', () => {

  it('Tener 20 es ser mayor de edad! (se espera true)', () => {
    expect(Utils.esMayorEdad(20) == true);
  });

  it('Tener 15 es ser menor de edad! (se espera false)', () => {
    expect(Utils.esMayorEdad(15) == false);
  });

  it('Sumar 2 + 3 = 5', () => {
    expect(Utils.sumar(2,3)).to.equal(5);
  });

  it('obtenerDominio debe devolver el dominio (si es "https://example.com/page" devuelve "example.com")', () => {
    expect(Utils.obtenerDominio("https://example.com/page"))
      .to.equal('example.com');
  });

});

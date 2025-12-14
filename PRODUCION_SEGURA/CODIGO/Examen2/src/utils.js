function esMayorEdad(edad) {
  return edad >= 18;
}

function sumar(a, b) {
  return a + b;
}

function obtenerDominio(url) {
  try {
    const u = new URL(url);
    return u.hostname;
  } catch {
    return null;
  }
}

module.exports = { esMayorEdad, sumar, obtenerDominio };

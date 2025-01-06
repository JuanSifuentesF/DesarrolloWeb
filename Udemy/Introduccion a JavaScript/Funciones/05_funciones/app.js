function obtenerAleatorio() {
  return Math.random();
}

function obtenerNombre() {
  return "Juan";
}

function esMayor05() {
  if (obtenerAleatorio() > 0.5) {
    return true;
  } else {
    return false;
  }
}

console.log(esMayor05());

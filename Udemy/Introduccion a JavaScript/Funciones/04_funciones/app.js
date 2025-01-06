function imprimir(fn,fn2, var1, va2r, obj1, obj2) {
  fn();
}

var persona = {
  nombre: "Juan",
  apellido: "Padilla",
};

var miFuncion = function () {
    console.log("miFuncion");
}

imprimir(function () {
  console.log("Funcion Anonima");
});

imprimir(miFuncion);
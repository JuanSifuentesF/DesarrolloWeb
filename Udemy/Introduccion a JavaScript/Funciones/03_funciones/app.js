function imprimir(persona){
    console.log(persona.nombre + ' ' + persona.apellido);
    persona.nombre = "Maria";
}

var persona = {
    nombre: 'Juan',
    apellido: 'Perez'
}

imprimir(persona); // Juan Perez
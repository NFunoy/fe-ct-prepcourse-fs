function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
// FOREACH
var mayus = [];


array.forEach(element => {

   (mayus.push(element.toUpperCase()))

});

return mayus




}

module.exports = convertirStringAMayusculas;

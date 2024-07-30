function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

var esPar = [];

array.forEach(element => {
  if (element % 2 === 0){
  esPar.push(element)
  }
});
return esPar
}

module.exports = filtrarNumerosPares;


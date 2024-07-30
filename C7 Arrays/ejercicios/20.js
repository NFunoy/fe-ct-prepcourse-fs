function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:

  var esIgual = array[0]
  for(var i = 0 ; i < array.length ; i++){
    if (array[i] !== esIgual){
      return false

    }

  }
return true
}

module.exports = todosIguales;

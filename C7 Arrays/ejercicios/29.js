function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
if ( numeros.length === 0){
  return null
}

numeros.sort((a, b) => a - b)

for( var i = 0 ; i < numeros.length ; i ++){

  var numFaltante = numeros [0] + i;

  if (numeros[i] !== numFaltante){
    return numFaltante
  
  }
 
  }
return null
}

module.exports = encontrarNumeroFaltante;
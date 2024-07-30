function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:

var string = palabras [0]

  for( var i = 1 ; i < palabras.length ; i ++){

             string = string + " " + palabras[i]

}

return string
}

module.exports = dePalabrasAFrase;

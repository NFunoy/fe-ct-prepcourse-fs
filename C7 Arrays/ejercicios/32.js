function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:

  
    let stringLimpio = string.replace(/\s+/g, '').toLowerCase();
    
    let longitud = stringLimpio.length;
    
    for (let i = 0; i < longitud / 2; i++) {
      if (stringLimpio[i] !== stringLimpio[longitud - 1 - i]) {
        return false;
      }
    }
    return true;
  }



module.exports = esPalindromo;
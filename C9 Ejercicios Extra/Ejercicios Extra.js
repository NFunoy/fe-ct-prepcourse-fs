/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:

    // Usamos Object.entries para obtener un array de pares clave-valor
    const arrayDeArreglos = Object.entries(objeto);
  
    // Retornamos el array de arreglos resultante
    return arrayDeArreglos;
  }


function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  
  // Inicializamos un objeto vacío para almacenar los conteos de letras
  const charCount = {};

  // Recorremos el string
  for (let char of string) {
    // Si el carácter ya está en el objeto, incrementamos su contador
    if (charCount[char]) {
      charCount[char]++;

    } else {
      // Si no, lo inicializamos con 1
      charCount[char] = 1;
    }
  }

  // Creamos un objeto ordenado
  const orderedCharCount = {};
  // Obtenemos las claves del objeto (las letras) y las ordenamos
  Object.keys(charCount).sort().forEach(key => {
    // Añadimos cada letra ordenada al objeto final
    orderedCharCount[key] = charCount[key];
  });

  // Retornamos el objeto final con las letras en orden alfabético
  return orderedCharCount;
}


function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  let minúscula ='';
  let mayuscula = '';


  for (let letras of string) {
    if (letras === letras.toUpperCase()){
      mayuscula += letras;
    }
    else {
      minúscula += letras
    }
  }
return (mayuscula+minúscula)
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:}
  
let arrayOrdenado = frase.split(" ")

 let arrayInvertido = arrayOrdenado.map(function(palabra){
  return (palabra.split("").reverse().join(""))
 })
return(arrayInvertido.join(" "));
  }


function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  

 if(numero.toString() === numero.toString().split("").reverse().join("")){
    return "Es capicua"
}
    return "No es capicua"
}



function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  
let stringSinLetras = ""

for (const i of string) {
  if (i !== "a" && i !== "b" && i !== "c") 
    stringSinLetras += i
}
return (stringSinLetras);
}


function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:

return (arrayOfStrings.sort((palabra1 , palabra2) => palabra1.length - palabra2.length))



}


function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
let nuevoArreglo = []
for (const i of array1) {
  for (const j of array2) { 
    if (i === j){nuevoArreglo.push(i)  
      break;
    }
  }
}
return nuevoArreglo
}
buscoInterseccion([4,2,3],[1,3,4])
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};

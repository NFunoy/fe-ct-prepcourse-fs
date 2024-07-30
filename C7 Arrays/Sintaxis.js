
//                 SINTAXIS ARRAYS


//var listaDeCompras = [];
//listaDeCompras[2] = "lechugas"
//listaDeCompras[3] = "Tomates"

//var elementoDelArray = listaDeCompras[2]
//console.log(elementoDelArray)


//var listaDeCompras = [];
// //listaDeCompras[2] = "lechugas"
//listaDeCompras[4] = "Tomates"
//console.log(listaDeCompras.length);
//var elementoDelArray = listaDeCompras[2]
//console.log(elementoDelArray)*/

//               METODOS DE INCERCION


/// PUSH y UNSHIFT
var colores = ['Amarillo', 'Azul'];
colores.push('Rojo');
colores.unshift('Verde');

/*//console.log(colores);

// POP y SHIFT
colores.shift();
colores.pop();

//console.log(colores);*/

 //                          METODOS VARIOS              

/*// INCLUDES
var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
var existeDali = pintores.includes('Dalí');

console.log(existeDali);*/

/*// EVERY
var numeros = [ 1, 6, 8, 9, 43 ];
var cumplenCondicion = numeros.every( ( num ) => { num > 5 } );

console.log(cumplenCondicion);*/

/*// SPLIT
var palabra = 'Henri';
var palabraSeparada = palabra.split('');

console.log(palabraSeparada);*/

/*// JOIN
var palabraArreglada = palabraSeparada.join('');

console.log(palabraArreglada);*/


//               METODOS DE RECORRIDO

// FOREACH
var numeros = [ 1, 2, 3, 4 ];
numeros.forEach( (num) => { console.log (num) } )


// // MAP
// var numeros = [ "casa", "barco","buena", "cuanto" ];
// var masUno = numeros.map( (num) => { return num.toUpperCase } );

// console.log(masUno);


//         BUCLES

// FOR
/*var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}*/

/*// WHILE
var arr = [];
while (arr.length < 5) {
   arr.push('Camilo');
}
console.log(arr);*/
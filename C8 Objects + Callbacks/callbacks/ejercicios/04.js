function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:
 var sumatotal = 0 ;

for (var i = 0 ; i < arrayOfNumbers.length ; i++){
   sumatotal += arrayOfNumbers[i]

}
cb(sumatotal)
}




module.exports = sumarArray;

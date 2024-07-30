function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:



  var sum = 1

  for (var i = a ; i <= b ; i ++){

     sum = sum * i

}  

   
   return Math.abs (sum)


}
module.exports = productoEntreNúmeros;
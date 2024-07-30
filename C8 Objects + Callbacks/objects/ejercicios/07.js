function sort(sortBy, list) {
   // La función sort recibe dos parámetros:
   // sortBy: una letra (string).
   // list: un arreglo de objetos.
   // La función deberá devolver la lista de objetos ordenada de forma DESCENDIENTE
   // a partir de la letra recibida. Por ejemplo:
   // recibes --> ("a", [{ a: 1, b: 3 }, { a: 3, b: 2 }, { a: 2, b: 40 }])
   // retorna --> [{ a: 3, b: 2 }, { a: 2, b: 40 }, { a: 1, b: 3 }]
   // Tu código:
   return list.sort((a, b) => {
      // Compara las propiedades de los objetos a y b usando sortBy
      if (a[sortBy] > b[sortBy]) {
        return -1; // Si a[sortBy] es mayor, se ordena antes (descendente)
      }
      if (a[sortBy] < b[sortBy]) {
        return 1; // Si a[sortBy] es menor, se ordena después (descendente)
      }
      return 0; // Si son iguales, no se cambia el orden
    });
}

module.exports = sort;

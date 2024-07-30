const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:


// Inicializa un contador
let contador = 0;
  
// Itera sobre las propiedades del objeto
for (let propiedad in objeto) {
  // Asegúrate de que la propiedad sea propia del objeto y no heredada
  if (objeto.hasOwnProperty(propiedad)) {
    contador++;
  }
}

// Retorna el contador
return contador;
};

module.exports = contarPropiedades;

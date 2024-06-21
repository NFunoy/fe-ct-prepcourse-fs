function mayoriaDeEdad(edad) {
  // Determinar si la persona puede ingresar al evento según su edad.
  // Si tiene 18 años o más, retorna el string: "Allowed".
  // Caso contrario: "Not allowed".
  // Tu código:

  //if (18 > edad ) return "Not allowed"
  //else return "Allowed"


  //ej: OPERADOR TERNARIO
   
  return edad >= 18 ? "Allowed" : "Not allowed"


}

module.exports = mayoriaDeEdad;

function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:

   str1 = str1.toLowerCase().replace(/\s+/g, '');
   str2 = str2.toLowerCase().replace(/\s+/g, '');

   const sortedStr1 = str1.split('').sort().join('');
   const sortedStr2 = str2.split('').sort().join('');
 
   // Comparamos los resultados ordenados
   return sortedStr1 === sortedStr2;
}

module.exports = esAnagrama;


const palindromes = function (str) {
  // Convertir a minúsculas y limpiar la cadena de caracteres no válidos
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, ""); // Reemplazar todo lo que no sea letras o números con una cadena vacía

  // Comprobar si la cadena limpiada es un palíndromo
  const isPalindrome = cleanedStr === cleanedStr.split("").reverse().join("");
  return isPalindrome; // Devuelve true o false
};

// Do not edit below this line
module.exports = palindromes;

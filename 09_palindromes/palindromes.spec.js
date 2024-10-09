const palindromes = require('./palindromes')

describe('palindromes', () => {
  test('works with single words', () => {
    expect(palindromes('racecar')).toBe(true);
  });
  test('works with punctuation ', () => {
    expect(palindromes('racecar!')).toBe(true);
  });
  test('works with upper-case letters ', () => {
    expect(palindromes('Racecar!')).toBe(true);
  });
  test('works with multiple words', () => {
    expect(palindromes('A car, a man, a maraca.')).toBe(true);
  });
  test('works with multiple words', () => {
    expect(palindromes('Animal loots foliated detail of stool lamina.')).toBe(true);
  });
const palindromes = function (str) {
  // Convertir a minúsculas y limpiar la cadena de caracteres no válidos
  const cleanedStr = str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, ''); // Reemplazar todo lo que no sea letras o números con una cadena vacía

  // Comprobar si la cadena limpiada es un palíndromo
  const isPalindrome = cleanedStr === cleanedStr.split('').reverse().join('');
  return isPalindrome; // Devuelve true o false
};

// Do not edit below this line
module.exports = palindromes;

  test('works with numbers in a string', () => {
    expect(palindromes('rac3e3car')).toBe(true);
  });
  test('works with unevenly spaced numbers in a string', () => {
    expect(palindromes('r3ace3car')).toBe(false);
  });
});

let romanNumerals = {
  I: 1, //repete max 3x
  V: 5, //nao repete
  X: 10, //repete max 3x
  L: 50, // nao repete
  C: 100, //repete max 3x
  D: 500, // nao repete
  M: 1000, //repete max 3x
}

function romanToNumber(romanNumber) {
  const romanNumberArray = romanNumber.split('');
  return romanNumberArray;
}

console.log(romanToNumber('XIII'));
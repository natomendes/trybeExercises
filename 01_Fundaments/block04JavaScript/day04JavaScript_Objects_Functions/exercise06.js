// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function longestWord(strArr) {
  let result = '';
  for (let word of strArr) {    
    result = word.length > result.length ? word : result;    
  }
  return result;
}

console.log(longestWord(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
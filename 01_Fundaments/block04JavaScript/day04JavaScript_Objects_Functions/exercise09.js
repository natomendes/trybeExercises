// Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function matchWordEnding(word, ending) {
  if (ending.length > word) return "Word needs to be longer than sufix";
  return word.slice(word.length - ending.length, word.length).toLowerCase() === ending.toLowerCase();
}

console.log(matchWordEnding('Trybe', 'be'));
console.log(matchWordEnding('Renato', 'Ato'));
console.log(matchWordEnding('joaofernando', 'fernan'));
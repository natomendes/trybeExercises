// 3- Considere o array de strings abaixo:

let array = ['java', 'javascript', 'python', 'html', 'css'];
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

const biggestWord = (arr) => {
  let arrayOfWords = [...arr];
  let biggestWord = '';

  for (word of arrayOfWords) {
    if (word.length > biggestWord.length){
      biggestWord = word;
    }
  }
  return biggestWord;
}

const smallestWord = (arr) => {
  let arrayOfWords = [...arr];
  let smallestWord = arrayOfWords[1];

  for (word of arrayOfWords) {
    if (word.length < smallestWord.length){
      smallestWord = word;
    }
  }
  return smallestWord;
}

console.log(biggestWord(array));
console.log(smallestWord(array));
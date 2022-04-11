// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function isPalindrome(str) {  
  if(str.toLowerCase().split('').reverse().join('') === str.toLowerCase()) return true;
  return false;
}

console.log(isPalindrome('Arara'));
//Faça um programa que diz se um número definido numa variável é primo ou não.

function isPrimeNumber(num) {
  if (num < 2) return console.log('Number needs to be bigger than 1');
  let counter = 0;
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      counter += 1;
    }
  }
  if (counter === 2){
    return console.log('Number:', num, 'is Prime!');
  } else {
    return console.log('Number:', num, 'is NOT Prime!');
  }
}

isPrimeNumber(4);

// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
function sumOfAntecessors(num) {
  if (num <=0 || !Number.isInteger(num)) return "Invalid Number!";
  let sum = 0;
  
  for (let n = 1; n <= num; n++) {
    sum += n;
  }
  return sum;
}

console.log(sumOfAntecessors(5))
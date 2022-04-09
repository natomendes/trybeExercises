//Crie um algoritmo que retorne o fatorial de 10.
const factorial = (integerNum) => {
  let result = integerNum;
  for (let i = 1; i < integerNum; i += 1){
    result = result * (integerNum - i);
  }
  return result;
}

console.log(factorial(10));

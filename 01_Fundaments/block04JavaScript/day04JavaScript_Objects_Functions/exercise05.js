// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function minValue(arrNumber) {
  let minNumIndex = 0;
  for (let i in arrNumber) {
    minNumIndex = arrNumber[i] < arrNumber[minNumIndex] ? Number(i) : minNumIndex;
  }

  return minNumIndex;
}

console.log(minValue([2, 4, -16, 7, 10, 0, -3]));
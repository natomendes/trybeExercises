// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function maxValue(arrNumber) {
  let maxNum = 0;
  for (let i in arrNumber) {
    maxNum = arrNumber[i] > maxNum ? arrNumber[i] : maxNum;
  }

  return maxNum;
}

console.log(maxValue([2, 4, 6, 7, 10, 0, -3]));
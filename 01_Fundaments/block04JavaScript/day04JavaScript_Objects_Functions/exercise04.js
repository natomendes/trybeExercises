// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function maxValue(arrNumber) {
  let maxNum = 0;
  for (let i in arrNumber) {
    if (Number(i) + 1 === arrNumber.length) return maxNum;
    
    maxNum = arrNumber[i] > arrNumber[Number(i) + 1] ? Number(i) : Number(i) + 1;
  }
}

console.log(maxValue([2, 3, 6, 7, 10, 1]));
// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function minValue(arrNumber) {
  let maxNum;
  for (let i in arrNumber) {
    if (Number(i) + 1 === arrNumber.length) return maxNum;
    
    maxNum = arrNumber[i] < arrNumber[Number(i) + 1] ? Number(i) : Number(i) + 1;
  }
}

console.log(minValue([2, 4, 6, 7, 10, 0, -3]));
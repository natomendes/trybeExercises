// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function mostRepeated(arrNumber) {
  let mostRepeated = [0, 0, []];

  for (let number of arrNumber) {
    let counter = 0;
    for (let checkNumber of arrNumber) {
      if (number === mostRepeated[0] || mostRepeated[2].includes(number)) break;
      if (number === checkNumber) counter++;
    }

    if (counter > mostRepeated[1]) {
      mostRepeated[0] = number;
      mostRepeated[1] = counter;
    }

    mostRepeated[2].push(number);
  }

  return mostRepeated[0];
}

console.log(mostRepeated([2, 3, 2, 5, 8, 2, 3]))
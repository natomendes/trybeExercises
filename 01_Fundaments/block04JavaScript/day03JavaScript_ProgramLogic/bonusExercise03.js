//Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima um triângulo retângulo com 5 asteriscos de base começando da direita para a esquerda
const drawSquare = (num) => {
  if (num < 2) return console.log('Number needs to be bigger than 1');
  let line = '';
  let spacing = '';
  for (let z = 0; z < num; z += 1) {
    spacing += ' ';
  }
  for (let i = 0; i < num; i += 1) {
    line += '*';
    spacing = spacing.slice(1);
    console.log(spacing+line);
  }
}

drawSquare(5);
//Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima uma pirâmide com n asteriscos de base
const drawSquare = (num) => {
  if (num < 3) return console.log('Number needs to be bigger than 2');
  if (num % 2 === 0) return console.log('Number needs to be an odd number');
  let line = '';
  let spacing = '';
  for (let z = 0; z < num - 1; z += 1) {
    spacing += ' ';
  }
  line += '*';
  for (let i = 0; i < num; i += 2) {
    let cropSize = (num - i - 1) / 2;
    console.log(spacing.slice(0, cropSize) + line + spacing.slice(0, cropSize));
    spacing = spacing.slice(2);
    line += '**';
  }
}

drawSquare(11);

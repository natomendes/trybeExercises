//Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima uma pirâmide com n asteriscos de base
const drawSquare = (num) => {
  if (num < 3) return console.log('Number needs to be bigger than 2');
  if (num % 2 === 0) return console.log('Number needs to be an odd number');
  let line = '';
  let spacing = '';
  for (let z = 0; z < num - 1; z += 1) {
    spacing += ' ';
  }
  
  line = '*';
  let middleSpace = spacing;
  for (let i = 0; i < num; i += 2) {
    let cropSize = (num - i - 1) / 2;

    if (i + 1 === num) {
      let lastLine = '';
      for (let y = 0; y < num; y += 1) {
        lastLine += '*';
      }
      console.log(lastLine);
      break;
    }

    console.log(spacing.slice(0, cropSize) + line + spacing.slice(0, cropSize));
    line = '*' + middleSpace.slice(0, i + 1) + '*';
    spacing = spacing.slice(2);
  }
}

drawSquare(11);

//Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima um triângulo retângulo com 5 asteriscos de base
const drawSquare = (num) => {
  if (num < 2) return console.log('Number needs to be bigger than 1');
  let line = '';

  for (let i = 0; i < num; i += 1){
    line += '*';
    console.log(line); 
  }
}

drawSquare(5);
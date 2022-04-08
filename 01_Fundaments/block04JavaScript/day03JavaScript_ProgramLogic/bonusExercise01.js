//Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n
const drawSquare = (num) => {
  let line = '';
  
  for (let i = 0; i < num; i += 1){
    line += '*';
  }

  for (let i = 0; i < num; i += 1){
    console.log(line);    
  }
}

drawSquare(5);
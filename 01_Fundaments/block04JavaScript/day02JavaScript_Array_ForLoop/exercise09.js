//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let newArray = [];

for (let i = 0; i < 25; i += 1) {
  newArray.push(i+1);
}

for (itens of newArray){
  console.log(itens/2);
}




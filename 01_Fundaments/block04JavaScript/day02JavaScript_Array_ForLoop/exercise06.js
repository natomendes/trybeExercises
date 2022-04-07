//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [50, 90, 30, 190, 70, 8, 100, 2, 350, 270];

let oddNumbers = 0;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 === 1) {
    oddNumbers += 1;
  }
}

if (oddNumbers === 0) {
  console.log('Zero odd numbers found.');
} else {
  console.log('Odd numbers found: ' + oddNumbers);
}



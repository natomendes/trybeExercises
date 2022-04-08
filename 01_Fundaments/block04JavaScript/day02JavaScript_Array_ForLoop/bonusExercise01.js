// Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numbers.length; i += 1){
 for (let priorIndex = 0; priorIndex < i; priorIndex += 1){
  if (numbers[i] < numbers[priorIndex]) {
    let numberToSwap = numbers[i];
    numbers[i] = numbers[priorIndex]
    numbers[priorIndex] = numberToSwap;
  }
 }
}

console.log(numbers);



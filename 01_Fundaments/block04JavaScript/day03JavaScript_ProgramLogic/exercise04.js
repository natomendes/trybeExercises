// escreva um algoritmo que retorne o maior número primo entre 0 e 50

const biggestPrimeNumber = (num) => {
  let bigPrimeNumber = 0;

  for (let i = 1; i < num; i += 1){
    
    let counter = 0;
    
    for (let z = 0; z <= i; z += 1){
      if (i % z === 0) {
        counter++;
        
      }
    }

    if (counter === 2){
      bigPrimeNumber = i;
    }

  }
  
  return bigPrimeNumber;
}

console.log(biggestPrimeNumber(50));
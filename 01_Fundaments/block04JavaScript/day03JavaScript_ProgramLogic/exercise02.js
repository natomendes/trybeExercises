//desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab"

const stringInverter = (originalString) => {
  let outputString = '';
  for (let i = 0; i < originalString.length; i += 1) {
    outputString = originalString[i] + outputString; 
  }
  console.log(outputString.toLowerCase());
}

stringInverter('Renato Mendes');
document.querySelector('#elementoOndeVoceEsta').parentNode.style.backgroundColor = 'green';

document.querySelector('#elementoOndeVoceEsta').parentNode.style.padding = '10px';

document.querySelector('#primeiroFilhoDoFilho').innerText = 'Adicionado texto ao elemento primeiroFilhoDoFilho.';

// console.log(document.querySelector('#pai').firstElementChild);

// console.log(document.querySelector('#elementoOndeVoceEsta').previousElementSibling);

// console.log(document.querySelector('#elementoOndeVoceEsta').nextSibling);

// console.log(document.querySelector('#elementoOndeVoceEsta').nextElementSibling);

// console.log(document.querySelector('#pai').children[2]);

const filho = document.createElement('section');

document.querySelector('#pai').appendChild(filho);

const filho2 = document.createElement('section');

document.querySelector('#elementoOndeVoceEsta').appendChild(filho2);

const filho3 = document.createElement('section');

filho3.id = 'filho3';

document.querySelector('#elementoOndeVoceEsta').firstElementChild.appendChild(filho3);

// console.log(document.querySelector('#filho3').parentElement.parentElement.nextElementSibling);

const elementPai = document.querySelector('#pai');
for (let element of elementPai.children) {
  if (element.id !== 'elementoOndeVoceEsta') {
    elementPai.removeChild(element);
  }
}
elementPai.removeChild(document.querySelector('#quartoEUltimoFilho'));

const element2 = document.querySelector('#elementoOndeVoceEsta');
console.log(element2);
for (let element of element2.children) {
  if (element.id !== 'primeiroFilhoDoFilho') {
    document.querySelector('#elementoOndeVoceEsta').removeChild(element);
  }
}
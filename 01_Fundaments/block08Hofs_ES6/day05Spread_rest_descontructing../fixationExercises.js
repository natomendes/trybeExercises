// 1 - Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações referentes ao cargo desta pessoa usuária na empresa trappistEnterprise. Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator.

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const employee = {...user, ...jobInfos};
// console.log(employee);


// 2 - Com o objeto em mãos, imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals.
// "Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic"
const printMessage = () => {
  const { name, age, nationality, profession, squad, squadInitials } = employee;
  return `Hi, my name is ${name}, i'm ${age} years old and i'm ${nationality}.
I work as a ${profession} and my squad is ${squadInitials}-${squad}`
}

// console.log(printMessage())


// 3 - Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
// saudacoes[1](saudacoes[0]); Olá

const [ message , printSalutation ] = saudacoes;
// Produza o mesmo resultado acima, porém utilizando array destructuring
// printSalutation(message);


// 4 - A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

const array = [comida, animal, bebida];

[ animal, bebida, comida ] = array

// console.log(comida, animal, bebida); // arroz gato água

// 5 - array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares.

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

const [ , , , ...rest ] = numerosPares;


numerosPares = [...rest]
// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
// console.log(numerosPares); 

// 6- Do jeito que está, quando passamos person para a função GetNationality o retorno é João is undefined. Ajuste a função GetNationality para que a chamada GetNationality(person) retorne João is Brazilian.

const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

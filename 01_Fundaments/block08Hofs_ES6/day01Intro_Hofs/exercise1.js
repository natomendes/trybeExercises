const newEmployee = (name, lastName) => ({
  name: `${name} ${lastName}`,
  email: `${name.toLowerCase()}_${lastName.toLowerCase()}@trybe.com`,
});

const newEmployees = (func) => ({
  id1: func('Pedro', 'Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
  id2: func('Luiza', 'Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
  id3: func('Carla', 'Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
});

console.log(newEmployees(newEmployee));
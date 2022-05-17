const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addShift = (lesson, key, value) => lesson[key] = value;

addShift(lesson2, 'turno', 'noite');
// console.log(lesson2);

const listObjKeys = (obj) => Object.keys(obj);

// console.log(listObjKeys(lesson1));

const objLength = (obj) => Object.entries(obj).length;

// console.log(objLength(lesson3));

const objValues = (obj) => Object.values(obj);

// console.log(objValues(lesson1));

const allLessons = {
  lesson1: Object.assign(lesson1),
  lesson2: Object.assign(lesson2),
  lesson3: Object.assign(lesson3)
}

const totalStudents = Object.values(allLessons).reduce((total ,key) => {
  return total + key.numeroEstudantes;
}, 0);

console.log(`Numero total de estudantes: ${totalStudents}`);

const valueByIndex = (obj, ind) => Object.values(obj).filter((value, index) => ind === index);

console.log(valueByIndex(lesson1, 0).toString());

const verifyPair = (obj, key, value) => obj[key] === value;

console.log(verifyPair(lesson3, 'turno', 'noite'))
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'))
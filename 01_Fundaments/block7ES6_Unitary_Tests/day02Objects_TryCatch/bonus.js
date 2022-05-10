const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

const allLessons = {
  lesson1: Object.assign(lesson1),
  lesson2: Object.assign(lesson2),
  lesson3: Object.assign(lesson3),
};

// const totalStudentsPerKey = (lessons, objKey, value) =>
//   Object.values(lessons).reduce((total, key) => {
//     if (key[objKey] === value) return total + key.numeroEstudantes;

//     return total;
//   }, 0);

// const createReport = (lessons, keyTeacher, teacherName) => Object.values(lessons)
// .filter((object) => {
//   return object[keyTeacher] === teacherName;
// })
// .reduce((finalObject, currentObject) => {
//   finalObject.aulas.push(currentObject.materia);
//   return finalObject;
// }, { professor: teacherName, aulas: [], estudantes: totalStudentsPerKey(allLessons, keyTeacher, teacherName)});

// console.log(createReport(allLessons, 'professor', 'Maria Clara'))

const createReport = (lessons, keyTeacher, teacherName) => {
  try {
    if (Object.values(lessons).length === 0)
      throw new Error("Lista de aulas inválida!");

    const finalReport = Object.values(lessons).reduce(
      (finalObject, currentObject) => {
        if (currentObject[keyTeacher] === teacherName) {
          finalObject.aulas.push(currentObject.materia);
          finalObject.estudantes += currentObject.numeroEstudantes;
        }
        return finalObject;
      },
      { professor: teacherName, aulas: [], estudantes: 0 }
    );

    if (finalReport.aulas.length === 0)
      throw new Error(`Professor(a): ${teacherName} não deu nenhuma aula!`);
    return finalReport;
  } catch (error) {
    return error.message;
  }
};

console.log(createReport(allLessons, "professor", "Maria Clara"));

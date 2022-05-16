const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const mapStudentScore = (rightAnswers, studentAnswers) => (
  studentAnswers.map((value, index) => {
    if (value === 'N.A') return 0;
    if (value === rightAnswers[index]) return 1;
    return -0.5;
  })
)

const getTestScore = (rightAnswers, studentAnswers, func) => (
  func(rightAnswers, studentAnswers).reduce((acc, value) => acc + value)
);

console.log(getTestScore(RIGHT_ANSWERS, STUDENT_ANSWERS, mapStudentScore));

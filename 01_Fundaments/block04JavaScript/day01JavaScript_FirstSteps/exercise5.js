const angle1 = -60;
const angle2 = 50;
const angle3 = 60;

if (angle1 < 0 || angle2 < 0 || angle3 < 0) {
  console.log('Invalid angle!');
} else {
  console.log(angle1 + angle2 + angle3 === 180 ? true : false);
}
document.getElementById('header-container').style.backgroundColor = '#036b52';

document.querySelector('.emergency-tasks').style.backgroundColor = 'red';

document.querySelectorAll('.emergency-tasks div')[1].style.backgroundColor = 'Orange';

document.querySelectorAll('.no-emergency-tasks div')[0].style.backgroundColor = 'Orange';

document.querySelectorAll('.no-emergency-tasks div')[1].style.backgroundColor = 'Green';

for (let element of document.querySelectorAll('h3')) {
  element.style.backgroundColor = 'Black';
}
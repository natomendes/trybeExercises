function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

function createDaysOfTheMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysList = document.querySelector('#days');

  for (let i = 0; i < dezDaysList.length; i += 1) {
    const liDays = document.createElement('li');
    liDays.innerText = dezDaysList[i];
    liDays.classList.add('day');

    if (dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31 ) {
      liDays.classList.add('holiday');
    }

    if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18 || dezDaysList[i] === 25) {
      liDays.classList.add('friday');
    }

    daysList.appendChild(liDays);
  }
}

function createButton(nameButton, idName, pElement) {
  const btn = document.createElement('button');
  btn.id = idName;
  btn.innerText = nameButton;
  const parentElement = document.querySelector(pElement);
  parentElement.appendChild(btn);  
}

createButton('Feriados', 'btn-holiday', '.buttons-container');

const btnHolidays = document.getElementById('btn-holiday');

btnHolidays.addEventListener('click', function () {
  const holidays = document.querySelectorAll('.holiday');

  for (let index in holidays) {
    if (holidays[index].style.backgroundColor === 'green') {
      holidays[index].style.backgroundColor = 'rgb(238,238,238)';
      holidays[index].style.color = 'rgb(119, 119, 119)';
    } else {
      holidays[index].style.backgroundColor = 'green';
      holidays[index].style.color = 'white';
    }    
  }
  
})



createDaysOfTheWeek();

// Escreva seu código abaixo.


createDaysOfTheMonth();



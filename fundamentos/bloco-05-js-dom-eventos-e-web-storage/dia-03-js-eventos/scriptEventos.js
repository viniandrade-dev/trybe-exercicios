function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
function createDaysOfTheMonth() {
  let daysList = document.getElementById("days");

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let days = document.createElement("li");
    days.innerText = dezDaysList[i];
    daysList.appendChild(days);
    days.className = "day";
    if (
      dezDaysList[i] === 24 ||
      dezDaysList[i] === 25 ||
      dezDaysList[i] === 31
    ) {
      days.className = "day holiday";
    }
    if (
      dezDaysList[i] === 4 ||
      dezDaysList[i] === 11 ||
      dezDaysList[i] === 18 ||
      dezDaysList[i] === 25
    ) {
      days.className = "day friday";
    }
    if (dezDaysList[i] === 25) {
      days.className = "day friday holiday";
    }
  }
}

createDaysOfTheMonth();

let buttonContainer = document.querySelector(".buttons-container");
let button = document.createElement("button");

function createHolidayButton(Feriados) {
  button.innerText = "Feriados";
  button.className = "btn-holiday";
  buttonContainer.appendChild(button);
}

createHolidayButton();

let holidays = document.getElementsByClassName("holiday");

// exercicio 3

function changeHolidaysBackColor() {
  for (let j = 0; j < holidays.length; j += 1) {
    if (holidays[j].style.backgroundColor === "purple") {
      holidays[j].style.backgroundColor = "rgb(238,238,238)";
    } else {
      holidays[j].style.backgroundColor = "purple";
    }
  }
}

button.addEventListener("click", changeHolidaysBackColor);

// exercicio 4

function createSexta() {
  sexButton = document.createElement("button");
  sexButton.innerText = "Sexta-feira";
  sexButton.setAttribute("id", "btn-friday");
  buttonContainer.appendChild(sexButton);
}

createSexta();

//exercicio 5

let fridays = document.querySelectorAll(".friday");

function changeFridayText() {
  for (let k = 0; k < fridays.length; k += 1) {
      fridays[k].innerText = 'SEXTOU MEU CHAPA!';
  }
}

sexButton.addEventListener('click', changeFridayText);

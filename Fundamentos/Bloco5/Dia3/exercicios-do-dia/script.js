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
  
  createDaysOfTheWeek();
  
  let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function completarDias() {
      let daysList = document.querySelector('#days');

    for (let i = 0; i < dezDaysList.length; i++){
        let day = dezDaysList[i];
        let item = document.createElement('li');
        item.innerHTML = day;
        item.className = "day"
        if (day === 24 || day === 25 || day ===31){
            item.classList.add('holiday');
        }
        if (day === 4 || day === 11 || day ===18 || day===25){
            item.classList.add('friday');
        }
        daysList.appendChild(item);
    };
    
  };

  completarDias();

  //Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados
function createButton(buttonName){
  let btn = document.createElement('button');
  let buttonContainer = document.querySelector('.buttons-container');
  if (buttonName === 'Feriados'){
    btn.id = 'btn-holiday';  
  }
  if (buttonName === "Sexta-feira"){
    btn.id = 'btn-friday'
  }
  btn.innerHTML = buttonName;
  buttonContainer.appendChild(btn);
  
}

createButton('Feriados');

let btnHoliday = document.querySelector('#btn-holiday');

//Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .

btnHoliday.addEventListener('click', function(){
  let holidayList = document.querySelectorAll('.holiday');
  for (let i = 0; i < holidayList.length; i += 1){
    if (holidayList[i].style.backgroundColor === 'red'){
      holidayList[i].style.backgroundColor = 'rgb(238,238,238)';
    } else {
      holidayList[i].style.backgroundColor = 'red';
    }
    
  }
  
})  
//Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".

createButton('Sexta-feira');
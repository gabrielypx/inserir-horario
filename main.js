function app() {
  const inputTime = document.getElementById('inputTime')
  const btnSubmit = document.getElementById('btnSubmit')
  const result = document.getElementById('result')

  btnSubmit.addEventListener('click', () => {
    const hour = new Date(`2000-01-01T${inputTime.value}`); // Utilizada uma data qualquer, pois o que importa é somente o horário

    const hourMinute = inputTime.value.split(':');

    if (hour <= new Date(`2000-01-01T12:00`) && hour >= new Date(`2000-01-01T00:00`)) {
      result.innerText = 'Bom Dia!';
      result.style.color = "blue"
    } else if (hour >= new Date(`2000-01-01T12:01`) && hour <= new Date(`2000-01-01T18:00`)) {
      result.innerText = 'Boa Tarde!';
      result.style.color = "purple"
    } else if (hour >= new Date(`2000-01-01T18:01`) && hour <= new Date(`2000-01-01T23:59`)) {
      result.innerText = 'Boa noite!';
      result.style.color = "pink"
    } else if (hourMinute[0] > 23) {
      result.innerText = 'Você só pode informar um horario até 23:59.';  
      result.style.color = "orange"
    } else if (hourMinute[1] > 59) {
      result.innerText = 'Os minutos vão só até 59.';  
      result.style.color = "green"
    } else {
      result.innerText = 'Você precisa informar um horario no formato HH:mm';  
      result.style.color = "red"
    }

    
  });
}

app();
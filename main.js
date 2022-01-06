function app() {
  const inputTime = document.getElementById('inputTime')
  const btnSubmit = document.getElementById('btnSubmit')
  const result = document.getElementById('result')

  btnSubmit.addEventListener('click', () => {
    const hour = new Date(`2000-01-01T${inputTime.value}`); // Utilizada uma data qualquer, pois o que importa é somente o horário

    const hourMinute = inputTime.value.split(':');

    if (hour <= new Date(`2000-01-01T12:00`) && hour >= new Date(`2000-01-01T00:00`)) {
      result.innerText = 'Bom Dia!';
      result.style.color = "#54a3c2"
    } else if (hour >= new Date(`2000-01-01T12:01`) && hour <= new Date(`2000-01-01T18:00`)) {
      result.innerText = 'Boa Tarde!';
      result.style.color = "#6c54c2"
    } else if (hour >= new Date(`2000-01-01T18:01`) && hour <= new Date(`2000-01-01T23:59`)) {
      result.innerText = 'Boa noite!';
      result.style.color = "#ec74dc"
    } else if (hourMinute[0] > 23) {
      result.innerText = 'Você só pode informar um horário até 23:59.';  
      result.style.color = "#e68659"
    } else if (hourMinute[1] > 59) {
      result.innerText = 'Os minutos vão só até 59.';  
      result.style.color = "#59e665"
    } else {
      result.innerText = 'Você precisa informar um horário no formato HH:mm';  
      result.style.color = "#df4040";
      result.style.fontSize ="15px"
    }

    
  });
}

app();
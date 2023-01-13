function getCurrentDate() {
  return new Date();
}

function getDayOfWeek(date) {
 switch (date.getDay()) {
   case 0:
    return "Domingo";
  case 1:
    return "Segunda";
  case 2:
    return "Terça";
  case 3:
    return "Quarta";
  case 4:
    return "Quinta";
  case 5:
    return "Sexta";
  case 6:
    return "Sábado";
  default:
    return "Dia inválido.";
 }
}

function getMonth(date) {
  switch (date.getMonth()) {
    case 0:
      return "Janeiro";
    case 1:
      return "Fevereiro";
    case 2:
      return "Março";
    case 3:
      return "Abril";
    case 4:
      return "Maio";
    case 5:
      return "Junho";
    case 6:
      return "Julho";
    case 7:
      return "Agosto";
    case 8:
      return "Setembro";
    case 9:
      return "Outubro";
    case 10:
      return "Novembro";
    case 11:
      return "Dezembro";
  }
}

function formatDate(date) {
  return `${getDayOfWeek(date)}, ${date.getDate()} de ${getMonth(date)} de ${date.getFullYear()}`;
}

function formatHour(date) {
  return `${date.getHours()}:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}`;
}

const date_h1 = document.querySelector('#date');
const hour_p = document.querySelector('#hour');

const date = getCurrentDate();

const current_date = formatDate(date);
const current_hour = formatHour(date);

date_h1.innerHTML = current_date;
hour_p.innerHTML = current_hour;

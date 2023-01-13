function getDiaSemana(diaSemana) {
  let diaSemanaTexto;

  switch (diaSemana) {
    case 0:
      diaSemanaTexto = 'Domingo';
      return diaSemanaTexto;
    case 1:
      diaSemanaTexto = 'Segunda';
      return diaSemanaTexto;
    case 2:
      diaSemanaTexto = 'Terça';
      return diaSemanaTexto;
    case 3:
      diaSemanaTexto = 'Quarta';
      return diaSemanaTexto;
    case 4:
      diaSemanaTexto = 'Quinta';
      return diaSemanaTexto;
    case 5:
      diaSemanaTexto = 'Sexta';
      return diaSemanaTexto;
    case 6:
      diaSemanaTexto = 'Sábado';
      return diaSemanaTexto;
  }
}

const date = new Date('2020-09-16 00:00:00');
let diaSemana = date.getDay();
const diaSemanaTexto = getDiaSemana(diaSemana);

console.log(diaSemana, diaSemanaTexto)
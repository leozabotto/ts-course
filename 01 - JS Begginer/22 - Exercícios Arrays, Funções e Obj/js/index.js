alert('Oi')
function meuEscopo () {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');

  const pessoas = [];

  /*form.onsubmit = function (evento) {
    evento.preventDefault();
  };*/

  let cont = 0

  function recebeEventoForm (evento) {
    evento.preventDefault();

    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

    pessoas.push(criaPessoa(nome.value,sobrenome.value,peso.value,altura.value))

    resultado.innerHTML += `
    <p><strong>${pessoas[cont].nome} ${pessoas[cont].sobrenome}</strong></p>
    <span> Peso: ${pessoas[cont].peso} | Altura: ${pessoas[cont].altura} </span>
    <br>
    `
  }

  function criaPessoa(nome, sobrenome, peso, altura) {
    return {
      nome,
      sobrenome,
      peso,
      altura
    }
  }
  

  form.addEventListener('submit', recebeEventoForm)
}

meuEscopo();
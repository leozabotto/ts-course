function privateEscope() {
  const form = document.getElementById('form_imc');
  const div_resultado = document.getElementById('resultado');
  function calculaImc(peso, altura) {
    const imc = (peso / (altura ** 2)).toFixed(2);
    return imc;
  }
  function tituloImc(imc) {
    if (imc < 18.5) {
      div_resultado.classList.add("bad");
      return 'Abaixo do peso'
    }
    else if (imc >= 18.5 && imc <= 24.9) {
      div_resultado.classList.remove("bad");
      return 'Peso normal'
    }
    else if (imc >= 25 && imc <= 29.9) {
      div_resultado.classList.add("bad");
      return 'Sobrepeso'
    }
    else if (imc >= 30 && imc <= 34.9) {
      div_resultado.classList.add("bad");
      return 'Obesidade grau 1'
    }
    else if (imc >= 35 && imc <= 39.9) {
      div_resultado.classList.add("bad");
      return 'Obesidade grau 2'
    }
    else if (imc == NaN) {
      div_resultado.classList.add("bad");
      return 'Dados inválidos. Tente novamente.'
    }
    else {
      div_resultado.classList.add("bad");
      return 'Obesidade grau 3'
    }
  }
  function handleSubmit(evento) {  
    evento.preventDefault();   
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const imc = calculaImc(peso, altura);
    const titulo = tituloImc(imc);
    if (isNaN(imc)) {
      const resultado = `Valores inválidos. Tente novamente.`;
      div_resultado.innerHTML = resultado;
      div_resultado.classList.add("bad");
    }
    else {
      const resultado = `O seu IMC é ${imc} (${titulo})`;
      div_resultado.innerHTML = resultado;
    }
  }
  form.addEventListener('submit', handleSubmit)
}
privateEscope();
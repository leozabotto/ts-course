function rand(min, max) {
  min *= 1000
  max *+ 1000
  return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(msg.toUpperCase() + ' - Passei na promise')
    }, tempo)
  })
}

// Promisse.all

const promises = [
  'Primeiro valor',
  esperaAi('Promise 1', 3000),
  esperaAi('Promise 2', 500),
  esperaAi('Promise 3', 1000),
  'Outro valor'
]

Promise.all(promises)
  .then(valor => console.log(valor))
  .catch(erro => console.log(erro))

// Promisse.race -> Entrega a primeira promise resolvida

// Promisse.resolve -> promessa já resolvida 

function baixaPagina() {
  const emCache = true

  if(emCache) {
    return Promise.resolve('Página em cache')
  } else {
    return esperaAi('Baixei a página')
  }
}

baixaPagina()
  .then(dadosPagina => {
    console.log(dadosPagina)
  })
  .catch(e => console.log(e))


// Promisse.reject -> Entrega promessa já rejeitada
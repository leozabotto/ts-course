const express = require('express')
const app = express()

// Precisa para poder usar o body
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome: <input type="text" name="nome">
  <button>Enviar</button>
  </form>
  `);
})

// param? -> opcional

// param vs query string (?nome=xxx)

app.get('/testes/:idUsuarios', (req, res) => {
  console.log(req.params)
  console.log(req.query)
  res.send('Oi')
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.send(`O que você me enviou foi: ${req.body.nome}`);
})

app.get('/contato', (req, res) => {
  res.send('Obrigado por entrar em contato com a gente.')
})

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000')
  console.log('Servidor executando na porta 3000')
})
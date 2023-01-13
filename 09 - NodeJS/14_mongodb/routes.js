const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')

// function meuMiddleware(req, res, next) {
//   req.session = { nome: 'Leo', email: 'leo@leo.com' }
//   console.log()
//   console.log('Passei no seu middleware')
//   console.log()
//   next()
// }

// Rotas da home
route.get('/',  homeController.paginaInicial)
route.post('/', homeController.trataPost)

// , function(req, res, next) {
//   console.log()
//   console.log('Ainda estou aqui!')
//   console.log(`'último middleware': Olha o que tem na req.session.nome: ${req.session.nome}`)
// }

// Rotas de contato
route.get('/contato', contatoController.paginaInicial)

module.exports = route

// Req. é como se fosse uma corrente -> passa através dos middlewares